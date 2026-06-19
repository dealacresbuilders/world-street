import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogProvider } from "@/contextapi/BlogContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Commercial Property in World Street Faridabad | Buy & Invest",

  description:
    "Explore verified commercial properties at World Street Faridabad. Retail shops, office spaces & food courts with high ROI. Get expert guidance today!",
keywords: [
  "commercial property in world street faridabad",
  "buy commercial property faridabad",
  "world street faridabad shops",
  "commercial investment faridabad",
  "retail shops for sale in world street faridabad",
  "office space for rent world street faridabad",
  "best commercial property investment faridabad ncr",
  "faridabad commercial hub",
  "retail space haryana",
  "commercial real estate ncr",
  "investment property faridabad"
],

  alternates: {
    canonical: "https://www.worldstreetfaridabad.in/",
  },

  openGraph: {
    title:
      "World Street Faridabad | Retail Shops, Offices & Commercial Spaces",
    description:
      "Discover retail shops, office spaces, restaurants, entertainment zones, and commercial investment opportunities at World Street Faridabad.",
    url: "https://www.worldstreetfaridabad.in/",
    siteName: "World Street Faridabad",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "World Street Faridabad | Commercial Property & Investment Hub",
    description:
      "Explore premium retail shops, office spaces, and commercial investment opportunities at World Street Faridabad.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <BlogProvider>
        <Navbar/>
        {children}
        <Footer/>
        </BlogProvider>
        </body>
    </html>
  );
}
