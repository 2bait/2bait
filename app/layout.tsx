import type { Metadata } from "next";
//import "./globals.css";
import "./assets/css/default.css";
import "./assets/css/layout.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: '2bait',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'From Bait to Brilliance',
  openGraph: {
    title: '2bait',
    description: 'From Bait to Brilliance',
    siteName: '2bait',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header />
        <main className="page-main">
        {children}
        </main>
         <Footer />
        </body>
    </html>
  );
}
