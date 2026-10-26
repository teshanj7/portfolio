export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <div className="h-16 border-b border-neutral-200 dark:border-neutral-800" />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1 space-y-4 animate-pulse">
        <div className="h-8 w-32 rounded bg-neutral-100 dark:bg-neutral-800" />
        <div className="h-4 w-80 rounded bg-neutral-100 dark:bg-neutral-800" />
        <div className="space-y-3 pt-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 rounded-xl bg-neutral-100 dark:bg-neutral-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
