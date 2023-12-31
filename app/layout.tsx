import { Inter, Cookie, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Leidy & Pablo Wedding | Septiembre 30 / 2023",
  description: "Invitacion a nuestra boda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${cookie.variable} ${lato.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
