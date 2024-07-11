import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "enregla web",
  description: "Soluciones integrales de seguridad automotriz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.className}>{children}
        <Providers>
        <Navbar/>
        </Providers>
      </body>
    </html>
  );
}
