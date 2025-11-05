'use client';
import { useMemo, useState } from "react";
import Card from "@/components/primitives/Card";

const ranges = ["Today", "This Week", "All-time"];
const data = {
  Today:     [ { rank: 1, app: "QuizzyCast", creator: "@alice", vol24h: "$4,320", mini: "120", url: "#" } ],
  "This Week":[ { rank: 1, app: "Launchr",    creator: "@bob",   vol24h: "$12,900", mini: "420", url: "#" } ],
  "All-time":[ { rank: 1, app: "BetBase",    creator: "@chris", vol24h: "$90,210", mini: "1,900", url: "#" } ],
};

export default function Leaderboard() {
  const [active, setActive] = useState("Today");
  const rows = useMemo(() => data[active], [active]);

  return (
    <section id="leaderboard" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Earn $MINI for the apps you launch</h2>
          <p className="text-sm text-neutral-600">Top miniapp creators get weekly $MINI rewards.</p>
        </div>

        <div role="tablist" aria-label="Leaderboard range" className="inline-flex rounded-xl border p-1">
          {ranges.map(r => (
            <button
              key={r}
              role="tab"
              aria-selected={active === r}
              className={`px-3 py-1.5 text-sm rounded-lg ${active === r ? "bg-[#6E44FF] text-white" : "text-neutral-600 hover:bg-neutral-100"}`}
              onClick={() => setActive(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <Card className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm" role="table" aria-label="Leaderboard">
          <thead>
            <tr className="text-neutral-500">
              <th className="py-2 pr-4">#</th>
              <th className="py-2 pr-4">App</th>
              <th className="py-2 pr-4">Creator</th>
              <th className="py-2 pr-4">24h Volume</th>
              <th className="py-2 pr-4">MINI</th>
              <th className="py-2 pr-4"> </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.rank} className="border-t">
                <td className="py-3 pr-4">{r.rank}</td>
                <td className="py-3 pr-4">{r.app}</td>
                <td className="py-3 pr-4">{r.creator}</td>
                <td className="py-3 pr-4">{r.vol24h}</td>
                <td className="py-3 pr-4">{r.mini}</td>
                <td className="py-3 pr-4">
                  <a className="underline" href={r.url} target="_blank">Try</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
