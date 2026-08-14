import { sectionContent } from '@/data/repository';
import { RepositoryShell } from './RepositoryShell';
import { RecordGrid } from './RecordGrid';
import { StatusBadge } from './StatusBadge';

export function SectionPage({ sectionKey }: { sectionKey: keyof typeof sectionContent }) {
  const section = sectionContent[sectionKey];
  const Icon = section.icon;

  return (
    <RepositoryShell>
      <section className="rounded-lg border border-evoucher-line bg-white p-6 shadow-enterprise sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-evoucher-blue">{section.eyebrow}</p>
            <h1 className="mt-3 font-headline text-3xl font-bold text-evoucher-navy sm:text-4xl">{section.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-600">{section.summary}</p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-evoucher-sky text-evoucher-blue">
            <Icon size={26} />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <StatusBadge status="DOCUMENTED" />
          <StatusBadge status="EVIDENCE PENDING" />
        </div>
      </section>

      <section className="mt-6">
        <RecordGrid records={section.records} />
      </section>
    </RepositoryShell>
  );
}
