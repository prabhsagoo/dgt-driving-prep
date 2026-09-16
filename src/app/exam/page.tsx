'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const ExamEngine = dynamic(() => import('@/components/ExamEngine'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-amber-400" />
      <p className="text-sm text-slate-400">Loading exam...</p>
    </div>
  ),
});

export default function ExamPage() {
  return <ExamEngine />;
}