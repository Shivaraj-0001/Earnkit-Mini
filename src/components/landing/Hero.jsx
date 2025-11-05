"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/primitives/Button";
import Input from "@/components/primitives/Input";

const IDEA_PILLS = ["Launchpad", "Betting Game", "Quiz"];

export default function Hero() {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function start() {
    if (!idea.trim()) {
      setError("Tell us your idea to get started.");
      return;
    }
    setError("");
    setLoading(true);

    // Simulate login + brief build state
    setTimeout(() => {
      router.push(`/app?idea=${encodeURIComponent(idea.trim())}`);
    }, 800);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-neutral-900">Build viral miniapps on Farcaster</h1>
      <p className="mt-3 text-neutral-600">
        Create miniapps with a single prompt—no coding required.
      </p>

      {/* Idea chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Popular ideas">
        {IDEA_PILLS.map((p) => (
          <button
            key={p}
            onClick={() => {
              setIdea(p);
              setError("");
            }}
            className="rounded-full border px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Prompt bar */}
      <div className="mt-6 flex items-center gap-2">
        <Input
          aria-label="Your idea"
          placeholder="Create a launchpad for music artist tokens"
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
            if (error) setError("");
          }}
        />
        <Button
          onClick={start}
          aria-label="Generate"
          disabled={loading}
          className="min-w-[120px]"
        >
          {loading ? "Building…" : "Generate"}
        </Button>
      </div>

      {/* Inline error */}
      {error ? (
        <div className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </div>
      ) : null}
    </section>
  );
}
