import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Fred-Omojole — Frontend Engineer",
  description:
    "Frontend Engineer at onekard, focused on seamless interface and user-friendly experience. ",
  generator: "Next.js",
  applicationName: "Fred-Omojole",
  keywords: [
    "Chakra",
    "next",
    "enthusiast",
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  openGraph: {
    locale: "en-US",
    type: "website",
  },

  icons: {
    icon: ["/logo.png/?v=4"],
    shortcut: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
