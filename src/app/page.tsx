import Link from "next/link";

const services = [
  {
    title: "ECU Diagnostics",
    desc: "Advanced heavy truck ECU scanning, troubleshooting & live diagnostics.",
  },
  {
    title: "Stage 1 / Stage 2 Tuning",
    desc: "Safe power increase, torque optimization & throttle response.",
  },
  {
    title: "AdBlue / SCR Systems",
    desc: "Professional SCR, DPF & AdBlue diagnostics and calibration.",
  },
  {
    title: "Fuel Optimization",
    desc: "Reduce fuel consumption for fleets with optimized ECU mapping.",
  },
  {
    title: "DPF / EGR Solutions",
    desc: "Heavy-duty diesel emissions diagnostics & optimization.",
  },
  {
    title: "Transmission Calibration",
    desc: "Gearbox ECU adaptation and transmission optimization.",
  },
];

const brands = [
  "MAN",
  "Volvo",
  "Scania",
  "Mercedes",
  "DAF",
  "Iveco",
  "Renault",
  "Caterpillar",
  "Komatsu",
  "JCB",
  "Hitachi",
  "John Deere",
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* BLUE GLOW */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/20 blur-[180px] rounded-full" />

        {/* GRID EFFECT */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-14">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           border border-blue-500/20 bg-blue-500/10
                           text-blue-400 text-xs tracking-[0.25em] uppercase"
              >
                Heavy Truck ECU Solutions
              </div>

              <h1
                className="mt-8 text-5xl sm:text-6xl xl:text-7xl
                           font-black leading-[1.05] tracking-tight"
              >
                <span className="text-blue-500 block">
                  Truck & Heavy Equipments Diagnostics
                </span>
                ECU Tuning Experts
              </h1>

              <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
                Professional diagnostics and ECU optimization for heavy trucks,
                diesel engines, fleets, construction machinery and commercial vehicles.
                Specialized in MAN, Volvo, Scania, Mercedes, DAF, Iveco and industrial diesel systems.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/trucks"
                  className="px-8 py-4 rounded-2xl
                             bg-blue-600 hover:bg-blue-700
                             transition-all duration-300
                             font-semibold shadow-lg shadow-blue-600/20
                             hover:scale-105"
                >
                  Browse Trucks
                </Link>

                <a
                  href="https://wa.me/971585173644?text=Hello,%20I%20am%20contacting%20you%20through%20AutoTuningLab.%20I%20would%20like%20more%20information." target="_blank"
                  className="px-8 py-4 rounded-2xl
                             border border-white/10
                             bg-white/5 backdrop-blur-xl
                             hover:bg-white hover:text-black
                             transition-all duration-300 font-semibold"
                >
                  WhatsApp Contact
                </a>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">

                {[
                  ["50+", "Brands"],
                  ["1200+", "Truck Models"],
                  ["24/7", "Support"],
                  ["100%", "Heavy Duty"],
                ].map(([value, label], i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10
                               bg-white/[0.03] backdrop-blur-xl p-5"
                  >
                    <div className="text-3xl font-black text-blue-500">
                      {value}
                    </div>

                    <div className="text-sm text-gray-400 mt-2">
                      {label}
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT SIDE CARD */}
            <div className="relative">

              <div
                className="relative rounded-[32px]
                           border border-white/10
                           bg-gradient-to-b from-white/[0.08] to-white/[0.02]
                           backdrop-blur-2xl p-8 lg:p-10
                           shadow-2xl shadow-blue-500/10"
              >

                {/* TOP */}
                <div className="flex items-center justify-between mb-10">

                  <div>
                    <div className="text-sm text-gray-400">
                      Diagnostic System
                    </div>

                    <div className="text-2xl font-bold mt-1">
                      Online & Ready
                    </div>
                  </div>

                  <div
                    className="w-4 h-4 rounded-full bg-green-500
                               animate-pulse"
                  />
                </div>

                {/* SERVICES LIST */}
                <div className="space-y-5">

                  {[
                    "MAN Diagnostics",
                    "Volvo ECU Tuning",
                    "AdBlue / SCR",
                    "DPF Systems",
                    "Fuel Optimization",
                    "Fleet Calibration",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between
                                 border border-white/5
                                 bg-black/30 rounded-2xl p-4"
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className="w-10 h-10 rounded-xl
                                     bg-blue-500/10
                                     border border-blue-500/20
                                     flex items-center justify-center"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        </div>

                        <span className="font-medium">
                          {item}
                        </span>

                      </div>

                      <span className="text-green-400 text-sm">
                        Active
                      </span>

                    </div>
                  ))}

                </div>

                {/* CTA */}
                <div
                  className="mt-8 rounded-2xl bg-blue-600
                             p-5 text-center"
                >
                  <div className="text-sm opacity-80">
                    Need Professional Truck Diagnostics?
                  </div>

                  <a
                    href="https://wa.me/971585173644?text=Hello,%20I%20am%20contacting%20you%20through%20AutoTuningLab.%20I%20would%20like%20more%20information." target="_blank"
                    className="inline-block mt-3 text-lg font-bold"
                  >
                    Contact Expert →
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="text-blue-500 text-sm uppercase tracking-[0.25em]">
              OUR SERVICES
            </div>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Advanced Heavy Truck ECU Solutions
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              Premium diagnostics and ECU optimization services
              for commercial trucks, diesel engines and industrial machinery.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden
                           rounded-3xl border border-white/10
                           bg-gradient-to-b from-[#121212] to-[#080808]
                           p-8 hover:border-blue-500
                           transition-all duration-500"
              >

                <div
                  className="absolute inset-0 opacity-0
                             group-hover:opacity-100
                             bg-blue-500/5 transition"
                />

                <div className="relative z-10">

                  <div
                    className="w-16 h-16 rounded-2xl
                               bg-blue-500/10 border border-blue-500/20
                               flex items-center justify-center mb-6"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BRANDS */}
      <section className="py-24 px-6 bg-[#070707] border-y border-white/5">

        <div className="max-w-7xl mx-auto text-center">

          <div className="text-blue-500 text-sm uppercase tracking-[0.25em]">
            SUPPORTED BRANDS
          </div>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Trucks & Heavy Machinery
          </h2>

          <p className="text-gray-500 mt-5">
            Specialized diagnostics for commercial diesel platforms
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">

            {brands.map((brand) => (
              <Link
                key={brand}
                href={`/trucks/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                className="h-24 rounded-2xl
               border border-white/10
               bg-[#0c0c0c]
               flex items-center justify-center
               hover:border-blue-500
               hover:text-blue-400
               hover:scale-105
               transition-all duration-300"
              >
                <span className="font-semibold tracking-wide">
                  {brand}
                </span>
              </Link>
            ))}

          </div>

          <Link
            href="/trucks"
            className="inline-flex mt-14 px-8 py-4 rounded-2xl
                       bg-blue-600 hover:bg-blue-700
                       transition-all duration-300
                       font-semibold"
          >
            View All Brands
          </Link>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-blue-600/5 blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Optimize
            <span className="text-blue-500 block">
              Your Truck Fleet?
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Select your truck brand, choose ECU services,
            and contact our heavy-duty diagnostics experts instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/trucks"
              className="px-8 py-4 rounded-2xl
                         bg-blue-600 hover:bg-blue-700
                         font-semibold transition-all duration-300"
            >
              Start Diagnostics
            </Link>

            <a
              href="https://wa.me/971585173644?text=Hello,%20I%20am%20contacting%20you%20through%20AutoTuningLab.%20I%20would%20like%20more%20information." target="_blank"
              className="px-8 py-4 rounded-2xl
                         border border-white/10
                         hover:bg-white hover:text-black
                         transition-all duration-300"
            >
              WhatsApp Expert
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505]">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid md:grid-cols-3 gap-12">

            {/* BRAND */}
            <div>

              <h3 className="text-2xl font-black">
                AutoTuningLab
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Premium heavy truck ECU diagnostics, diesel engine tuning,
                AdBlue systems and fleet optimization solutions.
              </p>

            </div>

            {/* LINKS */}
            <div>

              <h4 className="text-white font-bold mb-5">
                Quick Links
              </h4>

              <div className="space-y-3 text-gray-400">

                <Link
                  href="/"
                  className="block hover:text-blue-400 transition"
                >
                  Home
                </Link>

                <Link
                  href="/trucks"
                  className="block hover:text-blue-400 transition"
                >
                  Truck Brands
                </Link>

                <Link
                  href="/contact"
                  className="block hover:text-blue-400 transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h4 className="text-white font-bold mb-5">
                Contact
              </h4>

              <div className="space-y-3 text-gray-400 text-sm">

                <p>
                  📍 Office M3, AL MAMZAR BLDG,<br />
                  Hor Al Anz, Dubai, UAE
                </p>

                <a
                  href="tel:+971585173644"
                  className="block hover:text-blue-400 transition"
                >
                  📞 +971 58 517 3644
                </a>

                <a
                  href="mailto:autotuning.uae@gmail.com"
                  className="block hover:text-blue-400 transition"
                >
                  ✉️ autotuning.uae@gmail.com
                </a>

                <a
                  href="https://wa.me/971585173644?text=Hello,%20I%20am%20contacting%20you%20through%20AutoTuningLab.%20I%20would%20like%20more%20information." target="_blank"
                  className="block hover:text-blue-400 transition"
                >
                  💬 WhatsApp Support
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} AutoTuningLab — Heavy Truck Diagnostics & ECU Solutions
          </div>

        </div>

      </footer>

    </main>
  );
}