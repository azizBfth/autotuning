import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-black border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg">
          AutoTuningLab
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/trucks" className="hover:text-white transition">Trucks</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Get Quote
        </Link>

      </div>
    </header>
  );
}