export default function AppNavbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: account (stub) */}
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-neutral-200" aria-hidden />
          <div className="text-sm">
            <div className="font-medium">@you</div>
            <div className="text-neutral-500">0x1234…abcd · Base</div>
          </div>
        </div>

        {/* Right: top-up + publish state */}
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-sm">Top up</button>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">Draft</span>
        </div>
      </div>
    </header>
  );
}
