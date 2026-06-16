"use client";

import {
  Search,
  MapPin,
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  Building2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/street.jpeg')",
        }}
      />

      {/* Overlay */}
<div className="absolute inset-0 bg-black/30" />

<div className="absolute inset-0 bg-gradient-to-r from-[#0d2f72]/85 via-[#0d2f72]/45 to-transparent" />
     

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          World Street Faridabad – Premium Commercial Property Destination
        </h1>

        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4">
          Commercial Property Listings
        </h2>

        <p className="text-white mt-4">
          World Street Faridabad is one of the most premium and fast-growing commercial destinations in Haryana. Inspired by international street markets, this iconic project offers a perfect mix of retail shops, office spaces, food courts, and investment-friendly commercial units. Located in the heart of Faridabad, World Street attracts high footfall from nearby residential sectors, corporate professionals, and visitors from Delhi NCR.
If you are looking to buy commercial property in World Street Faridabad, this destination offers excellent opportunities for business owners as well as investors. With world-class infrastructure, modern architecture, and strong rental demand, World Street has become a preferred choice for brands, startups, restaurants, and retail businesses.
At World Street Faridabad, you get verified listings, expert guidance, and transparent pricing, making your commercial property buying journey smooth and secure. Whether your goal is business expansion or long-term returns, World Street is designed to deliver growth and stability.
        </p>

        {/* Search Box */}
     {/* <div className="mt-10 max-w-[1150px] bg-white rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] text-black">

  <div className="grid lg:grid-cols-4">

    <div className="h-[78px] px-6 flex items-center justify-between border-r">
      <span className="font-medium">
        World Street, Faridabad
      </span>
      <ChevronDown />
    </div>

    <div className="h-[78px] px-6 flex items-center justify-between border-r">
      <span className="font-medium">
        Property Type
      </span>
      <ChevronDown />
    </div>

    <div className="h-[78px] px-6 flex items-center justify-between border-r">
      <span className="font-medium">
        Budget (Min - Max)
      </span>
      <ChevronDown />
    </div>

    <button className="bg-[#123f95] text-white flex items-center justify-center gap-3 text-lg font-semibold">
      <Search size={22} />
      Search Listings
    </button>

  </div>
</div> */}

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-6">
         <div className="flex flex-wrap gap-4">
  <Link href="/contact">
    <button className="bg-[#f5402d] text-white px-10 py-4 font-semibold rounded hover:bg-[#e23422] transition cursor-pointer">
      Find Your Space
    </button>
  </Link>

  <Link href="/contact">
    <button className="bg-white text-[#123f95] px-10 py-4 rounded font-semibold hover:bg-gray-100 transition cursor-pointer">
      Request Free Consultation
    </button>
  </Link>
</div>
        </div>

        {/* Features Bar */}
        <div className="bg-white mt-24 rounded-xl shadow-2xl text-black">
          <div className="grid md:grid-cols-4">
            <div className="p-6 flex gap-4 items-center border-r">
              <ShieldCheck className="text-[#123f95]" />
              <div>
                <h4 className="font-semibold">
                  Verified Listings
                </h4>
              </div>
            </div>

            <div className="p-6 flex gap-4 items-center border-r">
              <BadgeDollarSign className="text-[#123f95]" />
              <div>
                <h4 className="font-semibold">
                  Best Market Prices
                </h4>
              </div>
            </div>

            <div className="p-6 flex gap-4 items-center border-r">
              <Headphones className="text-[#123f95]" />
              <div>
                <h4 className="font-semibold">
                  Expert Advisors
                </h4>
              </div>
            </div>

            <div className="p-6 flex gap-4 items-center">
              <Building2 className="text-[#123f95]" />
              <div>
                <h4 className="font-semibold">
                  Site Visit Assistance
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}