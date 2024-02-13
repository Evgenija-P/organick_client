import { roboto } from "./fonts";
import "./globals.css";
import { Header } from "@/components/Header.jsx";

export const metadata = {
  title: "Organick",
  description: "Organick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-main bg-white`}>
        <Header /> {children}
      </body>
    </html>
  );
}
