"use client";

import { useState } from "react";
import PublishModal from "@/components/app/PublishModal";

export default function PreviewPanel() {
  const [status, setStatus] = useState("Draft"); // Draft | Preview Ready | Published
  const [openPublish, setOpenPublish] = useState(false);

  return (
    <div className="space-y-3">
      {/* Project header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-neutral-900">My Launchpad</div>
          <div className="text-xs text-neutral-500">
            https://app.minidev.fun/my-launchpad
            <button
              className="ml-2 cursor-pointer hover:text-black rounded border px-2 py-0.5 text-xs hover:bg-neutral-50"
              onClick={() => navigator.clipboard?.writeText("https://app.minidev.fun/my-launchpad")}
            >
              Copy
            </button>
          </div>
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            status === "Published"
              ? "bg-green-100 text-green-700"
              : status === "Preview Ready"
              ? "bg-indigo-100 text-indigo-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <button
          className="rounded-xl bg-gray-100 border px-3 py-1.5 text-sm text-black hover:bg-sky-100 cursor-pointer"
          onClick={() => alert("Code viewer is read-only (placeholder).")}
        >
          Code (read-only)
        </button>
        <button
          className="rounded-xl bg-gray-100 border px-3 py-1.5 text-sm text-black hover:bg-sky-100 cursor-pointer"
          onClick={() => alert("Screenshot saved (mock).")}
        >
          Screenshot
        </button>
        <button
          className="rounded-xl bg-gray-100 border px-3 py-1.5 text-sm text-black hover:bg-sky-100 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
        <button
          className="ml-auto rounded-xl bg-[#6E44FF] px-3 py-1.5 text-sm text-white hover:opacity-90"
          onClick={() => setOpenPublish(true)}
        >
          Publish
        </button>
      </div>

      {/* iPhone-like preview frame */}
      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[320px] overflow-hidden rounded-[38px] border bg-white shadow-lg">
        <div className="absolute inset-0 grid place-items-center text-sm text-neutral-500">
          Miniapp preview (stub)
        </div>
      </div>

      {/* Modal */}
      <PublishModal
        open={openPublish}
        onClose={() => setOpenPublish(false)}
        onPublish={() => setStatus("Published")}
      />
    </div>
  );
}
