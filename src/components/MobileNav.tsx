'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, BookOpen, OctagonAlert, ShieldCheck, Flame } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const navItems = [
    {
      href: '/',
      label: { es: 'Inicio', en: 'Home', ca: 'Inici' },
      icon: Layers,
    },
    {
      href: '/learn',
      label: { es: 'Aprender', en: 'Learn', ca: 'Aprendre' },
      icon: BookOpen,
      matchPrefix: true,
    },
    {
      href: '/signs',
      label: { es: 'Señales', en: 'Signs', ca: 'Senyals' },
      icon: OctagonAlert,
      matchPrefix: true,
    },
    {
      href: '/exam',
      label: { es: 'Examen', en: 'Exam', ca: 'Examen' },
      icon: ShieldCheck,
    },
    {
      href: '/mistakes',
      label: { es: 'Fallos', en: 'Mistakes', ca: 'Errors' },
      icon: Flame,
    },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/85 backdrop-blur-xl px-4 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center justify-around text-xs">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.matchPrefix
            ? pathname === item.href || pathname.startsWith(`${item.href}/`)
            : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all ${
                isActive
                  ? 'text-amber-400 font-semibold scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              <span className="text-[11px]">{item.label[language]}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}