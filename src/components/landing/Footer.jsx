export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-neutral-900">
              Built on Base. Powered by Farcaster.
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Create. launch. and earn $MINI with viral mini apps.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
              href="https://x.com/minidevfun"
              target="_blank"
              rel="noreferrer"
              aria-label="Minidev on X (Twitter)"
            >
              X (Twitter)
            </a>
            <a
              className="text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
              href="https://farcaster.xyz/minidev"
              target="_blank"
              rel="noreferrer"
              aria-label="Minidev on Farcaster"
            >
              Farcaster
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Minidev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
