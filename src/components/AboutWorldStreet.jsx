
"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const agents = [
  {
    name: "Ankite Sharma",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    name: "Rohit Verma",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    name: "Samir Khan",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
];

export default function AboutWorldStreet() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative overflow-hidden border bg-[#f7f7f7]">

          <div className="grid lg:grid-cols-[260px_1fr]">

            {/* Left Side */}
            <div className="relative bg-white p-5">

              <h2 className="text-[22px] font-bold text-[#0d2f72] mb-4">
                About World Street Faridabad
              </h2>

              <div className="space-y-3 text-black">

                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle
                    size={14}
                    className="text-[#f4b400]"
                  />
                  International Themed Market
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle
                    size={14}
                    className="text-[#f4b400]"
                  />
                  Prime Location in Faridabad
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle
                    size={14}
                    className="text-[#f4b400]"
                  />
                  High Growth Potential
                </div>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle
                    size={14}
                    className="text-[#f4b400]"
                  />
                  Ideal Investment Opportunities
                </div>

              </div>

              {/* Bottom Image */}
              <div className="mt-5">
                <Image
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000"
                  alt="World Street"
                  width={220}
                  height={70}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative min-h-[260px]">

              {/* Background */}
              <Image
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2000"
                alt="World Street"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-white/10" />

              {/* Agent Cards */}
              <div className="relative z-10 flex justify-center gap-4 pt-4">

                {agents.map((agent, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg w-[160px]"
                  >
                    <div className="relative h-[120px]">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-2 text-center">

                      <h3 className="text-sm font-bold text-[#0d2f72]">
                        {agent.name}
                      </h3>

                      <p className="text-[10px] text-gray-500">
                        Property Consultant
                      </p>

                      <button className="mt-2 w-full bg-[#0d2f72] text-white text-[11px] py-1.5">
                        Talk to Agent
                      </button>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}