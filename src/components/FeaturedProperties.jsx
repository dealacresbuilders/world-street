"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const properties = [
  {
    title: "Retail Shop",
    price: "₹80 Lac Onwards",
    location: "World Of Ultscape Faridabad",
    image: "/retail.jpeg",
  },
  {
    title: "Office Space",
    price: "₹60 Lac",
    location: "M3M OfficeSpace Freehold",
    image: "/office.jpeg",
  },
  {
    title: "Food Court",
    price: "₹75 Lac",
    location: "Rent Levy ₹ 400 Sq Ft.",
    image: "/food.jpeg",
  },
  {
    title: "Commercial Space",
    price: "₹1.5 Cr",
    location: "Market 10, 1300 Sq Ft.",
    image: "/commercial.jpeg",
  },
  {
    title: "Greed Retail",
    price: "₹32.0 Lac",
    location: "Market 01, 1300 Sq Ft.",
    image: "/greed.jpeg",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[220px]" />
          <h2 className="mx-6 text-[#0d2f72] text-2xl font-bold">
            Featured Properties in World Street
          </h2>
          <div className="h-[1px] bg-gray-300 flex-1 max-w-[220px]" />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">

          {properties.map((item, index) => (
            <div
              key={index}
              className="bg-[#0d2f72] rounded shadow-lg overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="relative h-[190px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="font-bold text-xl mt-1">
                  {item.price}
                </p>

                <div className="flex items-center gap-1 text-xs mt-2 text-gray-200">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>

                {/* <button className="mt-4 w-full bg-white text-[#0d2f72] h-9 rounded flex items-center justify-center gap-2 font-medium">
                  View Details
                  <ArrowRight size={14} />
                </button> */}
              </div>
            </div>
          ))}

        </div>

        {/* View All */}
        <div className="flex justify-center mt-8">
          <a
  href="https://www.dealacres.com/properties/commercial-properties-for-sale-in-faridabad"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-[#0d2f72] text-white px-8 h-11 rounded shadow-md hover:bg-[#123f95] transition"
>
  View All Listings
</a>
        </div>

      </div>
    </section>
  );
}