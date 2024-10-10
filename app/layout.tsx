import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Learn Live",
  description: "Learn and be a 100x with learn live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="dark">
      <body
        suppressHydrationWarning={true}
        className={`bg-neutral-950 text-white`}
      >
        <AppBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
