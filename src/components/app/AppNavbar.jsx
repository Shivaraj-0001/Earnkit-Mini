export default function AppNavbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Account summary (stub) */}
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-neutral-200" aria-hidden />
          <div className="text-sm">
            <div className="font-medium text-neutral-900">@you</div>
            <div className="text-neutral-500">0x1234…abcd · Base</div>
          </div>
        </div>

        {/* Right: Top up + status chip */}
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50">Top up</button>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">Draft</span>
        </div>
      </div>
    </header>
  );
}
