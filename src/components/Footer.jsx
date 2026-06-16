"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071d47] text-white">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              WORLD STREET
            </h2>

            <p className="tracking-[6px] text-sm text-gray-300 mt-2">
              FARIDABAD
            </p>

            <p className="mt-6 text-gray-300 leading-7">
              Discover premium commercial properties, retail spaces,
              office spaces and investment opportunities at World Street
              Faridabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              {/* <li>
                <Link href="/about" className="hover:text-white">
                  About World Street
                </Link>
              </li> */}

              <li>
                <a
                  href="https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Listings
                </a>
              </li>

              <li>
                <a
                  href="https://www.dealacres.com/projects/omaxe-ltd-in-faridabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-[#f5402d]" />
                <span className="text-gray-300">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-1 text-[#f5402d]" />
                <span className="text-gray-300">
                  info@worldstreetfaridabad.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[#f5402d]" />
                <span className="text-gray-300">
                  World Street, Sector 79,
                  Faridabad, Haryana
                </span>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Explore Properties
            </h3>

            <p className="text-gray-300 leading-7 mb-6">
              Browse the latest commercial properties and
              investment opportunities available in Faridabad.
            </p>

            <a
              href="https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f5402d] hover:bg-[#db321f] px-6 py-3 rounded-lg font-semibold transition"
            >
              View Listings
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} World Street Faridabad. All Rights Reserved.
          </p>

          {/* <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f5402d] transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f5402d] transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f5402d] transition"
            >
              <Linkedin size={18} />
            </a>

          </div> */}
        </div>
      </div>
    </footer>
  );
}