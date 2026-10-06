import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-[#FAF8F5]">
      <h1 className="font-heading text-6xl font-extrabold text-[#F68632] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#231F20] mb-2">Page Not Found / பக்கம் காணப்படவில்லை</h2>
      <p className="text-slate-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#F68632] text-white font-bold hover:bg-[#E07418] transition-colors shadow-sm"
      >
        Return Home / முகப்புக்குச் செல்க
      </Link>
    </div>
  );
}
