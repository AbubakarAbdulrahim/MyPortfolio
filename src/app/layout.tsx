import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abubakar Abdulrahim — Software Engineer & Mobile App Architect",
  description:
    "Award-class portfolio of Abubakar Abdulrahim, Software Engineer & Mobile App Developer specializing in Flutter, Firebase, React.js, and Django REST APIs. Based in Kano, Nigeria.",
  keywords: [
    "Abubakar Abdulrahim",
    "Software Engineer",
    "Mobile App Developer",
    "Flutter Developer",
    "Firebase Architect",
    "React Developer",
    "Django REST",
    "Kano Nigeria Software Engineer",
    "Safetify App",
    "Fintech Mobile Architecture",
  ],
  authors: [{ name: "Abubakar Abdulrahim", url: PERSONAL_INFO.github }],
  creator: "Abubakar Abdulrahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abubakar-portfolio.vercel.app",
    title: "Abubakar Abdulrahim — Software Engineer & Mobile App Architect",
    description:
      "Specializing in zero-latency Flutter mobile architectures, real-time Firebase backends, and full-stack React/Django ecosystems.",
    siteName: "Abubakar Abdulrahim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Abdulrahim — Software Engineer & Mobile App Architect",
    description:
      "Specializing in zero-latency Flutter mobile architectures, real-time Firebase backends, and full-stack React/Django ecosystems.",
    creator: "@AbubakarAbdulrahim",
  },
  robots: {
    index: true,
    follow: true,
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
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
