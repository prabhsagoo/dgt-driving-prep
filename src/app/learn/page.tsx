'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { TOPICS } from '@/data/topics';
import { SAMPLE_QUESTIONS } from '@/data/questions';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen,
  Gauge,
  CornerUpRight,
  OctagonAlert,
  ShieldCheck,
  Car,
  Lightbulb,
  FileCheck,
  Wrench
} from 'lucide-react';

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

export default function LearnPage() {
  const { language } = useLanguage();

  const getTopicQuestionCount = (topicId: string): number => {
    return SAMPLE_QUESTIONS.filter((q) => {
      if (q.topicId === topicId) return true;
      if (topicId === 'lights-visibility' && (q.topicId === 'lighting' || q.topicId === 'lights-visibility')) return true;
      if (topicId === 'maneuvers-lanes' && (q.topicId === 'maneuvers' || q.topicId === 'maneuvers-lanes')) return true;
      if (topicId === 'documentation-itv' && (q.topicId === 'documentation' || q.topicId === 'documentation-itv')) return true;
      if (topicId === 'priority-roundabouts' && (q.topicId === 'priority-rules' || q.topicId === 'priority-roundabouts')) return true;
      if (topicId === 'safety-alcohol' && (q.topicId === 'alcohol-safety' || q.topicId === 'safety-alcohol')) return true;
      if (topicId === 'road-signs' && (q.topicId === 'signs' || q.topicId === 'road-signs')) return true;
      return false;
    }).length;
  };

  const copy = {
    badge: {
      es: 'Módulos de Aprendizaje',
      en: 'Learning Modules',
      ca: 'Mòduls d’Aprenentatge'
    },
    title: {
      es: 'Temario por Módulos',
      en: 'Learning Modules',
      ca: 'Temari per Mòduls'
    },
    desc: {
      es: 'Domina el temario oficial de la DGT tema por tema a tu propio ritmo antes de realizar el simulador general.',
      en: 'Master the official DGT driving syllabus topic by topic before taking the mock exam.',
      ca: 'Domina el temari oficial de la DGT tema per tema al teu propi ritme abans de fer el simulador general.'
    },
    tagDgt: {
      es: 'DGT 2026',
      en: 'DGT 2026',
      ca: 'DGT 2026'
    },
    startTopic: {
      es: 'Iniciar Tema',
      en: 'Start Topic',
      ca: 'Iniciar Tema'
    },
    questionsUnit: (count: number) => ({
      es: `${count} preguntas`,
      en: `${count} questions`,
      ca: `${count} preguntes`
    })
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 transition-colors duration-200">
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 backdrop-blur-md dark:border-amber-500/20 dark:text-amber-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{copy.badge[language]}</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {copy.title[language]}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl sm:text-base dark:text-slate-400">
          {copy.desc[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {TOPICS.map((topic) => {
          const IconComponent = iconMap[topic.icon] || BookOpen;
          const actualCount = getTopicQuestionCount(topic.id);

          return (
            <Link
              key={topic.id}
              href={`/learn/${topic.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all hover:border-amber-400/60 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-amber-400/40 dark:hover:bg-slate-900/80 dark:hover:shadow-xl dark:hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-slate-700 group-hover:text-amber-600 transition-colors dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300 dark:group-hover:text-amber-400">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/5 dark:bg-slate-800/60 dark:text-slate-400">
                    {copy.questionsUnit(actualCount)[language]}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors dark:text-white dark:group-hover:text-amber-400">
                  {topic.title[language]}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2 dark:text-slate-400">
                  {topic.description[language]}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs font-medium text-slate-400 dark:border-white/5 dark:text-slate-500">
                <span>{copy.tagDgt[language]}</span>
                <span className="font-semibold text-slate-600 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors dark:text-slate-300 dark:group-hover:text-amber-400">
                  {copy.startTopic[language]} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}