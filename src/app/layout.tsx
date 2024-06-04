import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suleiman.dev",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='sm:mx-64 mx-0'>
        <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html> 
  );
}