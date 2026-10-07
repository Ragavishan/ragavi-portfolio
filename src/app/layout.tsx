import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragavi S | Data Analyst & ML Engineer",
  description:
    "Portfolio of Ragavi S — Data Analyst, ML Engineer and Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}