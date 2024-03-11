import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Komito",
  description: "by Yashit Agrawal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
