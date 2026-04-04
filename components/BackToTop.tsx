"use client";

export function BackToTop() {
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
      >
        Back to top
      </button>
    </div>
  );
}
