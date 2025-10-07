import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FlowSpace",
  description: "Events & projects agency with an AI proposal generator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-svh flex flex-col antialiased bg-[radial-gradient(900px_600px_at_10%_0%,rgba(236,72,153,0.20),transparent_40%),radial-gradient(800px_520px_at_110%_-10%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(820px_560px_at_-10%_65%,rgba(16,185,129,0.20),transparent_48%)]">
        <Navbar />
        <main className=" flex justify-center">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
