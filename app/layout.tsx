import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👨‍💻 William Hudson Tang | Phenomitor - AI Interview Monitoring",
  description: "Computer Science student at Lehigh University. Creator of Phenomitor, an AI-powered interview monitoring system using computer vision and Google Gemini API. Experience in full-stack development, machine learning, and computer vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
