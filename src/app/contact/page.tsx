"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-3">
          Get in touch for ECU diagnostics, tuning, or fleet optimization
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* ADDRESS */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-400">
              Office M3, AL MAMZAR BLDG <br />
              Hor Al Anz, Dubai <br />
              United Arab Emirates
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">📞 Phone / WhatsApp</h2>
            <a
              href="https://wa.me/971585173644"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              +971 58 517 3644
            </a>
          </div>

          {/* EMAIL */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">✉️ Email</h2>
            <a
              href="mailto:autotuning.uae@gmail.com"
              className="text-blue-400 hover:underline"
            >
              autotuning.uae@gmail.com
            </a>
          </div>

          {/* SOCIAL */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">🌐 Social Media</h2>
            <div className="flex gap-4 flex-wrap text-sm">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">TikTok</a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* MAP */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Hor+Al+Anz+Dubai&output=embed"
              className="w-full h-[300px] border-0"
              loading="lazy"
            />
          </div>

          {/* FORM */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Send a Message
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
                placeholder="Your Name"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                required
              />

              <input
                name="phone"
                placeholder="Your Phone"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
              >
                Send via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AutoTuningLab • ECU Diagnostics Experts
      </div>

    </main>
  );
}