import { Skeleton } from "@/components/Skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center px-6">
        <Skeleton className="h-5 w-36" />
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-5 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <Skeleton className="w-28 h-28 md:w-32 md:h-32 rounded-full shrink-0" />
          <div className="flex-1 w-full space-y-3">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full max-w-md" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-72" />
            <div className="flex gap-3 mt-4 flex-wrap">
              <Skeleton className="h-9 w-28 rounded-lg" />
              <Skeleton className="h-9 w-24 rounded-lg" />
              <Skeleton className="h-9 w-24 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <Skeleton className="h-7 w-24 mb-6" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-full mt-3" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <Skeleton className="h-7 w-32 mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-28 rounded-full" />
              </div>
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-3 w-full mt-3" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
