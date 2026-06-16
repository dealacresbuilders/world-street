"use client";

import {
  ShieldCheck,
  TrendingUp,
  Users,
  Headphones,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function InvestorBenefits() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "High Footfall",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Headphones,
      title: "Expert Assistance",
      color: "from-yellow-400 to-amber-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-gray-300" />

          <h2 className="text-[#0d2f72] text-2xl md:text-4xl font-bold text-center">
            How World Street Faridabad Benefits Investors and Businesses
          </h2>

          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        {/* Main Section */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">

          <div className="grid lg:grid-cols-[340px_1fr]">

            {/* Image */}
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000"
                alt="World Street"
                className="w-full h-full object-cover min-h-[320px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f72]/80 via-[#0d2f72]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                  Premium Commercial Destination
                </span>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center p-8 lg:p-12">

              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">

                {steps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center"
                    >
                      <div className="group text-center">

                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color}
                          flex items-center justify-center text-white mx-auto
                          shadow-xl transition duration-300 group-hover:scale-110`}
                        >
                          <Icon size={28} />
                        </div>

                        <h3 className="mt-4 text-[#0d2f72] text-sm font-bold whitespace-nowrap">
                          {item.title}
                        </h3>
                      </div>

                      {index !== steps.length - 1 && (
                        <ChevronRight
                          size={24}
                          className="mx-3 text-slate-400 hidden lg:block"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="flex justify-center mt-10">
                <a
  href="https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    bg-[#0d2f72]
    hover:bg-[#123f95]
    text-white
    px-8
    py-4
    rounded-xl
    font-semibold
    flex
    items-center
    gap-2
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
  "
>
  View All Listings

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
              </div>

            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

          <div className="space-y-6">

            <p className="text-gray-700 leading-8 text-lg">
              World Street Faridabad is designed to support both investors and
              business owners with a future-ready commercial ecosystem. The
              project ensures a professional environment, premium maintenance,
              and a well-planned layout that enhances customer experience.
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              For investors, World Street offers verified commercial listings,
              competitive pricing, and expert advisory support. This reduces
              risk and ensures informed decision-making. Many investors prefer
              World Street due to its growing brand value and increasing demand.
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              Business owners benefit from high footfall, strong brand presence,
              and excellent location advantages. The mix of retail, office, and
              food spaces creates a lively commercial environment that
              encourages longer customer stays and higher spending.
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              With expert assistance available at every step, buying property at
              World Street Faridabad becomes easy and transparent.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}