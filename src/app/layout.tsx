import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "../components/background";
import { ClientCookiesProvider } from "@/services/cookies/cookiesCliente";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flyvoo",
  description: "Site para decisão precisa da sua vida profissional.",
  creator: "Journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Background />
        <ClientCookiesProvider value={cookies().getAll()}>
          {children}
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
