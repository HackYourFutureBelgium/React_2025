import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;