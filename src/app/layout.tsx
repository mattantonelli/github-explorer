import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Search from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Explorer",
  description: "User profile explorer for GitHub."
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
