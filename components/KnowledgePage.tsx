import type { RepositoryRecord } from '@/data/repository';
import { RepositoryShell } from './RepositoryShell';
import { RecordGrid } from './RecordGrid';
import { StatusBadge } from './StatusBadge';

export function KnowledgePage({
  eyebrow,
  title,
  summary,
  records,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  records: RepositoryRecord[];
}) {
  return (
    <RepositoryShell>
      <section className="rounded-lg border border-evoucher-line bg-white p-6 shadow-enterprise sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-evoucher-blue">{eyebrow}</p>
        <h1 className="mt-3 font-headline text-3xl font-bold text-evoucher-navy sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-600">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <StatusBadge status="VERIFIED" />
          <StatusBadge status="EVIDENCE PENDING" />
        </div>
      </section>
      <section className="mt-6">
        <RecordGrid records={records} />
      </section>
    </RepositoryShell>
  );
}
