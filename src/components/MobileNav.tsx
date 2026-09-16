'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Layers, BookOpen, OctagonAlert, ShieldCheck, Flame } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const navItems: {
    key: string;
    href: string;
    icon: React.ElementType;
    label: Record<Language, string>;
  }[] = [
    {
      key: 'home',
      href: '/',
      icon: Layers,
      label: { es: 'Inicio', en: 'Home', ca: 'Inici' },
    },
    {
      key: 'learn',
      href: '/learn',
      icon: BookOpen,
      label: { es: 'Temario', en: 'Learn', ca: 'Temari' },
    },
    {
      key: 'signs',
      href: '/signs',
      icon: OctagonAlert,
      label: { es: 'Señales', en: 'Signs', ca: 'Senyals' },
    },
    {
      key: 'exam',
      href: '/exam',
      icon: ShieldCheck,
      label: { es: 'Examen', en: 'Exam', ca: 'Examen' },
    },
    {
      key: 'mistakes',
      href: '/mistakes',
      icon: Flame,
      label: { es: 'Fallos', en: 'Mistakes', ca: 'Errors' },
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block border-t border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors duration-200 md:hidden dark:border-white/10 dark:bg-slate-950/85">
      <nav className="flex h-16 items-center justify-around px-2 safe-area-pb">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-1 transition-colors cursor-pointer ${
                isActive
                  ? 'text-amber-500 font-bold dark:text-amber-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className="text-[10px] tracking-tight">
                {item.label[language]}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}