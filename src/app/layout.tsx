import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abubakar Abdulrahim — Software Engineer & Mobile Architect",
  description:
    "Portfolio of Abubakar Abdulrahim. Software Engineer specializing in high-concurrency Flutter mobile architectures and resilient cloud systems. Based in Kano, Nigeria.",
  authors: [{ name: "Abubakar Abdulrahim", url: PERSONAL_INFO.github }],
  creator: "Abubakar Abdulrahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abubakar Abdulrahim — Software Engineer & Mobile Architect",
    description:
      "Specializing in Flutter, Firebase, React, and Django. Quantified production impact across fintech, emergency dispatch, and campus systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
