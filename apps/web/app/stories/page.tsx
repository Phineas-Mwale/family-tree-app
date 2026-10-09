export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Stories & history</h1>
        <p className="mt-2 text-slate-600">Family memories, milestones, and oral histories.</p>

        <div className="mt-8 space-y-5">
          {[
            { title: 'The 1964 family reunion', person: 'Grace Mwale', year: '1964' },
            { title: 'Migration to Nairobi', person: 'John Mwale', year: '1978' },
            { title: 'Wedding and traditions', person: 'Alicia Mwale', year: '1986' },
          ].map((story) => (
            <div key={story.title} className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">{story.year}</p>
              <h2 className="mt-2 text-xl font-semibold">{story.title}</h2>
              <p className="mt-2 text-slate-600">Shared by {story.person}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
