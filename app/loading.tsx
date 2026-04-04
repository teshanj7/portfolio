import { Skeleton } from "@/components/Skeleton";

export default function IndexLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Avatar */}
        <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-5" />

        {/* Name */}
        <Skeleton className="h-8 w-48 mb-2" />

        {/* Tagline */}
        <Skeleton className="h-4 w-28 mb-10" />

        {/* Nav links */}
        <div className="flex flex-row gap-8">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-10" />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 mt-12">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
      </div>
    </div>
  );
}
