const familyStats = [
  { label: 'Members', value: '128' },
  { label: 'Stories', value: '96' },
  { label: 'Locations', value: '42' },
  { label: 'Tree branches', value: '7' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">FamilyConnect</p>
            <h1 className="mt-2 text-4xl font-bold">Private family connection</h1>
          </div>
          <button className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-700">
            Join family
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {familyStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Family overview</h2>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Active family
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">Tree status</p>
                <p className="mt-2 text-lg font-semibold">Mwale family tree updated 2 hours ago</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Most recent story</p>
                  <p className="mt-2 font-semibold">The 1964 family reunion</p>
                  <p className="mt-2 text-sm text-slate-600">Shared by Grace Mwale</p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Latest location</p>
                  <p className="mt-2 font-semibold">Nairobi, Kenya</p>
                  <p className="mt-2 text-sm text-slate-600">Birthplace pin added by family admin</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Quick actions</h2>
            <div className="mt-5 space-y-3">
              {['Add family member', 'Create story', 'Invite relative', 'View map'].map((action) => (
                <button
                  key={action}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50"
                >
                  <span>{action}</span>
                  <span>→</span>
                </button>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
