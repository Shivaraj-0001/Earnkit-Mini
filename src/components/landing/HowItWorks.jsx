export default function HowItWorks() {
  const steps = [
    {
      title: "Type an Idea",
      desc: "Describe your idea in natural language. Be as creative as you like.",
    },
    {
      title: "We Generate Everything",
      desc: "Smart contracts, UI, and the miniapp are automatically created. Iterate with AI to refine it.",
    },
    {
      title: "Launch & Earn",
      desc: "Go live with your tokenized miniapp and start earning $MINI.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-semibold text-neutral-900">
        How it works
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-[#FF7A00]/10 font-semibold text-[#FF7A00]">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
