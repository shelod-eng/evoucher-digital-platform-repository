import Link from 'next/link';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import {
  demoJourney,
  evidenceStates,
  fourDimensions,
  presentationAreas,
  type PresentationAreaKey,
} from '@/data/presentation';
import { phase3SectionRecords } from '@/data/phase3';
import { financialLifecycle, platformComponents } from '@/data/repository';
import { RepositoryShell } from './RepositoryShell';
import { StatusBadge } from './StatusBadge';
import { RecordGrid } from './RecordGrid';
import { FlowRibbon, PlatformMap } from './PresentationPortal';

function getArea(key: PresentationAreaKey) {
  const area = presentationAreas.find((item) => item.key === key);
  if (!area) {
    throw new Error(`Unknown presentation area: ${key}`);
  }
  return area;
}

function AreaHero({ areaKey }: { areaKey: PresentationAreaKey }) {
  const area = getArea(areaKey);
  const Icon = area.icon;

  return (
    <section className="rounded-lg border border-evoucher-line bg-white p-6 shadow-enterprise sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-evoucher-blue">
            {area.eyebrow}
          </p>
          <h1 className="mt-3 font-headline text-3xl font-bold text-evoucher-navy sm:text-5xl">
            {area.title}
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">{area.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge status={area.status} />
            <StatusBadge status="EVIDENCE PENDING" />
          </div>
          {area.primaryAction && (
            <a
              href={area.primaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-evoucher-blue px-4 py-3 text-sm font-bold text-white shadow-card transition hover:bg-evoucher-navy"
            >
              {area.primaryAction.label}
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-evoucher-sky text-evoucher-blue">
          <Icon size={32} />
        </span>
      </div>
    </section>
  );
}

function SystemCards({ areaKey }: { areaKey: PresentationAreaKey }) {
  const area = getArea(areaKey);

  return (
    <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
          Executive narrative
        </p>
        <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
          What this area explains
        </h2>
        <ul className="mt-5 grid gap-3">
          {area.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 rounded-lg bg-evoucher-mist p-3 text-sm leading-6 text-slate-700">
              <ChevronRight className="mt-1 shrink-0 text-evoucher-cyan" size={16} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
          Real systems involved
        </p>
        <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
          Presentation layer, not duplicated execution
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {area.systems.map((system) => (
            <article key={system} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
              <h3 className="font-headline text-lg font-bold text-evoucher-navy">{system}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Referenced as architecture and presentation evidence. Live operational state is not invented.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteJourneys() {
  const customer = ['Consumer', 'Browse Products', 'Select Voucher', 'Purchase', 'Payment', 'Voucher Issued', 'Wallet', 'Redeem'];
  const merchant = ['Merchant', 'Onboarding', 'Product', 'Voucher', 'Consumer', 'Redemption'];

  return (
    <section className="mt-6 grid gap-6 xl:grid-cols-2">
      {[['Customer Journey', customer], ['Merchant Journey', merchant]].map(([title, steps]) => (
        <article key={title as string} className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Workspace 1</p>
          <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">{title as string}</h2>
          <div className="mt-5 grid gap-2">
            {(steps as string[]).map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-lg border border-evoucher-line bg-evoucher-mist p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-evoucher-blue">
                  {index + 1}
                </span>
                <span className="font-semibold text-evoucher-navy">{step}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function BillingFlow() {
  const flow = ['Payment', 'Billing Event', 'Billing Ledger', 'Settlement', 'Reconciliation', 'Merchant Payout', 'BankServ', 'ACK/NCK', 'Audit'];

  return (
    <section className="mt-6 rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
        Financial lifecycle
      </p>
      <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
        Payment to audit trace
      </h2>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {flow.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-evoucher-navy">
              {item}
            </span>
            {index < flow.length - 1 && <ArrowRight className="text-evoucher-cyan" size={15} />}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <RecordGrid records={financialLifecycle} />
      </div>
    </section>
  );
}

function GovernanceEvidence() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {evidenceStates.map((state) => (
        <article key={state.label} className={`rounded-lg border p-4 ${state.tone}`}>
          <h2 className="font-headline text-lg font-bold">{state.label}</h2>
          <p className="mt-2 text-sm leading-6">{state.summary}</p>
        </article>
      ))}
    </section>
  );
}

function CommandCentreModule() {
  const tabs = [
    'Overview',
    '4D Command Centre',
    'Operations',
    'Financial Control',
    'Governance',
    'Exceptions',
    'Intelligence',
    'Evidence',
  ];

  return (
    <section className="mt-6 rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
        Read-only module boundary
      </p>
      <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
        Command Centre presentation scope
      </h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {tabs.map((tab) => (
          <article key={tab} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
            <h3 className="font-headline text-lg font-bold text-evoucher-navy">{tab}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Presentation route into read-only operational visibility.
            </p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 p-4 text-rose-800">
        <h3 className="font-headline text-lg font-bold">
          Read-only control tower - operational actions remain outside the current presentation scope.
        </h3>
        <p className="mt-1 text-sm leading-6">
          Approval, retry, settlement, reconciliation, and BankServ intervention surfaces are intentionally not exposed in this release.
        </p>
      </div>
    </section>
  );
}

function ArchitectureVisual() {
  return (
    <section className="mt-6">
      <PlatformMap />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {fourDimensions.map((dimension) => (
          <article key={dimension.title} className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card">
            <StatusBadge status={dimension.status} />
            <h2 className="mt-3 font-headline text-xl font-bold leading-tight text-evoucher-navy sm:text-2xl">
              {dimension.title}
            </h2>
            <div className="mt-4 grid gap-2">
              {dimension.steps.map((step) => (
                <div key={step} className="rounded-lg bg-evoucher-mist px-3 py-2 text-center text-sm font-bold text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoTimeline() {
  return (
    <section className="mt-6 rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
        Presentation storyline
      </p>
      <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
        One voucher transaction through the ecosystem
      </h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {demoJourney.map((step, index) => (
          <article key={step.label} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                {String(index + 1).padStart(2, '0')} - {step.system}
              </p>
              <StatusBadge status={step.status} />
            </div>
            <h3 className="mt-3 font-headline text-lg font-bold text-evoucher-navy">{step.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PresentationSection({ areaKey }: { areaKey: PresentationAreaKey }) {
  const evidenceRecords =
    areaKey === 'website'
      ? phase3SectionRecords.business
      : areaKey === 'infrastructure'
        ? phase3SectionRecords.infrastructure
        : areaKey === 'billing'
          ? phase3SectionRecords.financial
          : areaKey === 'governance'
            ? phase3SectionRecords.security
            : areaKey === 'evidence'
              ? phase3SectionRecords.evidence
              : areaKey === 'command-centre'
                ? phase3SectionRecords.platform
                : [];

  return (
    <RepositoryShell>
      <AreaHero areaKey={areaKey} />
      {areaKey === 'website' && <WebsiteJourneys />}
      {areaKey === 'infrastructure' && <FlowRibbon />}
      {areaKey === 'billing' && <BillingFlow />}
      {areaKey === 'governance' && <GovernanceEvidence />}
      {areaKey === 'command-centre' && <CommandCentreModule />}
      {areaKey === 'architecture' && <ArchitectureVisual />}
      {areaKey === 'demo' && <DemoTimeline />}
      {areaKey === 'evidence' && <GovernanceEvidence />}
      {areaKey !== 'architecture' && areaKey !== 'demo' && <SystemCards areaKey={areaKey} />}
      {areaKey === 'website' && (
        <section className="mt-6">
          <RecordGrid records={platformComponents.slice(0, 4)} />
        </section>
      )}
      {evidenceRecords.length > 0 && areaKey !== 'billing' && areaKey !== 'website' && (
        <section className="mt-6">
          <RecordGrid records={evidenceRecords} />
        </section>
      )}
      <section className="mt-6 rounded-lg border border-evoucher-line bg-evoucher-navy p-6 text-white shadow-enterprise">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-100">
              Presentation sequence
            </p>
            <h2 className="mt-2 font-headline text-2xl font-bold">
              Continue the executive story
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50">
              The Enterprise Presentation Portal is the front door. Production systems remain linked
              modules and evidence sources.
            </p>
          </div>
          <Link
            href="/end-to-end-demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-evoucher-blue"
          >
            Open End-to-End Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </RepositoryShell>
  );
}
