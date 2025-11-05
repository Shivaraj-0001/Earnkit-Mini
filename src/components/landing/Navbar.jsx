import Link from "next/link";

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" role="banner">
      <Link href="/" className="text-lg font-semibold">Minidev</Link>
      <nav aria-label="Primary">
        <Link className="text-sm underline" href="#leaderboard">Leaderboard</Link>
      </nav>
    </header>
  );
}
