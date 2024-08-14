import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brand Monitor",
  description: "Tecnologia de monitoramento para a proteção da sua marca!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="https://cdn.prod.website-files.com/605b962d5e846a3de31701a8/648b24d8187619f2fe5e532f_favicon-32x32.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
