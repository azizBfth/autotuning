"use client";

import { useState } from "react";
import Link from "next/link";

export default function ModelSearch({
  models,
  brandSlug,
}: {
  models: any[];
  brandSlug: string;
}) {
  const [search, setSearch] = useState("");

  const filtered = models.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* SEARCH INPUT */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search model (e.g. TGX, FH16...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0b0b0b] border border-gray-800 rounded-xl px-4 py-3
                     text-sm text-white placeholder-gray-500
                     focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((model) => {
          const modelSlug = model.name.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              key={modelSlug}
              href={`/trucks/${brandSlug}/${modelSlug}`}
              className="group relative bg-gradient-to-b from-[#141414] to-[#0a0a0a]
                         border border-gray-800 rounded-2xl p-6
                         hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10
                         transition-all duration-300"
            >
              <h2 className="text-lg font-semibold group-hover:text-blue-400">
                {model.name}
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                Engine: {model.engine}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                ECU: {model.ecu}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}