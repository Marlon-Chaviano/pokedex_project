import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Pokedex by Marlon",
  description: "A cool pokedex , to see all pokemons data and play games",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="bg-white dark:bg-black/70 dark:text-gray-200" lang="es">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 font-sans antialiased">
        <header className="text-xl font-bold leading-[4rem]">
          <Link href="/">O</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} pokedex-project
          <ThemeToggle />
        </footer>
      </body>
    </html>
  );
}
