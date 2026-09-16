'use client';

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { TOPICS } from '@/data/topics';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import TrafficSign from '@/components/TrafficSign';
import { Question } from '@/types';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Play, 
  ListOrdered, 
  Sparkles, 
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TopicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();

  const [isQuizMode, setIsQuizMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, totalAnswered: 0 });

  const rawId = (
    params?.topicId || 
    params?.topicld || 
    params?.id || 
    ''
  ) as string;

  const canonicalId = useMemo(() => {
    if (!rawId) return '';
    if (rawId === 'lighting') return 'lights-visibility';
    if (rawId === 'maneuvers') return 'maneuvers-lanes';
    if (rawId === 'documentation') return 'documentation-itv';
    if (rawId === 'priority-rules') return 'priority-roundabouts';
    if (rawId === 'alcohol-safety') return 'safety-alcohol';
    return rawId;
  }, [rawId]);

  const topic = useMemo(() => {
    return TOPICS.find((t) => t.id === canonicalId || t.id === rawId);
  }, [canonicalId, rawId]);

  const topicQuestions = useMemo(() => {
    return SAMPLE_QUESTIONS.filter((q) => {
      if (q.topicId === canonicalId || q.topicId === rawId) return true;
      if (canonicalId === 'lights-visibility' && (q.topicId === 'lighting' || q.topicId === 'lights-visibility')) return true;
      if (canonicalId === 'maneuvers-lanes' && (q.topicId === 'maneuvers' || q.topicId === 'maneuvers-lanes' || q.topicId === 'advanced-maneuvers')) return true;
      if (canonicalId === 'documentation-itv' && (q.topicId === 'documentation' || q.topicId === 'documentation-itv')) return true;
      if (canonicalId === 'priority-roundabouts' && (q.topicId === 'priority-rules' || q.topicId === 'priority-roundabouts')) return true;
      if (canonicalId === 'safety-alcohol' && (q.topicId === 'alcohol-safety' || q.topicId === 'safety-alcohol')) return true;
      if (canonicalId === 'road-signs' && (q.topicId === 'signs' || q.topicId === 'road-signs')) return true;
      return false;
    });
  }, [canonicalId, rawId]);

  const copy = {
    back: { es: 'Volver a módulos', en: 'Back to modules', ca: 'Tornar als mòduls' },
    quizMode: { es: 'Modo Práctica', en: 'Practice Quiz', ca: 'Mode Pràctica' },
    listMode: { es: 'Ver Todas', en: 'Browse All', ca: 'Veure Totes' },
    question: { es: 'Pregunta', en: 'Question', ca: 'Pregunta' },
    of: { es: 'de', en: 'of', ca: 'de' },
    score: { es: 'Aciertos', en: 'Score', ca: 'Encerts' },
    next: { es: 'Siguiente', en: 'Next', ca: 'Següent' },
    previous: { es: 'Anterior', en: 'Previous', ca: 'Anterior' },
    finish: { es: 'Reiniciar Práctica', en: 'Restart Topic', ca: 'Reiniciar Pràctica' },
    explanation: { es: 'Explicación', en: 'Explanation', ca: 'Explicació' },
    correctMsg: { es: '¡Respuesta Correcta!', en: 'Correct Answer!', ca: 'Resposta Correcta!' },
    incorrectMsg: { es: 'Respuesta Incorrecta', en: 'Incorrect Answer', ca: 'Resposta Incorrecta' },
    savedToMistakes: { es: 'Guardada en Fallos', en: 'Saved to Mistakes', ca: 'Desada a Errors' },
    masteryReached: { es: '¡Tema Completado!', en: 'Topic Completed!', ca: 'Tema Completat!' }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !topicQuestions[currentIndex]) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const currentQ = topicQuestions[currentIndex];
    const isCorrect = idx === currentQ.correctIndex;

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      totalAnswered: prev.totalAnswered + 1
    }));

    if (isCorrect) {
      if (currentIndex === topicQuestions.length - 1) {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      }
    } else {
      // Save mistake ID automatically
      try {
        const savedIds: string[] = JSON.parse(localStorage.getItem('dgt_mistakes') || '[]');
        if (!savedIds.includes(currentQ.id)) {
          localStorage.setItem('dgt_mistakes', JSON.stringify([...savedIds, currentQ.id]));
        }
      } catch {}
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentIndex < topicQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
      setScore({ correct: 0, totalAnswered: 0 });
    }
  };

  if (!topic) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
        <h2 className="text-xl font-bold">Topic not found</h2>
        <p className="mt-2 text-sm text-slate-400">
          Received ID: <code className="font-mono text-amber-400 font-semibold">{rawId || 'undefined'}</code>
        </p>
        <Link
          href="/learn"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{copy.back[language]}</span>
        </Link>
      </div>
    );
  }

  const currentQ = topicQuestions[currentIndex];
  const qText = currentQ ? (currentQ.question[language] || currentQ.question.es) : '';
  const opts = currentQ ? (currentQ.options[language] || currentQ.options.es || []) : [];
  const explanation = currentQ ? (currentQ.explanation[language] || currentQ.explanation.es) : '';

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          onClick={() => router.push('/learn')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{copy.back[language]}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsQuizMode(!isQuizMode);
              setSelectedOption(null);
              setIsAnswered(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-all"
          >
            {isQuizMode ? (
              <>
                <ListOrdered className="h-3.5 w-3.5" />
                <span>{copy.listMode[language]}</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{copy.quizMode[language]}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Module Title Banner */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {topic.title[language]}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {topic.description[language]}
            </p>
          </div>
          <span className="shrink-0 rounded-lg bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 font-mono text-xs font-bold text-amber-400">
            {topicQuestions.length} Qs
          </span>
        </div>

        {/* Dynamic Progress Bar */}
        {isQuizMode && (
          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-slate-800 overflow-hidden">
              <div 
                className="h-full bg-amber-400 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / topicQuestions.length) * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs font-bold text-slate-400 shrink-0">
              {currentIndex + 1}/{topicQuestions.length}
            </span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {isQuizMode && currentQ ? (
        /* Interactive Card */
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>
              {copy.question[language]} {currentIndex + 1} {copy.of[language]} {topicQuestions.length}
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{score.correct}/{score.totalAnswered} {copy.score[language]}</span>
            </span>
          </div>

          {currentQ.imageUrl && (
            <div className="flex justify-center py-2">
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-inner">
                <TrafficSign signId={currentQ.imageUrl} className="h-24 w-24 drop-shadow-md" />
              </div>
            </div>
          )}

          <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {qText}
          </h2>

          <div className="space-y-2.5">
            {opts.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

              let style = 'border-white/5 bg-slate-800/40 text-slate-300 hover:border-white/20 hover:bg-slate-800/80 active:scale-[0.99]';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'border-emerald-500 bg-emerald-500/15 text-emerald-200 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected) {
                  style = 'border-rose-500 bg-rose-500/15 text-rose-300 font-semibold line-through ring-1 ring-rose-500';
                } else {
                  style = 'border-white/5 bg-slate-800/20 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${style}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                    isAnswered && isCorrect
                      ? 'border-emerald-500 bg-emerald-500 text-slate-950'
                      : isAnswered && isSelected
                      ? 'border-rose-500 bg-rose-500 text-white'
                      : 'border-slate-600 bg-slate-800 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Verification Banner */}
          {isAnswered && (
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed animate-fadeIn ${
              selectedOption === currentQ.correctIndex
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
            }`}>
              <div className="font-bold mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  {selectedOption === currentQ.correctIndex ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      {copy.correctMsg[language]}
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-rose-400" />
                      {copy.incorrectMsg[language]}
                    </>
                  )}
                </span>
                {selectedOption !== currentQ.correctIndex && (
                  <span className="flex items-center gap-1 rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-300">
                    <Flame className="h-3 w-3" /> {copy.savedToMistakes[language]}
                  </span>
                )}
              </div>
              <p className="text-slate-300 mt-2 border-t border-white/5 pt-2">
                <strong className="text-white">{copy.explanation[language]}: </strong>
                {explanation}
              </p>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <button
              disabled={currentIndex === 0}
              onClick={() => {
                setCurrentIndex((prev) => prev - 1);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-800/60 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>{copy.previous[language]}</span>
            </button>

            {isAnswered ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-all"
              >
                <span>{currentIndex < topicQuestions.length - 1 ? copy.next[language] : copy.finish[language]}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={() => handleNext()}
                className="text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors px-2 py-1"
              >
                Saltar
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Reference List Mode */
        <div className="space-y-4">
          {topicQuestions.map((q, idx) => (
            <div
              key={`${q.id}-${idx}`}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all hover:border-white/20"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400">
                  {copy.question[language]} {idx + 1}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{q.id}</span>
              </div>

              {q.imageUrl && (
                <div className="my-2 flex justify-start">
                  <TrafficSign signId={q.imageUrl} className="h-16 w-16 drop-shadow-md" />
                </div>
              )}

              <h2 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {q.question[language] || q.question.es}
              </h2>

              <div className="mt-3 space-y-2">
                {(q.options[language] || q.options.es).map((opt, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border p-2.5 text-xs sm:text-sm flex items-center justify-between ${
                      i === q.correctIndex
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium'
                        : 'border-white/5 bg-slate-800/40 text-slate-300'
                    }`}
                  >
                    <span>
                      <span className="mr-2 font-mono text-xs opacity-70">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {opt}
                    </span>
                    {i === q.correctIndex && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />}
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-400 border-t border-white/5 pt-2.5">
                <strong className="text-slate-300">{copy.explanation[language]}: </strong>
                {q.explanation[language] || q.explanation.es}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
