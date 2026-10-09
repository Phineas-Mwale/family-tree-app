export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Family dashboard</h1>
        <p className="mt-2 text-slate-600">Recent updates, birthdays, and community activity.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Upcoming birthdays</p>
            <p className="mt-3 text-xl font-semibold">4 this month</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Shared stories</p>
            <p className="mt-3 text-xl font-semibold">12 new</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="text-sm text-slate-500">Location pins</p>
            <p className="mt-3 text-xl font-semibold">18 visible</p>
          </div>
        </div>
      </div>
    </main>
  );
}
