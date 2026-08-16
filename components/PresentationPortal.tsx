import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  ExternalLink,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import {
  demoJourney,
  ecosystemFlow,
  evidenceStates,
  executiveQuestions,
  fourDimensions,
  presentationAreas,
  systemLinkCards,
} from '@/data/presentation';
import { StatusBadge } from './StatusBadge';
import { RepositoryShell } from './RepositoryShell';

function ExternalAction({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-evoucher-blue px-4 py-3 text-sm font-bold text-white shadow-card transition hover:bg-evoucher-navy"
    >
      {label}
      <ExternalLink size={16} />
    </a>
  );
}

function PlatformMap() {
  return (
    <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-evoucher-blue">
            One platform
          </p>
          <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
            One Source of Truth
          </h2>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-evoucher-sky text-evoucher-blue">
          <Layers3 size={26} />
        </span>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {fourDimensions.map((dimension) => (
          <article
            key={dimension.title}
            className={`rounded-lg bg-gradient-to-br ${dimension.color} p-4 text-white shadow-card`}
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
              <h3 className="font-headline text-lg font-bold leading-tight sm:text-xl">
                {dimension.title}
              </h3>
              <StatusBadge status={dimension.status} />
            </div>
            <div className="mt-4 grid gap-2">
              {dimension.steps.map((step) => (
                <div
                  key={step}
                  className="rounded-md border border-white/25 bg-white/12 px-3 py-2 text-center text-sm font-semibold"
                >
                  {step}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-dashed border-blue-200 bg-blue-50 p-4 text-center">
        <p className="font-headline text-lg font-bold text-evoucher-navy">
          Customer, commerce, financial, and governance dimensions converge into the eVoucher Digital Platform.
        </p>
      </div>
    </div>
  );
}

function FlowRibbon() {
  return (
    <div className="rounded-lg border border-evoucher-line bg-evoucher-navy p-5 text-white shadow-enterprise">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
        Real system relationship
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {ecosystemFlow.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold">
              {item}
            </span>
            {index < ecosystemFlow.length - 1 && <ArrowRight className="text-evoucher-cyan" size={15} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PresentationPortal() {
  const areas = presentationAreas.filter((area) => area.key !== 'overview');

  return (
    <RepositoryShell>
      <section className="w-full max-w-full overflow-hidden rounded-lg border border-blue-100 bg-white shadow-enterprise">
        <div className="grid min-w-0 max-w-full gap-8 p-4 sm:p-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="presentation-hero-content min-w-0 max-w-full">
            <div className="grid max-w-full grid-cols-1 gap-2 sm:flex sm:flex-wrap">
              <span className="inline-flex w-full max-w-full items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-center text-[11px] font-bold uppercase tracking-wide text-evoucher-blue sm:w-auto sm:text-xs">
                Enterprise Presentation Portal
              </span>
              <span className="inline-flex w-full max-w-full items-center justify-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-center text-[11px] font-bold uppercase tracking-wide text-teal-700 sm:w-auto sm:text-xs">
                Executive Front Door
              </span>
            </div>
            <h1 className="mt-5 max-w-full break-words font-headline text-3xl font-bold leading-tight text-evoucher-navy sm:max-w-4xl sm:text-5xl xl:text-6xl">
              eVoucher Digital Platform
            </h1>
            <p className="mt-3 max-w-full break-words font-headline text-xl font-semibold leading-snug text-evoucher-blue sm:text-2xl">
              One Platform - One Source of Truth
            </p>
            <p className="mt-5 max-w-full break-words text-base leading-7 text-slate-600 sm:max-w-3xl sm:text-lg sm:leading-8">
              The official presentation layer for the eVoucher ecosystem: business story,
              architecture, real system links, evidence posture, governance, and end-to-end
              platform flow from customer journey to financial reconciliation.
            </p>
            <div className="mt-6 grid max-w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/end-to-end-demo"
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-lg bg-evoucher-blue px-4 py-3 text-center text-sm font-bold text-white shadow-card transition hover:bg-evoucher-navy sm:w-auto"
              >
                Start Presentation Journey
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/4d-architecture"
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-lg border border-evoucher-line bg-white px-4 py-3 text-center text-sm font-bold text-evoucher-navy shadow-card transition hover:border-blue-200 hover:text-evoucher-blue sm:w-auto"
              >
                View 4D Architecture
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-evoucher-line bg-evoucher-mist p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
              Evidence-safe executive summary
            </p>
            <div className="mt-4 grid gap-3">
              {executiveQuestions.map((item) => (
                <article key={item.question} className="rounded-lg border border-white bg-white p-4">
                  <p className="font-headline text-base font-bold text-evoucher-navy">{item.question}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <PlatformMap />
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => {
          const Icon = area.icon;
          return (
            <Link
              key={area.key}
              href={area.href}
              className="group rounded-lg border border-evoucher-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-enterprise"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-evoucher-sky text-evoucher-blue">
                  <Icon size={22} />
                </span>
                <StatusBadge status={area.status} />
              </div>
              <h2 className="mt-4 font-headline text-xl font-bold text-evoucher-navy">{area.title}</h2>
              <p className="mt-2 min-h-[96px] text-sm leading-6 text-slate-600">{area.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-evoucher-blue">
                Open area <ArrowRight className="transition group-hover:translate-x-1" size={16} />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="mt-6">
        <FlowRibbon />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-evoucher-blue">
              <BadgeCheck size={22} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
                Presentation route
              </p>
              <h2 className="font-headline text-2xl font-bold text-evoucher-navy">
                Complete ecosystem demo path
              </h2>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {demoJourney.slice(0, 8).map((step, index) => (
              <article key={step.label} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Stage {String(index + 1).padStart(2, '0')} - {step.system}
                </p>
                <h3 className="mt-1 font-headline text-lg font-semibold text-evoucher-navy">
                  {step.label}
                </h3>
              </article>
            ))}
          </div>
          <Link
            href="/end-to-end-demo"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-evoucher-blue"
          >
            Continue full demo flow <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
              <ShieldCheck size={22} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
                Evidence posture
              </p>
              <h2 className="font-headline text-2xl font-bold text-evoucher-navy">
                Proof before claims
              </h2>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {evidenceStates.map((state) => (
              <article key={state.label} className={`rounded-lg border p-4 ${state.tone}`}>
                <h3 className="font-headline text-lg font-bold">{state.label}</h3>
                <p className="mt-1 text-sm leading-6">{state.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">
              Real system links
            </p>
            <h2 className="mt-2 font-headline text-2xl font-bold text-evoucher-navy">
              Presentation portal links outward, execution remains in the real systems
            </h2>
          </div>
          <StatusBadge status="DOCUMENTED" />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {systemLinkCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-evoucher-blue">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 font-headline text-lg font-bold text-evoucher-navy">{card.title}</h3>
                <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-evoucher-blue">
                  Open <ExternalLink size={14} />
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </RepositoryShell>
  );
}

export { ExternalAction, FlowRibbon, PlatformMap };
