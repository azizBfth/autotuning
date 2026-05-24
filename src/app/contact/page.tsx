"use client";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20">

      {/* 🔵 BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        {/* glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px] rounded-full" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-blue-500 text-xs tracking-[0.3em] uppercase">
            Heavy Truck ECU Diagnostics
          </div>

          <h1 className="text-5xl font-black mt-4">
            Contact Our <span className="text-blue-500">Engine Experts</span>
          </h1>

          <p className="text-gray-400 mt-5">
            MAN • Volvo • Scania • Mercedes • DAF • Iveco  
            <br />
            ECU diagnostics, AdBlue, DPF/EGR, tuning & fleet optimization
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            {/* CARD */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-lg font-semibold">📍 Workshop Address</h2>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Office M3, AL MAMZAR BLDG <br />
                Hor Al Anz, Dubai, United Arab Emirates
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-lg font-semibold">📞 WhatsApp Support</h2>
              <a
                href="https://wa.me/971585173644"
                target="_blank"
                className="text-blue-400 mt-3 block hover:underline"
              >
                +971 58 517 3644
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-lg font-semibold">✉️ Email</h2>
              <a
                href="mailto:autotuning.uae@gmail.com"
                className="text-blue-400 mt-3 block hover:underline"
              >
                autotuning.uae@gmail.com
              </a>
            </div>

            {/* SOCIAL */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-lg font-semibold mb-3">🌐 Social Media</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <a className="hover:text-blue-400">Facebook</a>
                <a className="hover:text-blue-400">Instagram</a>
                <a className="hover:text-blue-400">LinkedIn</a>
                <a className="hover:text-blue-400">TikTok</a>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <iframe
                src="https://www.google.com/maps?q=Hor+Al+Anz+Dubai&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              />
            </div>

            {/* FORM */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

              <h2 className="text-lg font-semibold mb-4">
                Send Diagnostic Request
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.target as HTMLFormElement;

                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const text =
                    `Name: ${name}%0A` +
                    `Phone: ${phone}%0A` +
                    `Email: ${email}%0A` +
                    `Message: ${message}`;

                  window.open(
                    `https://wa.me/971585173644?text=${text}`,
                    "_blank"
                  );
                }}
                className="space-y-4"
              >

                <input
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 outline-none focus:border-blue-500"
                  required
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 outline-none focus:border-blue-500"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 outline-none focus:border-blue-500"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Truck issue / ECU request / service needed..."
                  rows={4}
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 outline-none focus:border-blue-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition"
                >
                  Send via WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm mt-20">
          © {new Date().getFullYear()} AutoTuningLab • Heavy Truck ECU Diagnostics
        </div>

      </div>
    </main>
  );
}