import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" role="banner">
        <Link href="/" className="text-lg font-semibold">
          Minidev
        </Link>

        <nav aria-label="Primary">
          <Link className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#leaderboard">
            Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
