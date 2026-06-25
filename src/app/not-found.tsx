import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">🐾</div>
        <h1 className="text-3xl font-bold text-stone-800 dark:text-white mb-3 font-heading">
          Page Not Found
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Looks like this page wandered off. Let&apos;s get you back home.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
