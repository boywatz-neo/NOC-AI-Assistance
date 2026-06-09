"use client";

import { useState } from "react";
import { ChecklistItem } from "@/lib/types";

type ChecklistCardProps = {
  initialItems: ChecklistItem[];
};

export function ChecklistCard({ initialItems }: ChecklistCardProps) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);

  async function regenerateChecklist() {
    setLoading(true);
    const response = await fetch("/api/checklist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceType: "Live Streaming",
        action: "Add new customer",
        customerName: "Acme Media"
      })
    });
    const data = (await response.json()) as { items: ChecklistItem[] };
    setItems(data.items);
    setLoading(false);
  }

  return (
    <section className="panel p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-ink">Checklist Generator</h2>
          <p className="mt-1 text-sm text-slate-500">
            Prototype output aligned to F-02 with required parameter prompts.
          </p>
        </div>
        <button
          onClick={regenerateChecklist}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition hover:border-reef hover:text-reef"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <ol className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.step} className="rounded-3xl bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-reef text-sm font-semibold text-white">
                {item.step}
              </div>
              <h3 className="font-semibold text-ink">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">
              Required parameters
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.requiredParameters.map((parameter) => (
                <span key={parameter} className="rounded-full bg-sand px-3 py-1 text-xs text-ink">
                  {parameter}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
