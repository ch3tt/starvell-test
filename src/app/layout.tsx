import type { Metadata } from "next";
import { atom } from "jotai";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Starvell",
  description: "",
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
