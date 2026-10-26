export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <div className="h-16 border-b border-neutral-200 dark:border-neutral-800" />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1 animate-pulse">
        <div className="h-4 w-28 rounded bg-neutral-100 dark:bg-neutral-800 mb-8" />
        <div className="space-y-3 mb-8">
          <div className="h-4 w-48 rounded bg-neutral-100 dark:bg-neutral-800" />
          <div className="h-8 w-3/4 rounded bg-neutral-100 dark:bg-neutral-800" />
          <div className="h-4 w-full rounded bg-neutral-100 dark:bg-neutral-800" />
        </div>
        <div className="h-56 rounded-xl bg-neutral-100 dark:bg-neutral-800 mb-8" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 rounded bg-neutral-100 dark:bg-neutral-800" style={{ width: `${85 - i * 5}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
