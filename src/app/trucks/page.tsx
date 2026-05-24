"use client";

import Link from "next/link";
import { truckData } from "@/data/trucks";
import { useState } from "react";

export default function TrucksPage() {
  const [query, setQuery] = useState("");

  const filtered = Object.entries(truckData).filter(([_, brand]) =>
    brand.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Truck ECU Diagnostics
        </h1>
        <p className="text-gray-500 mt-3">
          Select a brand or search
        </p>
      </div>

      {/* 🔍 SEARCH */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search brand (MAN, Volvo...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#0b0b0b] border border-gray-800 
                     focus:border-blue-500 outline-none text-sm"
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">

        {(query ? filtered : Object.entries(truckData)).map(([slug, brand]) => (
          <Link
            key={slug}
            href={`/trucks/${slug}`}
            className="flex items-center justify-center
                       h-20 rounded-xl bg-[#0b0b0b]
                       border border-gray-800
                       hover:border-blue-500 hover:scale-[1.03]
                       transition-all duration-200"
          >
            <span className="text-xs sm:text-sm font-medium text-gray-200">
              {brand.name}
            </span>
          </Link>
        ))}

      </div>

      {/* EMPTY STATE */}
      {query && filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No brands found
        </p>
      )}

    </main>
  );
}