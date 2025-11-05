export default function HowItWorks() {
  const steps = [
    { t: "Type an Idea", d: "Describe your idea in natural language." },
    { t: "We Generate Everything", d: "Smart contracts, UI, and miniapp are auto-generated. Iterate with AI." },
    { t: "Launch & Earn", d: "Go live with a token and start earning $MINI." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={i} className="rounded-2xl border p-4">
            <div className="text-sm font-semibold">{i + 1}. {s.t}</div>
            <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
