'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '@/context/LanguageContext';
import { ShieldCheck, Layers, BookOpen, OctagonAlert, Flame, Globe } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const navLabels: Record<string, Record<Language, string>> = {
    home: { es: 'Inicio', en: 'Home', ca: 'Inici' },
    learn: { es: 'Aprender', en: 'Learn', ca: 'Aprendre' },
    signs: { es: 'Señales', en: 'Signs', ca: 'Senyals' },
    exam: { es: 'Simulador DGT', en: 'DGT Exam', ca: 'Simulador DGT' },
    mistakes: { es: 'Fallos', en: 'Mistakes', ca: 'Errors' },
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ca', label: 'CA', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 group-hover:bg-amber-300 transition-colors">
            <ShieldCheck className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              NovaDGT
            </span>
            <span className="rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
              PERMISO B
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
          <Link
            href="/"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              pathname === '/'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>{navLabels.home[language]}</span>
          </Link>

          <Link
            href="/learn"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              pathname.startsWith('/learn')
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>{navLabels.learn[language]}</span>
          </Link>

          <Link
            href="/signs"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              pathname.startsWith('/signs')
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
            }`}
          >
            <OctagonAlert className="h-3.5 w-3.5" />
            <span>{navLabels.signs[language]}</span>
          </Link>

          <Link
            href="/exam"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              pathname === '/exam'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{navLabels.exam[language]}</span>
          </Link>

          <Link
            href="/mistakes"
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              pathname === '/mistakes'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            <span>{navLabels.mistakes[language]}</span>
          </Link>
        </nav>

        {/* Action Controls: Language Switcher & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Pill */}
          <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
            <div className="pl-2 pr-1 text-slate-400 hidden sm:block">
              <Globe className="h-3.5 w-3.5" />
            </div>
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/20 text-amber-600 border border-amber-400/40 dark:text-amber-300 dark:border-amber-400/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dark / Light Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}