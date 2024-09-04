import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vlad Education - Expert Guidance for Your Academic and Career Success",
  description: "Unlock your full potential with Vlad Education. We provide personalized tutoring, university counseling, career mentoring, and visa support to help students and professionals achieve their academic and career goals. Let us guide you to success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
