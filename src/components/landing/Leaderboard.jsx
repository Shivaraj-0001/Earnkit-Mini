"use client";

import { useMemo, useState } from "react";
import Card from "@/components/primitives/Card";

const RANGES = ["Today", "This Week", "All-time"];

const DATA = {
  Today: [
    { rank: 1, app: "QuizzyCast", creator: "@alice", vol24h: "$4,320", mini: "120", url: "#" },
    { rank: 2, app: "LaunchBase", creator: "@bob", vol24h: "$2,890", mini: "80", url: "#" },
  ],
  "This Week": [
    { rank: 1, app: "Launchr", creator: "@devdan", vol24h: "$12,900", mini: "420", url: "#" },
    { rank: 2, app: "TriviaKing", creator: "@jay", vol24h: "$9,100", mini: "380", url: "#" },
  ],
  "All-time": [
    { rank: 1, app: "BetBase", creator: "@chris", vol24h: "$90,210", mini: "1,900", url: "#" },
    { rank: 2, app: "MiniHub", creator: "@sofia", vol24h: "$60,720", mini: "1,300", url: "#" },
  ],
};

export default function Leaderboard() {
  const [active, setActive] = useState("Today");
  const rows = useMemo(() => DATA[active], [active]);

  return (
    <section id="leaderboard" className="mx-auto max-w-6xl px-4 py-16">
      {/* Title + Tabs */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Earn $MINI for the apps you launch
          </h2>
          <p className="text-sm text-neutral-600">
            Top miniapp creators get weekly $MINI rewards.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Leaderboard range"
          className="inline-flex rounded-xl border bg-white p-1 shadow-sm"
        >
          {RANGES.map((r) => (
            <button
              key={r}
              role="tab"
              aria-selected={active === r}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition ${
                active === r
                  ? "bg-[#6E44FF] text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
              onClick={() => setActive(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <Card className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm" role="table" aria-label="Leaderboard table">
          <thead>
            <tr className="border-b text-neutral-700">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-4">App</th>
              <th className="py-3 pr-4">Creator</th>
              <th className="py-3 pr-4">24h Volume</th>
              <th className="py-3 pr-4">$MINI</th>
              <th className="py-3 pr-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.rank}
                className="border-b last:border-0 hover:bg-neutral-50 transition"
              >
                <td className="py-3 pr-4 font-semibold text-neutral-700">
                  {r.rank}
                </td>
                <td className="py-3 pr-4">{r.app}</td>
                <td className="py-3 pr-4 text-neutral-600">{r.creator}</td>
                <td className="py-3 pr-4 text-neutral-700">{r.vol24h}</td>
                <td className="py-3 pr-4 text-neutral-700">{r.mini}</td>
                <td className="py-3 pr-4 text-right">
                  <a
                    className="rounded-lg bg-[#6E44FF] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#5b37d0] transition"
                    href={r.url}
                    target="_blank"
                  >
                    Try
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
