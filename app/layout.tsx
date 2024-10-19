import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import { Providers } from "@/lib/Providers";
import { Toaster } from "react-hot-toast";

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
      <head >
        <script src="https://checkout.razorpay.com/v1/checkout.js" id="razorpay-checkout-js"></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`bg-neutral-950 text-white`}
      >
        <Providers>
          <AppBar/>
          {children}
          <Toaster/>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
