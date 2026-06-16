"use client";

import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function BenefitsFlowSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
    },
    {
      icon: BadgeDollarSign,
      title: "Competitive Pricing",
    },
    {
      icon: Users,
      title: "High Footfall",
    },
    {
      icon: Headphones,
      title: "Expert Assistance",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px bg-gray-300" />

          <h2 className="text-3xl font-bold text-[#0d2f72] text-center">
            How World Street Faridabad Benefits Investors and Businesses
          </h2>

          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="bg-[#f8f8f8] rounded-xl p-8 shadow-md">

          <div className="grid lg:grid-cols-[220px_1fr] gap-8 items-center">

            {/* Left Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070"
                alt=""
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Right Flow */}
            <div className="flex items-center justify-between flex-wrap gap-4">

              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <div className="text-center min-w-[140px]">

                      <div className="w-14 h-14 mx-auto rounded-full bg-[#0d2f72] text-white flex items-center justify-center">
                        <Icon size={24} />
                      </div>

                      <h3 className="mt-3 text-sm font-semibold text-[#0d2f72]">
                        {item.title}
                      </h3>
                    </div>

                    {index !== items.length - 1 && (
                      <ChevronRight
                        className="mx-4 text-gray-400"
                        size={26}
                      />
                    )}
                  </div>
                );
              })}

            </div>

          </div>

          {/* Content */}
          {/* <div className="mt-10 text-gray-700 leading-8">
            <p>
              World Street Faridabad is designed to support both investors and business owners with a future-ready commercial ecosystem. The project ensures a professional environment, premium maintenance, and a well-planned layout that enhances customer experience.
            </p>

            <p className="mt-4">
              For investors, World Street offers verified commercial listings, competitive pricing, and expert advisory support. This reduces risk and ensures informed decision-making. Many investors prefer World Street due to its growing brand value and increasing demand.
            </p>

            <p className="mt-4">
              Business owners benefit from high footfall, strong brand presence, and excellent location advantages. The mix of retail, office, and food spaces creates a lively commercial environment that encourages longer customer stays and higher spending.
            </p>

            <p className="mt-4">
              With expert assistance available at every step, buying property at World Street Faridabad becomes easy and transparent.
            </p>
          </div> */}

        </div>
      </div>
    </section>
  );
}