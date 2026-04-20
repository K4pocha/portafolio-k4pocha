import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Nicolás Oñate - Desarrollador Fullstack | Portafolio Cyberpunk",
  description: "Portafolio cyberpunk de Nicolás Oñate. Desarrollador Fullstack especializado en React, Next.js, TypeScript y Ciberseguridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}