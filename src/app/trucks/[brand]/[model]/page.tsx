import { truckData } from "@/data/trucks";
import { notFound } from "next/navigation";
import ModelClient from "./ModelClient";

type Props = {
  params: Promise<{
    brand: string;
    model: string;
  }>;
};

export default async function ModelPage({ params }: Props) {
  const { brand, model } = await params;

  const brandData = truckData[brand];
  if (!brandData) return notFound();

  const modelData = brandData.models.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === model
  );

  if (!modelData) return notFound();

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* industrial truck background */}
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
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/20 blur-[200px]" />

        {/* scanning line */}
        <div className="scan-line" />

        {/* grid effect (FIXED) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 py-10">

        <ModelClient
          brand={brandData.name}
          model={modelData}
        />

      </div>

    </main>
  );
}