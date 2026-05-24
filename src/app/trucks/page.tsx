"use client";

import Link from "next/link";
import { truckData } from "@/data/trucks";
import { useState } from "react";

export default function TrucksPage() {
  const [query, setQuery] = useState("");

  const list = Object.entries(truckData).filter(([_, brand]) =>
    brand.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🚛 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/85" />

      {/* 🔵 BLUE GLOW (ECU ENERGY) */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px] rounded-full" />

      {/* 🟠 ENGINE GLOW */}
      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-orange-500/10 blur-[200px] rounded-full" />

      {/* 📊 GRID (FIXED) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 🚨 SCAN LINE ANIMATION */}
      <div className="scan-line" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-14">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black">
            Truck ECU <span className="text-blue-500">Diagnostics</span>
          </h1>

          <p className="text-gray-500 mt-4">
            Select a brand or search ECU systems (MAN, Volvo, Caterpillar...)
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search truck brand..."
            className="w-full px-5 py-4 rounded-2xl
                       bg-[#0b0b0b]/80 backdrop-blur-xl
                       border border-gray-800
                       focus:border-blue-500
                       outline-none text-sm"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">

          {list.map(([slug, brand]) => (
            <Link
              key={slug}
              href={`/trucks/${slug}`}
              className="group relative h-24 flex items-center justify-center
                         rounded-2xl bg-gradient-to-b from-[#121212] to-[#080808]
                         border border-white/10
                         hover:border-blue-500
                         transition-all duration-300 overflow-hidden"
            >

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/10 transition" />

              {/* text */}
              <span className="relative z-10 text-sm font-semibold text-gray-200 group-hover:text-blue-400">
                {brand.name}
              </span>

              {/* top line effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/30 opacity-0 group-hover:opacity-100" />

            </Link>
          ))}

        </div>

        {/* EMPTY STATE */}
        {query && list.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No truck brand found
          </p>
        )}

      </div>
    </main>
  );
}