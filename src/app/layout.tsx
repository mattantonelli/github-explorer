import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Search from "@/components/search";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://github-explorer-ochre.vercel.app/"),
  title: "GitHub Explorer",
  description: "User profile explorer for GitHub.",
  openGraph: {
    title: "GitHub Explorer",
    description: "User profile explorer for GitHub."
  }
};

export const viewport: Viewport = {
  themeColor: "#1e2327"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column`}>
        <div className="container">
          <main>
            <div className="row my-3">
              <div className="col-12">
                <Search />
              </div>
            </div>
            {children}
          </main>
        </div>
        <footer className="footer mt-auto py-3">
          <div className="container text-center">
            <span>Created by Matt Antonelli</span>
            <a href="https://github.com/mattantonelli/github-explorer" target="_blank" className="m-1">
              <Image src="/images/github.png" alt="GitHub" width="25" height="25" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
