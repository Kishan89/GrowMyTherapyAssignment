import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Dr. Serena Blake, PsyD (Clinical Psychologist)",
  description: "Therapist website built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} scroll-smooth`}>
      <body className="font-lora antialiased text-gray-800 bg-white">
        {children}
      </body>
    </html>
  );
}
