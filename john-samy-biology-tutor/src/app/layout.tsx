import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "John Samy - EST2 & ACT2 Biology Tutor | Online Biology Course",
  description: "Master Biology the smart way with John Samy's comprehensive EST2 & ACT2 Biology preparation course. Expert tutoring, structured sessions, and proven results.",
  keywords: "EST2 Biology, ACT2 Biology, Biology Tutor Egypt, Online Biology Course, Biology Preparation, EST Biology, ACT Biology",
  authors: [{ name: "John Samy" }],
  openGraph: {
    title: "John Samy - EST2 & ACT2 Biology Tutor",
    description: "Master Biology the smart way with comprehensive EST2 & ACT2 preparation course",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
