import Footer from "@/components/sections/Footer";
import { roboto } from "./fonts";
import "./globals.css";
import { Header } from "@/components/Header.jsx";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata = {
  title: "Organic",
  description: "Organic",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-main bg-white`}>
        <StoreProvider>
          <Header /> {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
