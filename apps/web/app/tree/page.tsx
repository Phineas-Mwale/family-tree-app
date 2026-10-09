export default function TreePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Family tree</h1>
        <p className="mt-2 text-slate-600">Interactive family graph with multi-generation branches.</p>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">Founder</div>
            <div className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">Parents</div>
            <div className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">Children</div>
            <div className="rounded-full bg-amber-100 px-4 py-2 font-medium text-amber-700">Extended family</div>
          </div>
          <div className="mt-8 grid place-items-center text-slate-500">Tree canvas placeholder</div>
        </div>
      </div>
    </main>
  );
}
