import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

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
        <div className="container-fluid">
          <main className="mt-3">{children}</main>
        </div>
      </body>
    </html>
  );
}
