import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "🎂 CakeMe",
  description: "This is the best Cakes store 🍰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <AuthProvider>
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
