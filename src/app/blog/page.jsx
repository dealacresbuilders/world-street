import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Real Estate Blog | 2 BHK Flat Tips, Property News & Market Trends in Faridabad",
  description:
    "Read the latest blogs on 2 BHK flat buying tips, Faridabad property market trends, home loan advice, top sectors to invest & expert real estate guides to make the right decision.",
  keywords: [
   "Faridabad real estate blog", "2 BHK flat buying tips Faridabad", "property market trends Faridabad", "home loan advice India", "best sectors to buy flat Faridabad", "real estate news Faridabad", "property investment Faridabad", "Faridabad housing guide", "2 BHK flat price trends Faridabad", "flat buying checklist Faridabad"
  ],
  alternates: {
    canonical: "https://www.2bhkflatforsaleinfaridabad.com/blog"
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-50">
      <BlogList />
      
     
    </div>
  );
}