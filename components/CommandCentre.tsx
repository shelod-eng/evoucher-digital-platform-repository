'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, ChevronRight, Eye, FileSearch, Layers3, ShieldCheck } from 'lucide-react';
import {
  architectureLayers,
  architectFocus,
  commandCards,
  controlledMocks,
  financialLifecycle,
  platformComponents,
  sponsorQuestions,
} from '@/data/repository';
import type { PlatformComponent, RepositoryRecord } from '@/data/repository';
import { RepositoryShell } from './RepositoryShell';
import { StatusBadge } from './StatusBadge';

function DetailPanel({ record }: { record: PlatformComponent | RepositoryRecord }) {
  const component = record as Partial<PlatformComponent>;

  return (
    <article className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Selected architecture record</p>
          <h3 className="mt-2 font-headline text-xl font-semibold text-evoucher-navy">{record.title}</h3>
        </div>
        <StatusBadge status={record.status} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{record.summary}</p>

      {component.responsibilities && component.integrations && (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-bold text-slate-500">Responsibilities</h4>
            <ul className="mt-2 grid gap-2 text-sm text-slate-700">
              {component.responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <ChevronRight className="mt-0.5 shrink-0 text-evoucher-cyan" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-500">Integration Relationships</h4>
            <ul className="mt-2 grid gap-2 text-sm text-slate-700">
              {component.integrations.map((item) => (
                <li key={item} className="flex gap-2">
                  <ChevronRight className="mt-0.5 shrink-0 text-evoucher-cyan" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-5 grid gap-3 rounded-lg bg-evoucher-mist p-4 text-sm md:grid-cols-3">
        <div>
          <p className="font-bold text-slate-500">Architecture Layer</p>
          <p className="text-evoucher-ink">{component.layer ?? record.relatedComponent}</p>
        </div>
        <div>
          <p className="font-bold text-slate-500">Evidence</p>
          <p className="text-evoucher-ink">{record.evidenceRefs.join(', ')}</p>
        </div>
        <div>
          <p className="font-bold text-slate-500">Sensitivity</p>
          <p className="text-evoucher-ink">{record.sensitivity}</p>
        </div>
      </div>
    </article>
  );
}

export function CommandCentre() {
  const [mode, setMode] = useState<'sponsor' | 'architect'>('sponsor');
  const [selectedComponent, setSelectedComponent] = useState(platformComponents[0]);
  const [selectedFinancial, setSelectedFinancial] = useState(financialLifecycle[0]);
  const modeItems = useMemo(() => (mode === 'sponsor' ? sponsorQuestions : architectFocus), [mode]);

  return (
    <RepositoryShell>
      <section className="overflow-hidden rounded-lg border border-evoucher-line bg-white shadow-enterprise">
        <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-evoucher-blue">
                Architecture Repository
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-700">
                Foundation Build
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl font-headline text-4xl font-bold leading-tight text-evoucher-navy sm:text-5xl">
              eVoucher Digital Platform
            </h1>
            <p className="mt-3 font-headline text-2xl font-semibold text-slate-700">
              Enterprise Repository & Architecture Command Centre
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The architectural knowledge centre for the eVoucher digital ecosystem.
            </p>
          </div>
          <div className="rounded-lg border border-evoucher-line bg-evoucher-mist p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Evidence-first rule</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This repository distinguishes documented architecture, implemented capability, controlled sandbox boundaries,
              pending dependencies, readiness gaps, and evidence still to be captured.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <StatusBadge status="DOCUMENTED" />
              <StatusBadge status="CONTROLLED MOCK / SANDBOX" />
              <StatusBadge status="GAP / NOT READY" />
              <StatusBadge status="EVIDENCE PENDING" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {commandCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} href={card.href} className="group rounded-lg border border-evoucher-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-enterprise">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-evoucher-sky text-evoucher-blue">
                  <Icon size={22} />
                </span>
                <StatusBadge status={card.status} />
              </div>
              <h2 className="mt-4 font-headline text-xl font-semibold text-evoucher-navy">{card.title}</h2>
              <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{card.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-evoucher-blue">
                Open section <ArrowRight className="transition group-hover:translate-x-1" size={16} />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Platform ecosystem visual</p>
              <h2 className="mt-2 font-headline text-2xl font-semibold text-evoucher-navy">Consumer to analytics lifecycle</h2>
            </div>
            <StatusBadge status="DOCUMENTED" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            {platformComponents.map((component, index) => (
              <button
                key={component.title}
                type="button"
                onClick={() => setSelectedComponent(component)}
                className={`flex min-h-[86px] items-center justify-between rounded-lg border p-4 text-left transition ${
                  selectedComponent.title === component.title
                    ? 'border-evoucher-blue bg-blue-50'
                    : 'border-evoucher-line bg-white hover:border-blue-200 hover:bg-evoucher-mist'
                }`}
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Step {String(index + 1).padStart(2, '0')} - {component.layer}
                  </span>
                  <span className="mt-1 block font-headline text-lg font-semibold text-evoucher-navy">{component.title}</span>
                </span>
                <ArrowRight className="shrink-0 text-evoucher-cyan" size={18} />
              </button>
            ))}
          </div>
        </div>
        <DetailPanel record={selectedComponent} />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Sponsor View / Architect View</p>
          <h2 className="mt-2 font-headline text-2xl font-semibold text-evoucher-navy">Audience mode</h2>
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-evoucher-mist p-1">
            {(['sponsor', 'architect'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={`rounded-md px-4 py-2 text-sm font-bold capitalize transition ${
                  mode === item ? 'bg-white text-evoucher-blue shadow-sm' : 'text-slate-500 hover:text-evoucher-navy'
                }`}
              >
                {item} View
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-evoucher-line bg-white p-4">
            <div className="flex items-center gap-2">
              {mode === 'sponsor' ? <Eye size={18} className="text-evoucher-blue" /> : <FileSearch size={18} className="text-evoucher-blue" />}
              <h3 className="font-headline text-lg font-semibold text-evoucher-navy">
                {mode === 'sponsor' ? 'Business-first questions' : 'Technical drill-down focus'}
              </h3>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {modeItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <ChevronRight className="mt-0.5 shrink-0 text-evoucher-cyan" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Architecture layers</p>
          <h2 className="mt-2 font-headline text-2xl font-semibold text-evoucher-navy">Enterprise repository model</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {architectureLayers.map((layer) => (
              <article key={layer.title} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-headline text-lg font-semibold text-evoucher-navy">{layer.title}</h3>
                  <StatusBadge status={layer.status} />
                </div>
                <p className="mt-2 text-sm leading-5 text-slate-600">{layer.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Financial lifecycle</p>
              <h2 className="mt-2 font-headline text-2xl font-semibold text-evoucher-navy">Payment to reconciliation</h2>
            </div>
            <StatusBadge status="DOCUMENTED" />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {financialLifecycle.map((stage, index) => (
              <button
                key={stage.title}
                type="button"
                onClick={() => setSelectedFinancial(stage)}
                className={`rounded-lg border p-4 text-left transition ${
                  selectedFinancial.title === stage.title
                    ? 'border-evoucher-blue bg-blue-50'
                    : 'border-evoucher-line bg-white hover:border-blue-200 hover:bg-evoucher-mist'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Control {index + 1}</span>
                <span className="mt-1 block font-headline text-lg font-semibold text-evoucher-navy">{stage.title}</span>
              </button>
            ))}
          </div>
        </div>
        <DetailPanel record={selectedFinancial} />
      </section>

      <section className="mt-6 rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
            <ShieldCheck size={22} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Controlled Mocks & Known Gaps</p>
            <h2 className="font-headline text-2xl font-semibold text-evoucher-navy">Transparent readiness model</h2>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {controlledMocks.map((item) => (
            <article key={item.title} className="rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
              <StatusBadge status={item.status} />
              <h3 className="mt-3 font-headline text-lg font-semibold text-evoucher-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-evoucher-line bg-evoucher-navy p-6 text-white shadow-enterprise">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-100">Phase boundary</p>
            <h2 className="mt-2 font-headline text-2xl font-semibold">Phase 1 + Phase 2 foundation only</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-50">
              Full API catalogue, database documentation, security repository, evidence library, governance repository,
              and operational intelligence are intentionally reserved for later phases.
            </p>
          </div>
          <Layers3 className="shrink-0 text-evoucher-cyan" size={44} />
        </div>
      </section>
    </RepositoryShell>
  );
}
