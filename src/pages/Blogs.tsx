import React from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";

interface BlogsProps {
  dark: boolean;
  setDark: (val: boolean) => void;
}

export default function Blogs({ dark, setDark }: BlogsProps) {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
            Teshan Jayakody
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Blogs
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-xs">
          Nothing here yet — check back soon.
        </p>
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 py-6 text-sm text-center text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Teshan Jayakody
        </div>
      </footer>
    </div>
  );
}
