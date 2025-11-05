"use client";
import { useState } from "react";

export default function AppSidebar() {
  const [active, setActive] = useState(0);
  const items = [
    { id: 1, name: "My Launchpad" },
    { id: 2, name: "Betting Game" },
    { id: 3, name: "Quiz" },
  ];

  return (
    <nav aria-label="Projects" className="rounded-2xl border bg-white p-3">
      <div className="mb-2 text-xs font-semibold text-neutral-500">Projects</div>
      <ul
        className="space-y-1"
        role="listbox"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") setActive((i) => Math.min(i + 1, items.length - 1));
          if (e.key === "ArrowUp") setActive((i) => Math.max(i - 1, 0));
        }}
      >
        {items.map((it, i) => (
          <li key={it.id}>
            <button
              role="option"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                active === i ? "bg-[#6E44FF] text-white" : "hover:bg-neutral-50"
              }`}
            >
              {it.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-3">
        <button className="w-full rounded-xl border px-3 py-2 text-left text-sm hover:bg-neutral-50">
          Settings
        </button>
      </div>
    </nav>
  );
}
