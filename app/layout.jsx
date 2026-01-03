import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { Inter, Montserrat } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "FA Builders",
  description: "The standard of Excellence.",
  icons: {
    icon: "/icons/logo_light.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeContextProvider>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
