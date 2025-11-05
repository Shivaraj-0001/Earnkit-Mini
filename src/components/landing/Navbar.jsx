import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur bg-linear-to-b from-sky-100 to-sky-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" role="banner">
        <Link href="/" className="text-lg text-black font-semibold">
          Minidev
        </Link>

        <a href="/app" className="ml-4 text-black rounded-xl border px-3 py-1.5 text-sm hover:bg-sky-200">
            Try the Builder
        </a>


        <nav aria-label="Primary">
          <Link className="text-md font-medium text-neutral-700 hover:text-neutral-900" href="#leaderboard">
            Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
