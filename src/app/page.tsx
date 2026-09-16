'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { TOPICS } from '@/data/topics';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Clock, 
  AlertTriangle,
  BookOpen,
  Gauge,
  CornerUpRight,
  OctagonAlert,
  Car,
  Lightbulb,
  FileCheck,
  Wrench,
  Flame,
  CheckCircle2,
  XCircle,
  TrendingUp,
  History
} from 'lucide-react';

interface ExamAttempt {
  id: string;
  date: string;
  score: number;
  total: number;
  mistakes: number;
  passed: boolean;
  timeSpentSeconds: number;
}

const iconMap: Record<string, React.ElementType> = {
  Gauge,
  CornerUpRight,
  OctagonAlert,
  ShieldCheck,
  Car,
  Lightbulb,
  FileCheck,
  Wrench,
};

export default function HomePage() {
  const { language } = useLanguage();
  const [examHistory, setExamHistory] = useState<ExamAttempt[]>([]);
  const [mistakesCount, setMistakesCount] = useState<number>(0);

  useEffect(() => {
    try {
      const historyRaw = localStorage.getItem('dgt_exam_history');
      if (historyRaw) {
        setExamHistory(JSON.parse(historyRaw));
      }
      const mistakesRaw = localStorage.getItem('dgt_mistakes');
      if (mistakesRaw) {
        setMistakesCount(JSON.parse(mistakesRaw).length);
      }
    } catch {
      // Fallback
    }
  }, []);

  // Helper to dynamically count real questions per topic, handling ID variations
  const getTopicQuestionCount = (topicId: string): number => {
    return SAMPLE_QUESTIONS.filter((q) => {
      if (q.topicId === topicId) return true;
      if (topicId === 'priority-roundabouts' && q.topicId === 'priority-rules') return true;
      if (topicId === 'safety-alcohol' && q.topicId === 'alcohol-safety') return true;
      if (topicId === 'road-signs' && q.topicId === 'signs') return true;
      if (topicId === 'documentation-itv' && q.topicId === 'documentation') return true;
      return false;
    }).length;
  };

  // Calculate readiness metrics
  const readinessMetrics = useMemo(() => {
    if (examHistory.length === 0) {
      return {
        scorePercent: 0,
        totalTests: 0,
        passRate: 0,
        avgMistakes: 0,
        readinessStatus: 'not_started'
      };
    }

    const totalTests = examHistory.length;
    const passedTests = examHistory.filter((e) => e.passed).length;
    const passRate = Math.round((passedTests / totalTests) * 100);
    const totalMistakes = examHistory.reduce((acc, curr) => acc + curr.mistakes, 0);
    const avgMistakes = (totalMistakes / totalTests).toFixed(1);

    // Recent 5 tests weight
    const recentTests = examHistory.slice(-5);
    const recentPassRate = recentTests.filter((e) => e.passed).length / recentTests.length;
    
    // Penalty if mistakes are piling up in localStorage
    const mistakeDeduction = Math.min(25, mistakesCount * 1.2);
    const baseReadiness = Math.round(recentPassRate * 100);
    const scorePercent = Math.max(5, Math.min(99, Math.round(baseReadiness - mistakeDeduction)));

    return {
      scorePercent,
      totalTests,
      passRate,
      avgMistakes,
      readinessStatus: scorePercent >= 85 ? 'ready' : scorePercent >= 60 ? 'progress' : 'needs_study'
    };
  }, [examHistory, mistakesCount]);

  const copy = {
    badge: {
      es: 'Actualizado DGT 2026 • Permiso B',
      en: 'Updated DGT 2026 • Permiso B',
      ca: 'Actualitzat DGT 2026 • Permís B'
    },
    heroTitle1: {
      es: 'Aprueba tu carnet de conducir',
      en: 'Master your Spanish driving test',
      ca: 'Aprova el teu carnet de conduir'
    },
    heroTitle2: {
      es: 'a la primera.',
      en: 'on the first try.',
      ca: 'a la primera.'
    },
    heroDesc: {
      es: 'Preparación moderna, rápida e intuitiva para el examen teórico de la DGT en España. Sin anuncios, sin rodeos.',
      en: 'Modern, fast, and intuitive test prep for the official DGT theory exam in Spain. Zero ads, zero friction.',
      ca: 'Preparació moderna, ràpida i intuïtiva per a l’examen teòric de la DGT a Espanya. Sense anuncis.'
    },
    startExam: {
      es: 'Simulador de Examen (30 Preguntas)',
      en: 'Start Exam Simulator (30 Questions)',
      ca: 'Simulador d’Examen (30 Preguntes)'
    },
    exploreTopics: {
      es: 'Ver Temario por Temas',
      en: 'Explore Topics',
      ca: 'Veure Temari per Temes'
    },
    readinessTitle: {
      es: 'Tu Nivel de Preparación DGT',
      en: 'Your DGT Exam Readiness',
      ca: 'El teu Nivell de Preparació DGT'
    },
    readinessDesc: {
      es: 'Calculado en base a tus últimos simulacros oficiales y preguntas pendientes.',
      en: 'Calculated from your recent mock test performance and pending mistakes.',
      ca: 'Calculat en base als teus últims simulacres oficials i preguntes pendents.'
    },
    readyBadge: {
      es: '¡Preparado para Aprobar!',
      en: 'Ready to Pass!',
      ca: 'Preparat per Aprovar!'
    },
    progressBadge: {
      es: 'En Progreso',
      en: 'In Progress',
      ca: 'En Progrés'
    },
    studyBadge: {
      es: 'Necesita Más Práctica',
      en: 'Needs More Practice',
      ca: 'Necessita Més Pràctica'
    },
    testsCompleted: {
      es: 'Exámenes Realizados',
      en: 'Mock Tests Taken',
      ca: 'Exàmens Realitzats'
    },
    passRateLabel: {
      es: 'Tasa de Aprobados',
      en: 'Pass Rate',
      ca: 'Taxa d’Aprovats'
    },
    avgErrorsLabel: {
      es: 'Media de Fallos',
      en: 'Avg Mistakes / Test',
      ca: 'Mitjana de Fallades'
    },
    pendingMistakes: {
      es: 'Fallos por Repasar',
      en: 'Pending Mistakes',
      ca: 'Errors per Repassar'
    },
    recentHistory: {
      es: 'Historial Reciente de Exámenes',
      en: 'Recent Exam History',
      ca: 'Historial Recent d’Exàmens'
    },
    passed: { es: 'APTO', en: 'PASSED', ca: 'APTE' },
    failed: { es: 'NO APTO', en: 'FAILED', ca: 'NO APTE' },
    mistakesPlural: (m: number) => ({
      es: `${m} fallos`,
      en: `${m} errors`,
      ca: `${m} errors`
    }),
    topicsTitle: {
      es: 'Temario Oficial DGT',
      en: 'Official DGT Curriculum',
      ca: 'Temari Oficial DGT'
    },
    viewAll: {
      es: 'Ver todos',
      en: 'View all',
      ca: 'Veure tots'
    },
    questionsAvailable: (count: number) => ({
      es: `${count} preguntas disponibles`,
      en: `${count} questions available`,
      ca: `${count} preguntes disponibles`
    }),
    practice: {
      es: 'Practicar',
      en: 'Practice',
      ca: 'Practicar'
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 backdrop-blur-md dark:border-amber-500/20 dark:text-amber-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{copy.badge[language]}</span>
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {copy.heroTitle1[language]}{' '}
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            {copy.heroTitle2[language]}
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-400">
          {copy.heroDesc[language]}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
          <Link
            href="/exam"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
            <span>{copy.startExam[language]}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <BookOpen className="h-4 w-4" />
            <span>{copy.exploreTopics[language]}</span>
          </Link>
        </div>

        {/* Exam Criteria Badges */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl w-full">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/40">
            <div className="flex items-center justify-center text-amber-500 mb-1 dark:text-amber-400">
              <Zap className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">30</div>
            <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">Preguntas / Questions</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/40">
            <div className="flex items-center justify-center text-blue-500 mb-1 dark:text-blue-400">
              <Clock className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">30 min</div>
            <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">Límite / Limit</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/40">
            <div className="flex items-center justify-center text-emerald-500 mb-1 dark:text-emerald-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">≤ 3</div>
            <div className="text-[11px] text-slate-500 font-medium dark:text-slate-400">Fallos máx / Max errors</div>
          </div>
        </div>
      </section>

      {/* Readiness & Exam History Dashboard */}
      {readinessMetrics.totalTests > 0 && (
        <section className="mt-16 rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/60 dark:shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-white/5">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                  {copy.readinessTitle[language]}
                </h2>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {copy.readinessDesc[language]}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${
                readinessMetrics.readinessStatus === 'ready'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                  : readinessMetrics.readinessStatus === 'progress'
                  ? 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300'
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300'
              }`}>
                {readinessMetrics.readinessStatus === 'ready'
                  ? copy.readyBadge[language]
                  : readinessMetrics.readinessStatus === 'progress'
                  ? copy.progressBadge[language]
                  : copy.studyBadge[language]}
              </span>
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-3xl font-black text-slate-900 dark:text-white">{readinessMetrics.scorePercent}%</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-slate-800/40">
              <div className="text-xs text-slate-500 font-medium dark:text-slate-400">{copy.testsCompleted[language]}</div>
              <div className="text-2xl font-black text-slate-900 mt-1 dark:text-white">{readinessMetrics.totalTests}</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-slate-800/40">
              <div className="text-xs text-slate-500 font-medium dark:text-slate-400">{copy.passRateLabel[language]}</div>
              <div className="text-2xl font-black text-emerald-600 mt-1 dark:text-emerald-400">{readinessMetrics.passRate}%</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-slate-800/40">
              <div className="text-xs text-slate-500 font-medium dark:text-slate-400">{copy.avgErrorsLabel[language]}</div>
              <div className="text-2xl font-black text-amber-600 mt-1 dark:text-amber-400">{readinessMetrics.avgMistakes}</div>
            </div>
            <Link
              href="/mistakes"
              className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 transition-all hover:bg-rose-500/10 group"
            >
              <div className="text-xs text-rose-600 font-medium flex items-center justify-between dark:text-rose-300/80">
                <span>{copy.pendingMistakes[language]}</span>
                <Flame className="h-3.5 w-3.5 text-rose-500 dark:text-rose-400" />
              </div>
              <div className="text-2xl font-black text-rose-600 mt-1 group-hover:scale-105 transition-transform dark:text-rose-400">
                {mistakesCount}
              </div>
            </Link>
          </div>

          {/* Recent Attempts List */}
          {examHistory.length > 0 && (
            <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700 dark:text-slate-300">
                <History className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                <span>{copy.recentHistory[language]}</span>
              </div>

              <div className="space-y-2">
                {examHistory.slice(-4).reverse().map((attempt) => (
                  <div
                    key={attempt.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 text-xs dark:border-white/5 dark:bg-slate-800/30"
                  >
                    <div className="flex items-center gap-3">
                      {attempt.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 dark:text-emerald-400" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 dark:text-rose-400" />
                      )}
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {attempt.passed ? copy.passed[language] : copy.failed[language]}
                        </span>
                        <span className="text-slate-500 text-[11px] ml-2 font-mono dark:text-slate-400">
                          {attempt.score}/{attempt.total} ({copy.mistakesPlural(attempt.mistakes)[language]})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-slate-500 font-mono text-[11px] dark:text-slate-400">
                      <span>{Math.floor(attempt.timeSpentSeconds / 60)}m {attempt.timeSpentSeconds % 60}s</span>
                      <span className="text-slate-300 dark:text-slate-600">|</span>
                      <span>{attempt.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Topics Grid */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            {copy.topicsTitle[language]}
          </h2>
          <Link href="/learn" className="text-xs font-semibold text-amber-600 hover:underline flex items-center gap-1 dark:text-amber-400">
            <span>{copy.viewAll[language]}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TOPICS.map((topic) => {
            const IconComponent = iconMap[topic.icon] || BookOpen;
            const actualCount = getTopicQuestionCount(topic.id);

            return (
              <Link
                key={topic.id}
                href={`/learn/${topic.id}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all hover:border-amber-400/60 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-amber-400/40 dark:hover:bg-slate-900/80 dark:hover:shadow-xl dark:hover:shadow-amber-500/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors dark:text-white dark:group-hover:text-amber-400">
                      {topic.title[language]}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 dark:text-slate-400">
                      {topic.description[language]}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-600 group-hover:text-amber-600 transition-colors shrink-0 ml-3 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300 dark:group-hover:text-amber-400">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3 text-xs text-slate-400 dark:border-white/5 dark:text-slate-500">
                  <span>{copy.questionsAvailable(actualCount)[language]}</span>
                  <span className="font-semibold text-slate-600 group-hover:text-amber-600 flex items-center gap-1 transition-colors dark:text-slate-400 dark:group-hover:text-amber-400">
                    {copy.practice[language]} <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}