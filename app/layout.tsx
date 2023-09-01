import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎂 CakeMe",
  description: "Build dev shit 💩",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
