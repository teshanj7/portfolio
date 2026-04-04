import { Skeleton } from "@/components/Skeleton";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center px-6">
        <Skeleton className="h-5 w-36" />
      </div>

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Back link */}
        <Skeleton className="h-4 w-12 mb-8" />

        {/* Date + read time */}
        <Skeleton className="h-3 w-40 mb-3" />

        {/* Title */}
        <Skeleton className="h-9 w-full mb-2" />
        <Skeleton className="h-9 w-3/4 mb-3" />

        {/* Description */}
        <Skeleton className="h-4 w-full max-w-xl mb-10" />

        {/* Thumbnail */}
        <Skeleton className="w-full aspect-video rounded-xl mb-10" />

        <div className="border-t border-neutral-200 dark:border-neutral-800 mb-10" />

        {/* Body paragraphs */}
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? "w-4/5" : "w-full"}`} />
          ))}
          <div className="pt-4" />
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i % 4 === 3 ? "w-3/4" : "w-full"}`} />
          ))}
          <div className="pt-4" />
          <Skeleton className="h-6 w-48 mb-1" />
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? "w-5/6" : "w-full"}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
