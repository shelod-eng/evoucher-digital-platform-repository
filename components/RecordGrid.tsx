import type { RepositoryRecord } from '@/data/repository';
import { StatusBadge } from './StatusBadge';

export function RecordGrid({ records }: { records: RepositoryRecord[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {records.map((record, index) => (
        <article key={`${record.title}-${index}`} className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-headline text-lg font-semibold text-evoucher-navy">{record.title}</h3>
            <StatusBadge status={record.status} />
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{record.summary}</p>
          <dl className="mt-5 grid gap-3 text-sm">
            <div>
              <dt className="font-semibold text-slate-500">Owner</dt>
              <dd className="text-evoucher-ink">{record.owner}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">Related Component</dt>
              <dd className="text-evoucher-ink">{record.relatedComponent}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">Evidence</dt>
              <dd className="text-evoucher-ink">{record.evidenceRefs.join(', ')}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
