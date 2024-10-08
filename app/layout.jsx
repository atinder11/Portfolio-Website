import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Atinder Kumar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
      <ThemeProvider attribute='class' defaultTheme='Light'>
      <Header/>

      {children}
      <Footer/>

      </ThemeProvider>
      
      </body>
    </html>
  );
}
