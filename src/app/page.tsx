import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">

        <div className="absolute w-[600px] h-[600px] bg-blue-600 blur-[200px] opacity-20 rounded-full top-[-200px]" />

        <div className="text-xs tracking-[0.3em] text-gray-500 uppercase">
          Truck ECU Diagnostics & Optimization
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Heavy Truck <br /> ECU Solutions
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Advanced ECU diagnostics, tuning, and fault analysis for trucks,
          heavy machinery, and fleet optimization.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <Link
            href="/trucks"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            Browse Trucks
          </Link>

          <a
            href="https://wa.me/+971585173644"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            WhatsApp Contact
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our ECU Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { title: "ECU Diagnostics", desc: "Full system scan & analysis" },
            { title: "Performance Tuning", desc: "Increase power & torque safely" },
            { title: "Fuel Optimization", desc: "Reduce fuel consumption" },
            { title: "AdBlue Systems", desc: "SCR & emissions diagnostics" },
            { title: "Fault Code Removal", desc: "Clear & fix ECU errors" },
            { title: "Engine Calibration", desc: "Professional ECU mapping" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {s.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* TRUCK BRANDS CTA */}
      <section className="px-6 py-20 bg-[#0a0a0a] text-center">

        <h2 className="text-3xl font-bold mb-6">
          Supported Brands
        </h2>

        <p className="text-gray-400 mb-10">
          We support 50+ truck & machinery brands
        </p>

        <Link
          href="/trucks"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold"
        >
          View All Brands
        </Link>

      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-4xl font-bold">
          Ready to Tune Your Truck?
        </h2>

        <p className="text-gray-400 mt-4">
          Select your truck, choose services, and send request instantly via WhatsApp
        </p>

        <Link
          href="/trucks"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
        >
          Start Now
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-10 px-6 py-10 text-gray-400">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              AutoTuningLab
            </h3>
            <p className="text-sm">
              Professional ECU diagnostics and tuning for trucks and heavy machinery.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/trucks">Trucks</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 United Arab Emirates</li>
              <li>
                📞{" "}
                <a href="tel:++971585173644" className="hover:text-white">
                  +971 58 517 3644
                </a>
              </li>
              <li>
                💬{" "}
                <a
                  href="https://wa.me/+971585173644"
                  target="_blank"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>✉️ autotuning.uae@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-xs text-gray-600 mt-10">
          © {new Date().getFullYear()} AutoTuningLab — All rights reserved
        </div>

      </footer>

    </main>
  );
}