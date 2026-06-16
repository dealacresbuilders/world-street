"use client";

import {
  Building2,
  TrendingUp,
  MapPinned,
  Landmark,
} from "lucide-react";

export default function WhyInvestSection() {
  return (
    <section className="relative py-10 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0d2f72] rounded-full text-sm font-semibold">
            Commercial Investment Opportunity
          </span>

          <h2 className="mt-5 text-2xl md:text-4xl font-bold text-[#0d2f72]">
            Why Invest in World Street Faridabad?
          </h2>

          <div className="w-24 h-1 bg-[#f5402d] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <p className="text-gray-700 leading-8 text-lg mb-4">
              World Street Faridabad stands out as a high-potential
              commercial investment hub due to its strategic location
              and international theme. The project is surrounded by
              well-developed residential sectors, ensuring continuous
              footfall throughout the day. This makes it an ideal
              choice for retail shops, cafés, showrooms, and office
              spaces.
            </p>

            <p className="text-gray-700 leading-8 text-lg mb-4">
              One of the biggest advantages of investing in World
              Street is its strong rental yield and appreciation
              potential. Businesses prefer this location because of
              its visibility, modern design, and premium customer
              base. For investors, this means stable monthly income
              and long-term capital growth.
            </p>

            <p className="text-gray-700 leading-8 text-lg mb-4">
              The project also benefits from excellent road
              connectivity to Delhi, Noida, and Gurgaon, making it
              easily accessible for customers and professionals.
              With planned infrastructure growth in Faridabad, the
              demand for commercial spaces at World Street is
              expected to rise further.
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              Whether you are a first-time investor or an experienced
              buyer, World Street Faridabad offers safe investment
              options with high growth prospects.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Building2 className="text-[#0d2f72]" size={28} />
              </div>

              <h3 className="font-bold text-[#0d2f72] text-lg">
                Premium Commercial Hub
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Strategically designed commercial destination with
                modern infrastructure and strong business appeal.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <TrendingUp className="text-[#f5402d]" size={28} />
              </div>

              <h3 className="font-bold text-[#0d2f72] text-lg">
                High Rental Yield
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Excellent appreciation potential with consistent
                rental demand from businesses and brands.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <MapPinned className="text-green-600" size={28} />
              </div>

              <h3 className="font-bold text-[#0d2f72] text-lg">
                Strategic Location
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Seamless connectivity to Delhi, Gurgaon and Noida
                through major road networks.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Landmark className="text-purple-600" size={28} />
              </div>

              <h3 className="font-bold text-[#0d2f72] text-lg">
                Long-Term Growth
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Increasing infrastructure development is expected
                to boost commercial demand in the coming years.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}