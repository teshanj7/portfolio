import { Skeleton } from "@/components/Skeleton";

export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center px-6">
        <Skeleton className="h-5 w-36" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Title + intro */}
        <Skeleton className="h-8 w-24 mb-3" />
        <Skeleton className="h-4 w-full max-w-lg mb-8" />

        {/* Blog cards */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Thumbnail */}
              <Skeleton className="h-40 sm:h-auto sm:w-44 sm:shrink-0" />
              {/* Text */}
              <div className="p-5 flex flex-col justify-center gap-2 flex-1">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
