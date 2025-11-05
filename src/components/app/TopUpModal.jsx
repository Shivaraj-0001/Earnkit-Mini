"use client";

export default function TopUpModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-5 shadow-xl">
        <div className="mb-3 text-lg font-semibold text-neutral-900">Top up balance</div>
        <p className="text-sm text-neutral-600">
          This is a stub flow. Enter any amount to simulate a successful top-up.
        </p>

        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const amt = e.currentTarget.amount.value || "0";
            onConfirm?.(amt);
            onClose?.();
          }}
        >
          <label className="block text-sm">
            <span className="text-neutral-700">Amount (USD)</span>
            <input
              name="amount"
              placeholder="25"
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:border-neutral-400"
            />
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#FF7A00] px-3 py-1.5 text-sm text-white hover:opacity-90"
            >
              Top up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
