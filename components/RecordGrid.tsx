import type { RepositoryRecord } from '@/data/repository';
import { StatusBadge } from './StatusBadge';

type EvidenceRecord = RepositoryRecord & {
  category?: string;
  sourceFile?: string;
  route?: string;
  method?: string;
  domain?: string;
  publicLink?: string;
  nextDependency?: string;
};

export function RecordGrid({ records }: { records: RepositoryRecord[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {records.map((record, index) => (
        <article key={`${record.title}-${index}`} className="min-w-0 rounded-lg border border-evoucher-line bg-white p-5 shadow-card">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
            <div className="min-w-0">
              {'category' in record && (record as EvidenceRecord).category && (
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-evoucher-blue">
                  {(record as EvidenceRecord).category}
                </p>
              )}
              <h3 className="break-words font-headline text-lg font-semibold text-evoucher-navy">{record.title}</h3>
            </div>
            <StatusBadge status={record.status} />
          </div>
          <p className="mt-3 break-words text-sm leading-6 text-slate-600">{record.summary}</p>
          <dl className="mt-5 grid gap-3 text-sm">
            {'route' in record && (record as EvidenceRecord).route && (
              <div>
                <dt className="font-semibold text-slate-500">Route</dt>
                <dd className="break-words font-mono text-xs text-evoucher-ink">
                  {(record as EvidenceRecord).method ? `${(record as EvidenceRecord).method} ` : ''}
                  {(record as EvidenceRecord).route}
                </dd>
              </div>
            )}
            {'sourceFile' in record && (record as EvidenceRecord).sourceFile && (
              <div>
                <dt className="font-semibold text-slate-500">Source File</dt>
                <dd className="break-words font-mono text-xs text-evoucher-ink">{(record as EvidenceRecord).sourceFile}</dd>
              </div>
            )}
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
            {'nextDependency' in record && (record as EvidenceRecord).nextDependency && (
              <div>
                <dt className="font-semibold text-slate-500">Next Dependency</dt>
                <dd className="text-evoucher-ink">{(record as EvidenceRecord).nextDependency}</dd>
              </div>
            )}
            {'publicLink' in record && (record as EvidenceRecord).publicLink && (
              <div>
                <dt className="font-semibold text-slate-500">Reference Link</dt>
                <dd>
                  <a className="font-semibold text-evoucher-blue hover:underline" href={(record as EvidenceRecord).publicLink} target="_blank" rel="noreferrer">
                    Open evidence reference
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </article>
      ))}
    </div>
  );
}
