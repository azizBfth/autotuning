
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoTuning Lab",
  description: "Truck ECU diagnostics and performance tuning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" suppressHydrationWarning>
  <body className="bg-black text-white">
    {children}
  </body>
</html>
  );
}