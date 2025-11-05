'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/primitives/Button";
import Input from "@/components/primitives/Input";

const ideaPills = ["Launchpad", "Betting Game", "Quiz"];

export default function Hero() {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  function start() {
    if (!idea.trim()) {
      alert("Tell us your idea to get started.");
      return;
    }
    setLoading(true);
    // fake login + build, then redirect
    setTimeout(() => {
      router.push(`/app?idea=${encodeURIComponent(idea)}`);
    }, 800);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Build viral miniapps on Farcaster</h1>
      <p className="mt-3 text-neutral-600">Create miniapps with a single prompt—no coding required.</p>

      <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Popular ideas">
        {ideaPills.map(p => (
          <button
            key={p}
            onClick={() => setIdea(p)}
            className="rounded-full border px-3 py-1 text-sm hover:bg-neutral-50"
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        <Input
          aria-label="Your idea"
          placeholder="Create a launchpad for music artist tokens"
          value={idea}
          onChange={e => setIdea(e.target.value)}
        />
        <Button onClick={start} aria-label="Generate" disabled={loading}>
          {loading ? "Building…" : "Generate"}
        </Button>
      </div>
    </section>
  );
}
