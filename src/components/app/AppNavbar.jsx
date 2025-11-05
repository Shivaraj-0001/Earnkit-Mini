"use client";

import { useState } from "react";
import TopUpModal from "@/components/app/TopUpModal";

export default function AppNavbar() {
  const [openTopUp, setOpenTopUp] = useState(false);
  const [balance, setBalance] = useState(0);

  return (
    <>
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

          {/* Right: Balance + Top up + status */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700">
              Balance: ${balance}
            </span>
            <button
              className="rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50"
              onClick={() => setOpenTopUp(true)}
            >
              Top up
            </button>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">Draft</span>
          </div>
        </div>
      </header>

      <TopUpModal
        open={openTopUp}
        onClose={() => setOpenTopUp(false)}
        onConfirm={(amt) => setBalance((b) => Number(b) + Number(amt || 0))}
      />
    </>
  );
}
