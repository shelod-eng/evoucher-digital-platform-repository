'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { allKnowledgeItems } from '@/data/phase3';
import { RecordGrid } from './RecordGrid';

export function KnowledgeSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(allKnowledgeItems.map((item) => item.category))).sort()],
    [],
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return allKnowledgeItems.filter((item) => {
      const categoryMatch = category === 'All' || item.category === category;
      const haystack = [
        item.title,
        item.summary,
        item.status,
        item.relatedComponent,
        item.sourceType,
        item.sourceFile,
        item.route,
        item.method,
        item.domain,
        item.evidenceRefs.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return categoryMatch && (!needle || haystack.includes(needle));
    });
  }, [category, query]);

  return (
    <section className="rounded-lg border border-evoucher-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Global repository search</p>
          <h2 className="mt-2 font-headline text-2xl font-semibold text-evoucher-navy">Evidence-backed knowledge index</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Search verified source traces, APIs, data entities, evidence, ADR observations, controlled mocks, gaps, and deployment records.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr_220px] xl:w-[560px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-lg border border-evoucher-line bg-white pl-10 pr-3 text-sm outline-none ring-evoucher-blue focus:ring-2"
              placeholder="Search evidence..."
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 rounded-lg border border-evoucher-line bg-white px-3 text-sm font-semibold text-evoucher-ink outline-none ring-evoucher-blue focus:ring-2"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">{results.length} evidence records shown</p>
      <div className="mt-5">
        <RecordGrid records={results} />
      </div>
    </section>
  );
}
