import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext"; // Importa el provider

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Portafolio Nicolás Oñate",
  description: "Portafolio de desarrollo web de Nicolás Oñate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning><body> {/* Intenta ponerlo en la misma línea temporalmente para asegurarte */}
     <ThemeProvider>
       {children}
     </ThemeProvider>
   </body></html>
  );
}