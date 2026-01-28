import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KP — Official Artist Site",
  description: "KP artist website: music, visuals, press kit, and booking.",
  icons: [{ rel: "icon", url: "/kp-logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display">{children}</body>
    </html>
  );
}
