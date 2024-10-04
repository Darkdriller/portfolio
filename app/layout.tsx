import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Theme } from '@/components/ThemeProvider'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dhruvjyoti Swain | Portfolio",
  description: "Portfolio website of Dhruvjyoti Swain. View my portfolio of creative projects, including web development, data engineering, and many more . I have experience with a variety of technologies and software, and I am always looking for new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
