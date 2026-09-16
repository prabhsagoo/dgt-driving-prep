'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { TOPICS } from '@/data/topics';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import { Question } from '@/types';
import TrafficSign from '@/components/TrafficSign';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TopicPracticePage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const topicId = params?.topicId as string;

  const currentTopic = useMemo(() => {
    return TOPICS.find((t) => t.id === topicId) || {
      id: topicId,
      title: { es: 'Módulo de Estudio', en: 'Study Module', ca: 'Mòdul d’Estudi' },
      description: {
        es: 'Preguntas oficiales del temario DGT.',
        en: 'Official syllabus questions from DGT.',
        ca: 'Preguntes oficials del temari DGT.'
      },
      icon: 'BookOpen'
    };
  }, [topicId]);

  const topicQuestions: Question[] = useMemo(() => {
    return SAMPLE_QUESTIONS.filter((q) => {
      if (q.topicId === topicId) return true;
      if (topicId === 'lights-visibility' && (q.topicId === 'lighting' || q.topicId === 'lights-visibility')) return true;
      if (topicId === 'maneuvers-lanes' && (q.topicId === 'maneuvers' || q.topicId === 'maneuvers-lanes')) return true;
      if (topicId === 'documentation-itv' && (q.topicId === 'documentation' || q.topicId === 'documentation-itv')) return true;
      if (topicId === 'priority-roundabouts' && (q.topicId === 'priority-rules' || q.topicId === 'priority-roundabouts')) return true;
      if (topicId === 'safety-alcohol' && (q.topicId === 'alcohol-safety' || q.topicId === 'safety-alcohol')) return true;
      if (topicId === 'road-signs' && (q.topicId === 'signs' || q.topicId === 'road-signs')) return true;
      return false;
    });
  }, [topicId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const copy = {
    back: { es: 'Volver a módulos', en: 'Back to modules', ca: 'Tornar a mòduls' },
    browseAll: { es: 'Ver Todos', en: 'Browse All', ca: 'Veure Tots' },
    questionCount: (count: number) => ({
      es: `${count} Preguntas`,
      en: `${count} Qs`,
      ca: `${count} Preguntes`
    }),
    questionIndex: (cur: number, total: number) => ({
      es: `Pregunta ${cur} de ${total}`,
      en: `Question ${cur} of ${total}`,
      ca: `Pregunta ${cur} de ${total}`
    }),
    scoreLabel: { es: 'Puntuación', en: 'Score', ca: 'Puntuació' },
    previous: { es: 'Anterior', en: 'Previous', ca: 'Anterior' },
    skip: { es: 'Saltar', en: 'Skip', ca: 'Saltar' },
    next: { es: 'Siguiente', en: 'Next', ca: 'Següent' },
    explanation: { es: 'Explicación', en: 'Explanation', ca: 'Explicació' },
    moduleComplete: { es: '¡Módulo Completado!', en: 'Module Completed!', ca: 'Mòdul Completat!' },
    moduleCompleteDesc: {
      es: 'Has completado todas las preguntas de este tema oficial.',
      en: 'You have finished all questions in this official syllabus module.',
      ca: 'Has completat totes les preguntes d’aquest mòdul oficial.'
    },
    retakeModule: { es: 'Repetir Tema', en: 'Retake Module', ca: 'Repetir Tema' }
  };

  const totalQuestions = topicQuestions.length;
  const currentQ = topicQuestions[currentIndex];
  const progressPercent = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (currentQ && idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  if (!totalQuestions) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">No questions found</h2>
        <Link
          href="/learn"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950"
        >
          {copy.back[language]}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10 transition-colors duration-200">
      {/* Top Nav Action Links */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{copy.back[language]}</span>
        </Link>

        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <Layers className="h-3.5 w-3.5" />
          <span>{copy.browseAll[language]}</span>
        </Link>
      </div>

      {/* Module Overview Banner Card */}
      <div className="mb-6 rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/80">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              {currentTopic.title[language] || currentTopic.title.es}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {currentTopic.description[language] || currentTopic.description.es}
            </p>
          </div>

          <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
            {copy.questionCount(totalQuestions)[language]}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-amber-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
            {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
      </div>

      {/* Practice Drill Interface */}
      {!completed ? (
        <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-2xl">
          {/* Header row: Question index + Current Score */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {copy.questionIndex(currentIndex + 1, totalQuestions)[language]}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{score}/{currentIndex + (isAnswered ? 1 : 0)} {copy.scoreLabel[language]}</span>
            </div>
          </div>

          {/* Traffic Sign / Context Graphic if present */}
          {currentQ.imageUrl && (
            <div className="my-5 flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-inner dark:border-white/10 dark:bg-slate-950/60">
                <TrafficSign signId={currentQ.imageUrl} className="h-28 w-28 drop-shadow-md" />
              </div>
            </div>
          )}

          {/* Prompt */}
          <h2 className="mt-5 text-base sm:text-lg font-bold leading-relaxed text-slate-900 dark:text-white">
            {currentQ.question[language] || currentQ.question.es}
          </h2>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {(currentQ.options[language] || currentQ.options.es).map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              let style = 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70 dark:border-white/5 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-slate-800/80';

              if (isAnswered) {
                if (isCorrect) {
                  style = 'border-emerald-500 bg-emerald-500/10 text-emerald-700 font-semibold ring-1 ring-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-200';
                } else if (isSelected) {
                  style = 'border-rose-500 bg-rose-500/10 text-rose-700 font-semibold line-through ring-1 ring-rose-500 dark:bg-rose-500/15 dark:text-rose-300';
                } else {
                  style = 'border-slate-100 bg-slate-50/40 text-slate-400 opacity-60 dark:border-white/5 dark:bg-slate-800/20 dark:text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${style}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                    isAnswered && isCorrect
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : isAnswered && isSelected
                      ? 'border-rose-500 bg-rose-500 text-white'
                      : 'border-slate-300 bg-slate-200 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className={`mt-5 rounded-2xl border p-4 text-xs leading-relaxed animate-fadeIn ${
              selectedOption === currentQ.correctIndex
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300'
            }`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {selectedOption === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                    <span>{copy.explanation[language]}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <span>{copy.explanation[language]}</span>
                  </>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-1">
                {currentQ.explanation[language] || currentQ.explanation.es}
              </p>
            </div>
          )}

          {/* Footer Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-5">
            <button
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-all dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> {copy.previous[language]}
            </button>

            {isAnswered ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20 cursor-pointer"
              >
                {currentIndex < totalQuestions - 1 ? copy.next[language] : copy.moduleComplete[language]}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:border-transparent dark:bg-white/5 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer"
              >
                {copy.skip[language]}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Completion Score Screen */
        <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-10 text-center shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/80">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
            {copy.moduleComplete[language]}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {copy.moduleCompleteDesc[language]}
          </p>

          <div className="my-6 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-3 font-mono text-lg font-black text-slate-900 dark:border-white/10 dark:bg-slate-800 dark:text-white">
            <span>{score} / {totalQuestions}</span>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400">({Math.round((score / totalQuestions) * 100)}%)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              {copy.retakeModule[language]}
            </button>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-6 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer"
            >
              {copy.back[language]}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}