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
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">
          {brand.name}
        </h1>

        <p className="text-gray-400 mt-3">
          {brand.description}
        </p>
      </div>

      {/* DIVIDER */}
      <div className="my-10 border-t border-gray-800 max-w-5xl mx-auto" />

      {/* SEARCH + MODELS */}
      <ModelSearch models={brand.models} brandSlug={brandSlug} />

    </main>
  );
}