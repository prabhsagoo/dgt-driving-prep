'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '@/context/LanguageContext';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import { TOPICS } from '@/data/topics';
import { Question } from '@/types';
import TrafficSign from '@/components/TrafficSign';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  Flame,
  Home,
  Flag,
  AlertCircle,
  Eye,
  BarChart3
} from 'lucide-react';
import confetti from 'canvas-confetti';

const EMERGENCY_QUESTIONS: Question[] = [
  {
    id: 'em-001',
    topicId: 'speed-limits',
    question: {
      es: '¿Cuál es la velocidad máxima genérica para un turismo en autopista o autovía?',
      en: 'What is the generic speed limit for a car on a motorway?',
      ca: 'Quina és la velocitat màxima per a un turisme a una autopista?'
    },
    options: {
      es: ['100 km/h', '120 km/h', '130 km/h'],
      en: ['100 km/h', '120 km/h', '130 km/h'],
      ca: ['100 km/h', '120 km/h', '130 km/h']
    },
    correctIndex: 1,
    explanation: {
      es: 'El límite en autopista o autovía es 120 km/h.',
      en: 'The standard limit is 120 km/h.',
      ca: 'El límit estàndard és 120 km/h.'
    }
  }
];

function buildExamQuestions(): Question[] {
  try {
    const raw = Array.isArray(SAMPLE_QUESTIONS) && SAMPLE_QUESTIONS.length > 0 
      ? SAMPLE_QUESTIONS 
      : EMERGENCY_QUESTIONS;

    const pool = raw.filter((q) => q && q.question && q.options);
    if (pool.length === 0) return EMERGENCY_QUESTIONS;

    // Group questions by canonical module
    const groups: Record<string, Question[]> = {};
    pool.forEach((q) => {
      const tid = q.topicId || 'general';
      if (!groups[tid]) groups[tid] = [];
      groups[tid].push(q);
    });

    const topicKeys = Object.keys(groups);
    const selected: Question[] = [];
    const usedIds = new Set<string>();

    // Step 1: Draw ~3-4 balanced questions per topic
    topicKeys.forEach((key) => {
      const topicPool = [...groups[key]].sort(() => 0.5 - Math.random());
      const toTake = topicPool.slice(0, 3);
      toTake.forEach((q) => {
        selected.push(q);
        usedIds.add(q.id);
      });
    });

    // Step 2: Fill the remaining slots randomly up to 30
    const remainingPool = pool
      .filter((q) => !usedIds.has(q.id))
      .sort(() => 0.5 - Math.random());

    for (const q of remainingPool) {
      if (selected.length >= 30) break;
      selected.push(q);
      usedIds.add(q.id);
    }

    // Step 3: Fallback if pool is under 30
    if (selected.length < 30) {
      const shuffledAll = [...pool].sort(() => 0.5 - Math.random());
      while (selected.length < 30) {
        selected.push(shuffledAll[selected.length % shuffledAll.length]);
      }
    }

    // Final shuffle so questions from the same topic aren't adjacent
    return selected.sort(() => 0.5 - Math.random());
  } catch {
    return EMERGENCY_QUESTIONS;
  }
}

export default function ExamEngine() {
  const { language } = useLanguage();
  const [questions, setQuestions] = useState<Question[]>(() => buildExamQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const copy: {
    examBadge: Record<Language, string>;
    finishTest: Record<Language, string>;
    previous: Record<Language, string>;
    next: Record<Language, string>;
    flag: Record<Language, string>;
    unflag: Record<Language, string>;
    jumpTo: Record<Language, string>;
    unanswered: Record<Language, string>;
    answered: Record<Language, string>;
    flagged: Record<Language, string>;
    of: Record<Language, string>;
    answeredCount: (answered: number, total: number) => Record<Language, string>;
    passedTitle: Record<Language, string>;
    failedTitle: Record<Language, string>;
    passedDesc: Record<Language, string>;
    failedDesc: (mistakes: number) => Record<Language, string>;
    total: Record<Language, string>;
    correct: Record<Language, string>;
    errors: Record<Language, string>;
    timeSpent: Record<Language, string>;
    retake: Record<Language, string>;
    backHome: Record<Language, string>;
    viewMistakes: Record<Language, string>;
    reviewAnswers: Record<Language, string>;
    unansweredAlert: (count: number) => Record<Language, string>;
    topicBreakdown: Record<Language, string>;
    detailedReview: Record<Language, string>;
    questionLabel: Record<Language, string>;
    correctBadge: Record<Language, string>;
    failedBadge: Record<Language, string>;
    explanationLabel: Record<Language, string>;
    moduleFailures: (errors: number) => Record<Language, string>;
  } = {
    examBadge: { es: 'Simulador Oficial DGT', en: 'Official DGT Mock Exam', ca: 'Simulador Oficial DGT' },
    finishTest: { es: 'Finalizar Test', en: 'Finish Exam', ca: 'Finalitzar Test' },
    previous: { es: 'Anterior', en: 'Previous', ca: 'Anterior' },
    next: { es: 'Siguiente', en: 'Next', ca: 'Següent' },
    flag: { es: 'Dudar / Marcar', en: 'Flag Question', ca: 'Dubtar / Marcar' },
    unflag: { es: 'Desmarcar', en: 'Unflag', ca: 'Desmarcar' },
    jumpTo: { es: 'Navegación de Preguntas', en: 'Question Grid', ca: 'Navegació de Preguntes' },
    unanswered: { es: 'Sin contestar', en: 'Unanswered', ca: 'Sense respondre' },
    answered: { es: 'Contestada', en: 'Answered', ca: 'Responsa' },
    flagged: { es: 'Dudosa', en: 'Flagged', ca: 'Dudosa' },
    of: { es: 'de', en: 'of', ca: 'de' },
    answeredCount: (answered: number, total: number) => ({
      es: `${answered} / ${total} respondidas`,
      en: `${answered} / ${total} answered`,
      ca: `${answered} / ${total} respostes`,
    }),
    passedTitle: { es: '¡APTO! Examen Aprobado 🎉', en: 'PASSED! Exam Approved 🎉', ca: 'APTE! Examen Aprovat 🎉' },
    failedTitle: { es: 'NO APTO — Sigue Practicando', en: 'FAILED — Keep Practicing', ca: 'NO APTE — Continua Practicant' },
    passedDesc: {
      es: 'Has superado el examen teórico oficial de la DGT (máximo 3 fallos permitidos).',
      en: 'You passed the official DGT theoretical exam (maximum 3 mistakes permitted).',
      ca: 'Has superat l’examen teòric oficial de la DGT (màxim 3 errors permesos).'
    },
    failedDesc: (mistakes: number) => ({
      es: `Has tenido ${mistakes} fallos (el límite máximo oficial es 3). Tus preguntas falladas han quedado guardadas en "Fallos" para repasarlas.`,
      en: `You made ${mistakes} errors (the official limit is 3). Missed questions have been saved to your "Mistakes" tab for review.`,
      ca: `Has tingut ${mistakes} errors (el límit màxim oficial és 3). Les preguntes fallades s’han desat a "Errors" per repassar-les.`
    }),
    total: { es: 'Preguntas', en: 'Questions', ca: 'Preguntes' },
    correct: { es: 'Aciertos', en: 'Correct', ca: 'Encerts' },
    errors: { es: 'Fallos', en: 'Errors', ca: 'Errors' },
    timeSpent: { es: 'Tiempo Empleado', en: 'Time Spent', ca: 'Temps Emprat' },
    retake: { es: 'Nuevo Simulador', en: 'New Mock Exam', ca: 'Nou Simulador' },
    backHome: { es: 'Inicio', en: 'Home', ca: 'Inici' },
    viewMistakes: { es: 'Practicar Fallos', en: 'Practice Mistakes', ca: 'Practicar Errors' },
    reviewAnswers: { es: 'Revisar Respuestas', en: 'Review Answers', ca: 'Revisar Respostes' },
    unansweredAlert: (count: number) => ({
      es: `Te quedan ${count} preguntas sin contestar. ¿Seguro que deseas entregar el examen?`,
      en: `You have ${count} unanswered questions. Are you sure you want to finish?`,
      ca: `Et queden ${count} preguntes per respondre. Segur que vols finalitzar?`
    }),
    topicBreakdown: { es: 'Desglose por Módulo', en: 'Module Breakdown', ca: 'Desglossament per Mòdul' },
    detailedReview: {
      es: 'Revisión detallada de preguntas',
      en: 'Detailed Question Review',
      ca: 'Revisió detallada de preguntes',
    },
    questionLabel: { es: 'Pregunta', en: 'Question', ca: 'Pregunta' },
    correctBadge: { es: 'Correcta', en: 'Correct', ca: 'Correcta' },
    failedBadge: { es: 'Fallada', en: 'Failed', ca: 'Fallada' },
    explanationLabel: { es: 'Explicación', en: 'Explanation', ca: 'Explicació' },
    moduleFailures: (errors: number) => ({
      es: `${errors} fallos`,
      en: `${errors} mistakes`,
      ca: `${errors} errors`,
    }),
  };

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleFinishExam();
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }));
  };

  const toggleFlag = (idx: number) => {
    setFlaggedQuestions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const calculateResults = () => {
    let mistakes = 0;
    const failedQuestionIds: string[] = [];
    const topicStats: Record<string, { total: number; errors: number }> = {};

    questions.forEach((q, idx) => {
      const tid = q.topicId || 'general';
      if (!topicStats[tid]) topicStats[tid] = { total: 0, errors: 0 };
      topicStats[tid].total++;

      if (userAnswers[idx] !== q.correctIndex) {
        mistakes++;
        failedQuestionIds.push(q.id);
        topicStats[tid].errors++;
      }
    });

    const isPassed = mistakes <= 3;
    return { mistakes, isPassed, failedQuestionIds, topicStats };
  };

  const handleFinishExam = () => {
    const unansweredCount = questions.length - Object.keys(userAnswers).length;
    if (unansweredCount > 0 && !isSubmitted && timeLeft > 0) {
      const confirmSubmit = window.confirm(copy.unansweredAlert(unansweredCount)[language]);
      if (!confirmSubmit) return;
    }

    setIsSubmitted(true);
    const { mistakes, isPassed, failedQuestionIds } = calculateResults();

    // 1. Save failed questions to Mistakes Bank
    if (failedQuestionIds.length > 0) {
      try {
        const existing: string[] = JSON.parse(localStorage.getItem('dgt_mistakes') || '[]');
        const updated = Array.from(new Set([...existing, ...failedQuestionIds]));
        localStorage.setItem('dgt_mistakes', JSON.stringify(updated));
      } catch {
        // Fallback for private browsing storage quotas
      }
    }

    // 2. Save attempt to Exam History for Home Dashboard Readiness Score
    try {
      const existingHistory = JSON.parse(localStorage.getItem('dgt_exam_history') || '[]');
      const newAttempt = {
        id: `att-${Date.now()}`,
        date: new Date().toLocaleDateString(
          language === 'es' ? 'es-ES' : language === 'ca' ? 'ca-ES' : 'en-GB',
          {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          }
        ),
        score: questions.length - mistakes,
        total: questions.length,
        mistakes,
        passed: isPassed,
        timeSpentSeconds: 30 * 60 - timeLeft
      };
      localStorage.setItem('dgt_exam_history', JSON.stringify([...existingHistory, newAttempt]));
    } catch {
      // Fallback
    }

    if (isPassed) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handleRetake = () => {
    setQuestions(buildExamQuestions());
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentIndex(0);
    setTimeLeft(30 * 60);
    setIsSubmitted(false);
    setShowReview(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const currentQ = questions[currentIndex] || EMERGENCY_QUESTIONS[0];
  const { mistakes, isPassed, topicStats } = useMemo(() => calculateResults(), [isSubmitted, userAnswers, questions]);

  const currentQuestionText = currentQ.question[language] || currentQ.question.es || currentQ.question.en;
  const currentOptions = currentQ.options[language] || currentQ.options.es || currentQ.options.en || [];

  const timeUsedFormatted = () => {
    const elapsed = 30 * 60 - timeLeft;
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {!isSubmitted ? (
        <>
          {/* Top Bar: Timer & Status */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 font-black text-slate-950 text-sm">
                {currentIndex + 1}
              </span>
              <div>
                <span className="text-xs font-bold text-white block">
                  {copy.examBadge[language]}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {copy.answeredCount(Object.keys(userAnswers).length, questions.length)[language]}
                </span>
              </div>
            </div>

            <div className={`flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-sm font-bold border transition-colors ${
              timeLeft < 300 
                ? 'bg-rose-500/10 text-rose-400 border-rose-500/30 animate-pulse' 
                : 'bg-slate-800/80 text-slate-200 border-white/10'
            }`}>
              <Clock className="h-4 w-4 text-amber-400" />
              <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleFlag(currentIndex)}
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                  flaggedQuestions[currentIndex]
                    ? 'border-amber-400/50 bg-amber-400/10 text-amber-400'
                    : 'border-white/10 bg-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                <Flag className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {flaggedQuestions[currentIndex] ? copy.unflag[language] : copy.flag[language]}
                </span>
              </button>

              <button
                onClick={handleFinishExam}
                className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300"
              >
                {copy.finishTest[language]}
              </button>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {currentQ.imageUrl && (
              <div className="mb-6 flex justify-center">
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-inner">
                  <TrafficSign signId={currentQ.imageUrl} className="h-28 w-28 drop-shadow-md" />
                </div>
              </div>
            )}

            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-bold text-white sm:text-xl leading-relaxed">
                {currentQuestionText}
              </h2>
              {flaggedQuestions[currentIndex] && (
                <span className="shrink-0 rounded-lg bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold text-amber-400 flex items-center gap-1">
                  <Flag className="h-3 w-3" /> {copy.flagged[language]}
                </span>
              )}
            </div>

            <div className="mt-6 space-y-3">
              {currentOptions.map((option, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/10 text-white shadow-lg shadow-amber-500/5 ring-1 ring-amber-400'
                        : 'border-white/5 bg-slate-800/40 text-slate-300 hover:border-white/20 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400 text-slate-950'
                        : 'border-slate-600 bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-sm font-medium leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => prev - 1)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-800/60 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="h-4 w-4" /> {copy.previous[language]}
              </button>

              <span className="text-xs font-bold text-slate-400">
                {currentIndex + 1} {copy.of[language]} {questions.length}
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/20"
                >
                  {copy.next[language]} <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishExam}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300"
                >
                  {copy.finishTest[language]}
                </button>
              )}
            </div>
          </div>

          {/* Interactive 1-30 Navigator */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>{copy.jumpTo[language]}</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" /> {copy.unanswered[language]}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> {copy.answered[language]}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> {copy.flagged[language]}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-2 sm:grid-cols-15">
              {questions.map((_, i) => {
                const isAnswered = userAnswers[i] !== undefined;
                const isCurrent = currentIndex === i;
                const isFlagged = flaggedQuestions[i];

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`relative flex h-8 w-full items-center justify-center rounded-lg text-xs font-bold transition-all ${
                      isCurrent
                        ? 'ring-2 ring-amber-400 bg-slate-700 text-white'
                        : isAnswered
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 border border-white/5'
                    }`}
                  >
                    {i + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-400 border border-slate-950" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center backdrop-blur-2xl shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10">
              {isPassed ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              ) : (
                <XCircle className="h-12 w-12 text-rose-400" />
              )}
            </div>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl tracking-tight">
              {isPassed ? copy.passedTitle[language] : copy.failedTitle[language]}
            </h1>

            <p className="mt-2.5 text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
              {isPassed 
                ? copy.passedDesc[language] 
                : copy.failedDesc(mistakes)[language]}
            </p>

            <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl mx-auto">
              <div className="rounded-2xl border border-white/5 bg-slate-800/40 p-4">
                <div className="text-2xl font-black text-white">{questions.length}</div>
                <div className="text-xs text-slate-400 mt-0.5">{copy.total[language]}</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-800/40 p-4">
                <div className="text-2xl font-black text-emerald-400">{questions.length - mistakes}</div>
                <div className="text-xs text-slate-400 mt-0.5">{copy.correct[language]}</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-800/40 p-4">
                <div className={`text-2xl font-black ${isPassed ? 'text-amber-400' : 'text-rose-400'}`}>
                  {mistakes}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{copy.errors[language]} (Max 3)</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-800/40 p-4">
                <div className="text-2xl font-black text-slate-200">{timeUsedFormatted()}</div>
                <div className="text-xs text-slate-400 mt-0.5">{copy.timeSpent[language]}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <button
                onClick={handleRetake}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300"
              >
                <RotateCcw className="h-4 w-4" /> {copy.retake[language]}
              </button>

              <button
                onClick={() => setShowReview(!showReview)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10"
              >
                <Eye className="h-4 w-4" /> {copy.reviewAnswers[language]}
              </button>

              {mistakes > 0 && (
                <Link
                  href="/mistakes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-6 py-3 text-sm font-semibold text-rose-300 transition-all hover:bg-rose-500/20"
                >
                  <Flame className="h-4 w-4" /> {copy.viewMistakes[language]}
                </Link>
              )}

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10"
              >
                <Home className="h-4 w-4" /> {copy.backHome[language]}
              </Link>
            </div>
          </div>

          {/* Module Diagnostic Breakdown */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-4">
              <BarChart3 className="h-4 w-4 text-amber-400" />
              <span>{copy.topicBreakdown[language]}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(topicStats).map(([topicId, stats]) => {
                const topicMeta = TOPICS.find((t) => t.id === topicId);
                const title = (topicMeta?.title && topicMeta.title[language]) || topicId;
                const hasErrors = stats.errors > 0;

                return (
                  <div
                    key={topicId}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/40 p-3.5"
                  >
                    <span className="text-xs font-semibold text-slate-300 truncate max-w-[200px]">
                      {title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">
                        {stats.total - stats.errors}/{stats.total}
                      </span>
                      {hasErrors ? (
                        <span className="rounded-md bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[11px] font-bold text-rose-400">
                          {copy.moduleFailures(stats.errors)[language]}
                        </span>
                      ) : (
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-400">
                          100%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Answers Drawer */}
          {showReview && (
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-400" />
                <span>{copy.detailedReview[language]}</span>
              </h3>

              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                const qText = q.question[language] || q.question.es || '';
                const opts = q.options[language] || q.options.es || [];

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-5 backdrop-blur-md ${
                      isCorrect 
                        ? 'border-emerald-500/20 bg-emerald-500/5' 
                        : 'border-rose-500/20 bg-rose-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400">
                        {copy.questionLabel[language]} {idx + 1}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        isCorrect
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                          : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                      }`}>
                        {isCorrect ? copy.correctBadge[language] : copy.failedBadge[language]}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-white mb-3">
                      {qText}
                    </h4>

                    <div className="space-y-2 mb-3">
                      {opts.map((opt: string, oIdx: number) => {
                        const isUserChoice = userAns === oIdx;
                        const isActualCorrect = q.correctIndex === oIdx;

                        return (
                          <div
                            key={oIdx}
                            className={`rounded-xl p-2.5 text-xs font-medium border flex items-center justify-between ${
                              isActualCorrect
                                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-semibold'
                                : isUserChoice
                                ? 'border-rose-500/40 bg-rose-500/10 text-rose-300 line-through'
                                : 'border-white/5 bg-slate-800/30 text-slate-400'
                            }`}
                          >
                            <span>
                              {String.fromCharCode(65 + oIdx)}. {opt}
                            </span>
                            {isActualCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />}
                            {isUserChoice && !isActualCorrect && <XCircle className="h-4 w-4 shrink-0 text-rose-400" />}
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-xs text-slate-400 border-t border-white/5 pt-2">
                      <strong className="text-slate-300">{copy.explanationLabel[language]}: </strong>
                      {q.explanation[language] || q.explanation.es}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}