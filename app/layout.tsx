import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhruvjyoti Swain | Portfolio",
  description:
    "Portfolio of Dhruvjyoti Swain — Python developer, full-stack engineer, data engineering. Rendered as an interactive terminal session.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-term-bg text-term-fg font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
