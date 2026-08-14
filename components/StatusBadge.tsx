import type { RepositoryStatus } from '@/data/repository';

const statusStyles: Record<RepositoryStatus, string> = {
  IMPLEMENTED: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  DOCUMENTED: 'border-blue-200 bg-blue-50 text-blue-700',
  'CONTROLLED MOCK / SANDBOX': 'border-amber-200 bg-amber-50 text-amber-700',
  'PENDING DEPENDENCY': 'border-orange-200 bg-orange-50 text-orange-700',
  'GAP / NOT READY': 'border-rose-200 bg-rose-50 text-rose-700',
  'EVIDENCE PENDING': 'border-slate-200 bg-slate-50 text-slate-600',
};

export function StatusBadge({ status }: { status: RepositoryStatus }) {
  return (
    <span
      className={`inline-flex max-w-full items-center rounded-full border px-2.5 py-1 text-center text-[11px] font-semibold uppercase leading-tight tracking-wide ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
