import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-evoucher-mist px-4">
      <section className="max-w-lg rounded-lg border border-evoucher-line bg-white p-8 text-center shadow-enterprise">
        <p className="text-xs font-bold uppercase tracking-wide text-evoucher-blue">Repository route not found</p>
        <h1 className="mt-3 font-headline text-3xl font-bold text-evoucher-navy">Evidence area unavailable</h1>
        <p className="mt-3 text-slate-600">
          This route is not part of the Phase 1 and Phase 2 command centre foundation.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-evoucher-blue px-5 py-3 text-sm font-bold text-white shadow-card"
        >
          Return to Command Centre
        </Link>
      </section>
    </main>
  );
}
