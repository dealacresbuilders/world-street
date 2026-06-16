"use client";

import { TrendingUp, Building2, MapPin, ShieldCheck } from "lucide-react";

export default function FinalConclusionSection() {
  return (
    <section className="relative py-8 bg-[#f7f8fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span className="inline-block w-fit px-4 py-2 rounded-full bg-blue-100 text-[#0d2f72] text-sm font-semibold mb-5">
                Smart Commercial Investment
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2f72] leading-tight">
                World Street Faridabad – A Smart Commercial Investment Choice
              </h2>

              <div className="w-24 h-1 bg-[#f5402d] rounded-full mt-5 mb-8" />

              <p className="text-gray-700 text-lg leading-8">
                World Street Faridabad is more than just a commercial
                project; it is a growing business destination with
                international appeal. With premium infrastructure,
                strategic location, and strong investment potential,
                it offers the perfect platform for businesses and
                investors alike. If you are planning to invest in
                commercial property in Faridabad, World Street is a
                smart and future-proof choice.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-10 text-black">

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <Building2 className="text-[#0d2f72]" />
                  <span className="font-medium">
                    Premium Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <MapPin className="text-[#f5402d]" />
                  <span className="font-medium">
                    Strategic Location
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <TrendingUp className="text-green-600" />
                  <span className="font-medium">
                    High Growth Potential
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <ShieldCheck className="text-[#0d2f72]" />
                  <span className="font-medium">
                    Future-Proof Investment
                  </span>
                </div>

              </div>

              <a
  href="https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 w-fit inline-block bg-[#0d2f72] hover:bg-[#123f95] text-white px-8 py-4 rounded-lg font-semibold transition"
>
  Explore Commercial Spaces in Faridabad
</a>

            </div>

            {/* Right Image */}
            <div className="relative min-h-[500px]">

              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000"
                alt="World Street Faridabad"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2f72]/20 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">

                <div className="grid grid-cols-3 gap-4">

                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                    <h3 className="text-2xl font-bold text-[#0d2f72]">
                      100%
                    </h3>
                    <p className="text-sm text-gray-600">
                      Verified Listings
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                    <h3 className="text-2xl font-bold text-[#0d2f72]">
                      Prime
                    </h3>
                    <p className="text-sm text-gray-600">
                      Commercial Hub
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                    <h3 className="text-2xl font-bold text-[#0d2f72]">
                      High
                    </h3>
                    <p className="text-sm text-gray-600">
                      ROI Potential
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}