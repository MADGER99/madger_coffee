//import localFont from "next/font/local";
import { Cormorant_Upright, Open_Sans } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-open_sans",
});

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata = {
  title: "MADGER-Coffee",
  description: "Coffee Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
