type Props = {
  params: { slug: string };
};

const truckServices: Record<string, any> = {
  caterpillar: {
    title: "Caterpillar ECU Diagnostics & Optimization",
    description:
      "Advanced ECU diagnostics, performance optimization, fault code analysis, and engine calibration for Caterpillar heavy-duty engines.",
    services: [
      "Cat ET Diagnostic Analysis",
      "ECU Parameter Optimization",
      "Fuel Efficiency Calibration",
      "Torque Mapping Adjustment",
      "Fault Code Removal Support",
    ],
  },

  volvo: {
    title: "Volvo Trucks ECU Diagnostic Service",
    description:
      "Full diagnostic and performance optimization for Volvo FH / FM engines.",
    services: [
      "ECU Remapping",
      "Fuel optimization",
      "AdBlue system diagnostics",
      "Engine torque calibration",
    ],
  },
};

export default function ServicePage({ params }: Props) {
  const data = truckServices[params.slug];

  if (!data) {
    return (
      <div className="p-10 text-white">
        Service not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen p-10">

      {/* HEADER */}
      <h1 className="text-4xl font-bold">
        {data.title}
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl">
        {data.description}
      </p>

      {/* SERVICES LIST */}
      <div className="mt-10 grid gap-4 max-w-2xl">
        {data.services.map((s: string, i: number) => (
          <div
            key={i}
            className="p-4 border border-gray-800 rounded-xl bg-[#111]"
          >
            {s}
          </div>
        ))}
      </div>

    </main>
  );
}