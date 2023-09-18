import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background } from "../components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flyvoo",
  description: "Site para decisão precisa da sua vida profissional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
