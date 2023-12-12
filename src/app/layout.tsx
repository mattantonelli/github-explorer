import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Search from "@/components/search";

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
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
