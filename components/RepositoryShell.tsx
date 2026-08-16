'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/data/repository';
import { presentationAreas } from '@/data/presentation';

export function RepositoryShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const knowledgeNavigation = navigation.filter(
    (item) =>
      ![
        '/executive',
        '/business',
        '/platform',
        '/financial',
        '/infrastructure',
        '/evidence',
      ].includes(item.href)
  );

  return (
    <div className="min-h-screen text-evoucher-ink">
      <header className="sticky top-0 z-40 border-b border-evoucher-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-evoucher-blue text-lg font-bold text-white shadow-card">
              eV
            </span>
            <span className="min-w-0">
              <span className="block truncate font-headline text-base font-bold text-evoucher-navy sm:text-lg">
                eVoucher Digital Platform
              </span>
              <span className="block truncate text-xs font-semibold text-slate-500">
                Enterprise Presentation Portal
              </span>
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-evoucher-line bg-white text-evoucher-navy shadow-sm lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 gap-0 lg:grid-cols-[280px_1fr]">
        <aside
          className={`fixed inset-x-0 top-[65px] z-30 border-b border-evoucher-line bg-white px-4 py-4 shadow-enterprise transition lg:sticky lg:top-[65px] lg:block lg:h-[calc(100vh-65px)] lg:border-b-0 lg:border-r lg:px-5 lg:shadow-none ${
            open ? 'block' : 'hidden'
          }`}
        >
          <nav className="grid gap-1">
            <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Presentation
            </p>
            {presentationAreas.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                    active ? 'bg-evoucher-sky text-evoucher-blue' : 'text-slate-600 hover:bg-slate-50 hover:text-evoucher-navy'
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.shortTitle}</span>
                </Link>
              );
            })}
            <p className="px-3 pb-2 pt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Repository Evidence
            </p>
            {knowledgeNavigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                    active ? 'bg-evoucher-sky text-evoucher-blue' : 'text-slate-600 hover:bg-slate-50 hover:text-evoucher-navy'
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 rounded-lg border border-evoucher-line bg-evoucher-mist p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Front door rule</p>
            <p className="mt-2 text-sm leading-5 text-slate-600">
              This portal explains and connects the ecosystem. The Website, Billing Engine, Infrastructure, and Command Centre remain real linked systems.
            </p>
          </div>
        </aside>

        <main className="w-full min-w-0 max-w-full overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
