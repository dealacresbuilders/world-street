"use client";

import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2f72] via-[#123f95] to-[#071d47]" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Let's Find Your Perfect Property
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Connect with our property experts and get complete guidance
            regarding commercial investments, pricing, availability and site visits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          {/* Left Side */}
<div className="relative overflow-hidden rounded-3xl">

  <img
    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
    alt="World Street Faridabad"
    className="w-full h-full min-h-[600px] object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  <div className="absolute bottom-0 left-0 p-8">
    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
      Premium Commercial Hub
    </span>

    <h3 className="text-white text-3xl font-bold mt-4">
      World Street Faridabad
    </h3>

    <p className="text-gray-200 mt-3 leading-7">
      Invest in one of Faridabad's most iconic commercial destinations.
      Discover premium retail shops, office spaces and investment
      opportunities with expert assistance.
    </p>

    <div className="flex gap-4 mt-6">
      <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
        <p className="text-yellow-400 font-bold text-xl">1000+</p>
        <span className="text-white text-sm">Businesses</span>
      </div>

      <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl">
        <p className="text-yellow-400 font-bold text-xl">24/7</p>
        <span className="text-white text-sm">Support</span>
      </div>
    </div>
  </div>

</div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold text-[#0d2f72] mb-6">
              Request a Callback
            </h3>

            <form className="space-y-5 text-black">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-14 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#0d2f72]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-14 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#0d2f72]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#0d2f72]"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your requirement"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-[#0d2f72]"
              />

              <button
                type="submit"
                className="w-full h-14 bg-[#0d2f72] hover:bg-[#123f95] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Send Inquiry
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}