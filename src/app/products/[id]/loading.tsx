export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Skeleton */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="h-4 w-32 bg-slate-200 rounded mb-4 animate-pulse" />
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-8 w-96 bg-slate-200 rounded mb-2 animate-pulse" />
              <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
            </div>
            <div className="h-6 w-24 bg-slate-200 rounded-full animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="h-4 w-3/4 bg-blue-100 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="h-6 w-48 bg-slate-200 rounded mb-6 animate-pulse" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-slate-100 rounded animate-pulse" />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="h-5 w-32 bg-slate-200 rounded mb-4 animate-pulse" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
