import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";
// import Header from "./components/Signupnav";
import Layout from "./components/Layout";
export const metadata = {
  title: "my_app",
  description: "fetching and putting data through server",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
     {/* <Header /> */}
     <Layout />
        <body className={inter.className}>{children}</body>
        <Footer />
      </html>
    )
}
