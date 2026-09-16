'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import { Question } from '@/types';
import TrafficSign from '@/components/TrafficSign';
import { 
  Flame, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  ListOrdered,
  Sparkles,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MistakesPage() {
  const { language } = useLanguage();
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const copy = {
    badge: { es: 'Banco de Errores', en: 'Mistakes Bank', ca: 'Banc d’Errors' },
    title: { es: 'Repetición de Fallos', en: 'Mistake Practice', ca: 'Repetició de Fallades' },
    subtitle: {
      es: 'Preguntas falladas en exámenes para dominar tus puntos débiles con retroalimentación inmediata.',
      en: 'Failed exam questions to master your weak spots with instant feedback.',
      ca: 'Preguntes fallades en exàmens per dominar els teus punts febles amb resposta immediata.'
    },
    clearAll: { es: 'Limpiar Todo', en: 'Clear All', ca: 'Netejar Tot' },
    practiceMode: { es: 'Modo Práctica Interactivo', en: 'Interactive Quiz Mode', ca: 'Mode Pràctica Interactiu' },
    listMode: { es: 'Modo Lista de Revisión', en: 'List Review Mode', ca: 'Mode Llista de Revisió' },
    emptyTitle: { es: '¡No tienes errores pendientes!', en: 'Zero pending mistakes!', ca: 'No tens fallades pendents!' },
    emptySubtitle: {
      es: 'Cuando falles preguntas en el simulador DGT, se guardarán aquí de forma automática para que las repases.',
      en: 'Whenever you answer incorrectly in the DGT mock exam, questions will appear here automatically for practice.',
      ca: 'Quan fallis preguntes al simulador DGT, es desaran aquí automàticament per repassar-les.'
    },
    ctaExam: { es: 'Hacer Simulador DGT', en: 'Take a Mock Exam', ca: 'Fer Simulador DGT' },
    correctAnswerLabel: { es: 'Respuesta Correcta:', en: 'Correct Answer:', ca: 'Resposta Correcta:' },
    markResolved: { es: 'Marcar como superada', en: 'Mark as mastered', ca: 'Marcar com a superada' },
    explanationLabel: { es: 'Explicación', en: 'Explanation', ca: 'Explicació' },
    nextQuestion: { es: 'Siguiente Pregunta', en: 'Next Question', ca: 'Següent Pregunta' },
    finishPractice: { es: 'Terminar Práctica', en: 'Finish Practice', ca: 'Finalitzar Pràctica' },
    previous: { es: 'Anterior', en: 'Previous', ca: 'Anterior' },
    of: { es: 'de', en: 'of', ca: 'de' },
    masteredAlert: {
      es: '¡Pregunta dominada! Se ha eliminado de tu banco de fallos.',
      en: 'Question mastered! Removed from your mistakes bank.',
      ca: 'Pregunta dominada! S’ha eliminat del teu banc de fallades.'
    },
    tryAgainHint: {
      es: 'Respuesta incorrecta. Revisa la explicación y continúa practicando.',
      en: 'Incorrect answer. Review the explanation and keep practicing.',
      ca: 'Resposta incorrecta. Revisa l’explicació i continua practicant.'
    },
    confirmClear: {
      es: '¿Seguro que deseas vaciar tu banco de fallos?',
      en: 'Are you sure you want to clear your mistakes bank?',
      ca: 'Segur que vols buidar el teu banc de fallades?'
    },
    skip: {
      es: 'Saltar',
      en: 'Skip',
      ca: 'Saltar'
    },
  };

  useEffect(() => {
    try {
      const savedIds: string[] = JSON.parse(localStorage.getItem('dgt_mistakes') || '[]');
      const matching = SAMPLE_QUESTIONS.filter((q) => savedIds.includes(q.id));
      setMistakeQuestions(matching);
    } catch {
      setMistakeQuestions([]);
    }
  }, []);

  const clearMistakes = () => {
    if (!window.confirm(copy.confirmClear[language])) return;
    localStorage.removeItem('dgt_mistakes');
    setMistakeQuestions([]);
    setIsQuizMode(false);
  };

  const removeSpecificMistake = (id: string) => {
    try {
      const savedIds: string[] = JSON.parse(localStorage.getItem('dgt_mistakes') || '[]');
      const updated = savedIds.filter((item) => item !== id);
      localStorage.setItem('dgt_mistakes', JSON.stringify(updated));
      const remaining = mistakeQuestions.filter((q) => q.id !== id);
      setMistakeQuestions(remaining);
      if (currentIndex >= remaining.length && remaining.length > 0) {
        setCurrentIndex(remaining.length - 1);
      }
      setSelectedOption(null);
      setIsAnswered(false);
    } catch {
      // Fallback
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const activeQ = mistakeQuestions[currentIndex];
    if (idx === activeQ.correctIndex) {
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
      setTimeout(() => {
        removeSpecificMistake(activeQ.id);
      }, 1600);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentIndex < mistakeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsQuizMode(false);
      setCurrentIndex(0);
    }
  };

  const currentQ = mistakeQuestions[currentIndex];
  const currentQuestionText = currentQ?.question[language] || currentQ?.question.es || '';
  const currentOptions = currentQ?.options[language] || currentQ?.options.es || [];
  const currentExplanation = currentQ?.explanation[language] || currentQ?.explanation.es || '';

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 transition-colors duration-200">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:border-rose-500/20 dark:text-rose-400">
            <Flame className="h-3.5 w-3.5" />
            <span>{copy.badge[language]} ({mistakeQuestions.length})</span>
          </div>
          <h1 className="mt-3 text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {copy.title[language]}
          </h1>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            {copy.subtitle[language]}
          </p>
        </div>

        {mistakeQuestions.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsQuizMode(!isQuizMode);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border cursor-pointer ${
                isQuizMode 
                  ? 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700' 
                  : 'border-amber-400/40 bg-amber-400/15 text-amber-700 hover:bg-amber-400/25 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400/20'
              }`}
            >
              {isQuizMode ? (
                <>
                  <ListOrdered className="h-4 w-4" /> {copy.listMode[language]}
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 fill-current" /> {copy.practiceMode[language]}
                </>
              )}
            </button>

            <button
              onClick={clearMistakes}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/20 bg-rose-500/5 px-3.5 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-500/15 dark:border-white/10 dark:bg-slate-900 dark:text-rose-400 dark:hover:bg-rose-500/10 transition-all cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" /> {copy.clearAll[language]}
            </button>
          </div>
        )}
      </div>

      {mistakeQuestions.length === 0 ? (
        /* Empty State */
        <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-12 text-center shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/50 dark:shadow-xl sm:p-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{copy.emptyTitle[language]}</h2>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {copy.emptySubtitle[language]}
          </p>
          <Link
            href="/exam"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
          >
            {copy.ctaExam[language]} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : isQuizMode && currentQ ? (
        /* Interactive Quiz Mode */
        <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {currentIndex + 1} {copy.of[language]} {mistakeQuestions.length}
            </span>
            <span className="rounded-md bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 text-[11px] font-bold text-rose-600 dark:text-rose-400">
              {copy.badge[language]}
            </span>
          </div>

          {currentQ.imageUrl && (
            <div className="flex justify-center py-2">
              <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-inner dark:border-white/10 dark:bg-slate-950/60">
                <TrafficSign signId={currentQ.imageUrl} className="h-28 w-28 drop-shadow-md" />
              </div>
            </div>
          )}

          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            {currentQuestionText}
          </h2>

          <div className="space-y-3">
            {currentOptions.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

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
                  key={optIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${style}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                    isAnswered && isCorrect
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : isAnswered && isSelected
                      ? 'border-rose-500 bg-rose-500 text-white'
                      : 'border-slate-300 bg-slate-200 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-sm leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed animate-fadeIn ${
              selectedOption === currentQ.correctIndex
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300'
            }`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {selectedOption === currentQ.correctIndex ? (
                  <>
                    <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                    {copy.masteredAlert[language]}
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-rose-500 dark:text-rose-400" />
                    {copy.tryAgainHint[language]}
                  </>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-2 border-t border-slate-200/60 dark:border-white/5 pt-2">
                <strong className="text-slate-900 dark:text-white">{copy.explanationLabel[language]}: </strong>
                {currentExplanation}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-5">
            <button
              disabled={currentIndex === 0}
              onClick={() => {
                setCurrentIndex((prev) => prev - 1);
                setSelectedOption(null);
                setIsAnswered(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-all dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> {copy.previous[language]}
            </button>

            {isAnswered ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20 cursor-pointer"
              >
                {currentIndex < mistakeQuestions.length - 1 ? copy.nextQuestion[language] : copy.finishPractice[language]}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => handleNext()}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:border-transparent dark:bg-white/5 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer"
              >
                {copy.skip[language]}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Static List View */
        <div className="space-y-4">
          {mistakeQuestions.map((q, index) => {
            const qText = q.question[language] || q.question.es;
            const correctOpt = (q.options[language] || q.options.es)[q.correctIndex];
            const explanation = q.explanation[language] || q.explanation.es;

            return (
              <div
                key={`${q.id}-${index}`}
                className="rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all hover:border-slate-300 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-md dark:hover:border-white/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 font-bold text-xs border border-rose-500/30 dark:text-rose-400">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                      {qText}
                    </h3>
                  </div>

                  <button
                    onClick={() => removeSpecificMistake(q.id)}
                    className="shrink-0 text-slate-400 hover:text-emerald-500 transition-colors p-1 cursor-pointer"
                    title={copy.markResolved[language]}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </button>
                </div>

                {q.imageUrl && (
                  <div className="my-3 flex justify-start pl-9">
                    <TrafficSign signId={q.imageUrl} className="h-16 w-16 drop-shadow-md" />
                  </div>
                )}

                <div className="mt-3 ml-9 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-300">
                  <strong className="text-emerald-800 dark:text-emerald-400">{copy.correctAnswerLabel[language]} </strong>
                  {correctOpt}
                </div>

                <p className="mt-2 ml-9 text-xs text-slate-500 dark:text-slate-400 italic">
                  {explanation}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}