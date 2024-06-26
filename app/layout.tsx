import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "YouTube Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "bg-black text-white")}>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Sidebar />
            <main style={{ flex: "1" }}>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
