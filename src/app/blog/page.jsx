import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Commercial Real Estate Blog | World Street Faridabad Insights",
  description:
    "Read expert blogs on commercial property investment in Faridabad. Market trends, buying tips & ROI insights for World Street investors and business owners.",
keywords: [
  "commercial real estate blog faridabad",
  "world street faridabad investment tips",
  "commercial property market trends faridabad",
  "faridabad property news",
  "how to invest in commercial property in faridabad",
  "best commercial areas to invest in faridabad ncr",
  "retail shop investment tips world street faridabad",
  "property investment guide india",
  "commercial real estate news ncr",
  "haryana commercial property updates",
  "faridabad commercial market insights",
  "property news sector 79 faridabad"
],
  alternates: {
    canonical: "https://www.worldstreetfaridabad.in/blog"
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-50">
      <BlogList />
      
     
    </div>
  );
}