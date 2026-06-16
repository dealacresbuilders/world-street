"use client";

import {
  Store,
  Building2,
  UtensilsCrossed,
  BadgeDollarSign,
} from "lucide-react";

export default function CommercialPropertiesSection() {
  return (
    <section className="py-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#f5402d] font-semibold uppercase tracking-[3px]">
            Property Categories
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-[#0d2f72] mt-3">
            Commercial Properties Available at World Street Faridabad
          </h2>
        </div>

        {/* Property Types */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-5">

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#f5402d] hover:-translate-y-2 transition">
            <Store size={45} className="text-[#0d2f72]" />
            <h3 className="text-xl font-bold text-[#0d2f72] mt-5">
              Retail Shops
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              Ideal for branded outlets, boutiques, showrooms and
              businesses looking for maximum customer visibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0d2f72] hover:-translate-y-2 transition">
            <Building2 size={45} className="text-[#0d2f72]" />
            <h3 className="text-xl font-bold text-[#0d2f72] mt-5">
              Office Spaces
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              Premium workspaces designed for startups, IT firms,
              consultants and modern businesses.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-600 hover:-translate-y-2 transition">
            <UtensilsCrossed size={45} className="text-green-600" />
            <h3 className="text-xl font-bold text-[#0d2f72] mt-5">
              Food Courts
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              Vibrant dining spaces with excellent customer flow and
              strong business opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-500 hover:-translate-y-2 transition">
            <BadgeDollarSign size={45} className="text-yellow-500" />
            <h3 className="text-xl font-bold text-[#0d2f72] mt-5">
              Investment Units
            </h3>
            <p className="text-gray-600 mt-3 leading-7">
              Attractive commercial investment options with potential
              lease returns and long-term growth.
            </p>
          </div>

        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div
  className="relative p-10 md:p-14 text-white flex items-center min-h-[300px] bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('/london.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0d2f72]/30" />

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
      Commercial Properties Available at
      <span className="text-[#f5402d]">
        {" "}World Street Faridabad
      </span>
    </h3>

    <div className="w-20 h-1 bg-[#f5402d] mt-5 rounded-full" />
  </div>
</div>

            {/* Right Content */}
            <div className="p-3">

              <p className="text-gray-700 leading-8 mb-2">
                World Street Faridabad offers a wide range of commercial property options to suit different business needs and budgets. Buyers can choose from retail shops, which are ideal for branded outlets, boutiques, and showrooms. These shops enjoy high visibility and heavy footfall, making them perfect for daily business operations.
              </p>

              <p className="text-gray-700 leading-8 mb-2">
                For professionals and startups, office spaces at World Street Faridabad provide a modern working environment with premium infrastructure. These offices are suitable for IT firms, consultants, and service-based businesses looking for a prestigious address.
              </p>

              <p className="text-gray-700 leading-8 mb-2">
                Food entrepreneurs can explore food court spaces, which are designed to attract maximum customer attention. With a vibrant atmosphere and steady visitor flow, food courts here perform exceptionally well.
              </p>

              <p className="text-gray-700 leading-6">
                Additionally, investors can consider commercial investment units that offer attractive lease returns. All properties are designed with international standards, ensuring long-term usability and demand.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}