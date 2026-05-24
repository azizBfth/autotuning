"use client";

import { useState } from "react";

export default function ModelClient({ brand, model }: any) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fileLink, setFileLink] = useState("");

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name]
    );
  };

  const handleWhatsApp = () => {
    const message = `
🚛 Truck ECU Request

Brand: ${brand}
Model: ${model.name}

Services:
${selectedServices.map((s) => `- ${s}`).join("\n")}

File: ${fileLink || "N/A"}
    `;

    const url = `https://wa.me/+971585173644?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-3xl font-bold">{model.name}</h1>

      <p className="text-gray-400 mt-2">
        Engine: {model.engine} | ECU: {model.ecu}
      </p>

      {/* SERVICES */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {model.services.map((service: any, i: number) => {
          const active = selectedServices.includes(service.name);

          return (
            <div
              key={i}
              onClick={() => toggleService(service.name)}
              className={`cursor-pointer rounded-xl p-4 flex justify-between border transition
                ${active
                  ? "bg-blue-600/20 border-blue-500"
                  : "bg-[#111] border-gray-800 hover:border-blue-500"}
              `}
            >
              <span>{service.name}</span>

              {service.price && (
                <span className="text-blue-400 font-semibold">
                  €{service.price}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* FILE INPUT */}
      <input
        type="text"
        placeholder="File link (optional)"
        value={fileLink}
        onChange={(e) => setFileLink(e.target.value)}
        className="mt-8 w-full max-w-xl p-3 rounded-xl bg-[#111] border border-gray-800"
      />

      {/* BUTTON */}
      <button
        onClick={handleWhatsApp}
        disabled={selectedServices.length === 0}
        className="mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 px-6 py-3 rounded-xl"
      >
        Send via WhatsApp
      </button>

    </main>
  );
}