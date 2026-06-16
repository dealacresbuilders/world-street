"use client";

import {
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#f5402d] uppercase tracking-[3px] font-semibold">
            Why Choose World Street
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-[#0d2f72] mt-3">
            How World Street Faridabad Benefits Investors and Businesses
          </h2>
        </div>

        {/* Top Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-[6px] border-[#0d2f72]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <TrendingUp className="text-[#0d2f72]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[#0d2f72]">
                For Investors
              </h3>
            </div>

            <p className="text-gray-700 leading-8">
              World Street Faridabad is designed to support both investors and business owners with a future-ready commercial ecosystem. The project ensures a professional environment, premium maintenance, and a well-planned layout that enhances customer experience.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              For investors, World Street offers verified commercial listings, competitive pricing, and expert advisory support. This reduces risk and ensures informed decision-making. Many investors prefer World Street due to its growing brand value and increasing demand.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-l-[6px] border-[#f5402d]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Briefcase className="text-[#f5402d]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[#0d2f72]">
                For Business Owners
              </h3>
            </div>

            <p className="text-gray-700 leading-8">
              Business owners benefit from high footfall, strong brand presence, and excellent location advantages. The mix of retail, office, and food spaces creates a lively commercial environment that encourages longer customer stays and higher spending.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              With expert assistance available at every step, buying property at World Street Faridabad becomes easy and transparent.
            </p>
          </div>

        </div>

        {/* Bottom Highlights */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <ShieldCheck
              className="mx-auto text-[#0d2f72]"
              size={40}
            />
            <h4 className="font-bold text-[#0d2f72] mt-4">
              Verified Listings
            </h4>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <TrendingUp
              className="mx-auto text-[#f5402d]"
              size={40}
            />
            <h4 className="font-bold text-[#0d2f72] mt-4">
              Growing Demand
            </h4>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Building2
              className="mx-auto text-green-600"
              size={40}
            />
            <h4 className="font-bold text-[#0d2f72] mt-4">
              Premium Commercial Hub
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}