import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abubakar Abdulrahim — Mobile Developer & IT Professional",
  description:
    "Portfolio of Abubakar Abdulrahim, an IT professional and mobile developer based in Kano, Nigeria, specializing in Flutter, Firebase, and web technologies.",
  authors: [{ name: "Abubakar Abdulrahim", url: PERSONAL_INFO.github }],
  creator: "Abubakar Abdulrahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abubakar Abdulrahim — Mobile Developer & IT Professional",
    description:
      "Building practical digital products that solve real problems. Specializing in Flutter, Firebase, and web technologies. Based in Kano, Nigeria.",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
