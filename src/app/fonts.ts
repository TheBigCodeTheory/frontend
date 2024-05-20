import { Inter, Ubuntu } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "variable",
  fallback: ["system-ui", "arial"],
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: "700",
  fallback: ["system-ui", "arial"],
});