import type { Metadata } from "next";
import { Karla, Inter, DM_Sans, Karantina, Arimo } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const karantina = Karantina({
  variable: "--font-karantina",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rishabh Gupta | Product Designer",
  description: "Overthinking UX so users don’t have to, crafting intuitive, impactful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${karla.variable} ${inter.variable} ${dmSans.variable} ${karantina.variable} ${arimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-default">{children}</body>
    </html>
  );
}
