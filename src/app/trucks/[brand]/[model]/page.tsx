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
    <ModelClient
      brand={brandData.name}
      model={modelData}
    />
  );
}