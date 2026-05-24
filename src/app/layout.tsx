import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "AutoTuningLab",
  description: "ECU Remapping & Performance Tuning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}