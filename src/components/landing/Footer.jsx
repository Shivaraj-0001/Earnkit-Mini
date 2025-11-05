export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-neutral-600">
      <p className="font-medium">Built on Base. Powered by Farcaster.</p>
      <div className="mt-2 flex gap-4">
        <a className="underline" href="https://x.com/minidevfun" target="_blank" rel="noreferrer">X (Twitter)</a>
        <a className="underline" href="https://farcaster.xyz/minidev" target="_blank" rel="noreferrer">Farcaster</a>
      </div>
    </footer>
  );
}
