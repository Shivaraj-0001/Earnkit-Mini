"use client";

export default function PublishModal({ open, onClose, onPublish }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-5 shadow-xl">
        <div className="mb-3 text-lg font-semibold text-neutral-900">Publish miniapp</div>
        <p className="text-sm text-neutral-600">
          This is a simulated publish flow. Confirm to mark the project as <b>Published</b>.
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
          <li>Generate static preview</li>
          <li>Assign public URL</li>
          <li>Show status chip</li>
        </ul>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => { onPublish?.(); onClose?.(); }}
            className="rounded-xl bg-[#6E44FF] px-3 py-1.5 text-sm text-white hover:opacity-90"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
