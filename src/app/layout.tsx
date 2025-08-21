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
      <body className="">
        <Navbar />
        <main className="flex-1 flex justify-center">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
