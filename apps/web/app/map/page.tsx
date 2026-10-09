export default function MapPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Residence map</h1>
        <p className="mt-2 text-slate-600">Current and ancestral homes with privacy-aware pins.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-10 text-center text-slate-500">
            Map canvas placeholder
          </div>
          <div className="space-y-4">
            {['Mombasa, Kenya', 'Nakuru, Kenya', 'Kampala, Uganda'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-4">
                <p className="font-medium">{item}</p>
                <p className="mt-1 text-sm text-slate-500">City-level visibility</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
