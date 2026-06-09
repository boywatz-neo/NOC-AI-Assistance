import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOC AI Assistant Prototype",
  description: "Spec-driven Vercel prototype for a RAG-based NOC assistant."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
