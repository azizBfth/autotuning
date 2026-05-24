import { truckData } from "@/data/trucks";
import { notFound } from "next/navigation";
import ModelSearch from "@/components/ModelSearch";

type Props = {
  params: Promise<{ brand: string }>;
};

export default async function BrandPage({ params }: Props) {
  const { brand: brandSlug } = await params;

  const brand = truckData[brandSlug];
  if (!brand) return notFound();

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* industrial background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/90" />

        {/* blue glow */}
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px]" />

        {/* scan animation */}
        <div className="scan-line" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 py-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          border border-blue-500/20 bg-blue-500/10
                          text-blue-400 text-xs tracking-[0.25em] uppercase">
            Heavy Truck ECU Diagnostics
          </div>

          <h1 className="text-4xl md:text-5xl font-black mt-5">
            {brand.name}
            <span className="text-blue-500 block">
              ECU Systems
            </span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            {brand.description}
          </p>

        </div>

        {/* divider (reduced margin) */}
        <div className="my-8 border-t border-white/10" />

        {/* SEARCH + MODELS */}
        <div className="mt-6">
          <ModelSearch models={brand.models} brandSlug={brandSlug} />
        </div>

      </div>

    </main>
  );
}