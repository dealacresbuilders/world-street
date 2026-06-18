'use client'

import Image from "next/image"
import Link from "next/link"
import { useBlog } from "@/contextapi/BlogContext";
import "@/app/globals.css";
import Breadcrumb from "@/components/Breadcrumb";
export default function BlogDetails({ post }) {

  const single = post?.blog;
  const { blogs: recentBlogs } = useBlog();

  return (
    <div className="max-w-6xl mx-auto  gap-10 px-4 bg-white py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
      {/* 🔥 LEFT SIDE */}
      <article className="lg:col-span-2 space-y-10">

    {/* 🔥 TITLE + DATE */}
    <div className="mt-6 px-2 md:px-0">

      <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight">
        {single?.Title}
      </h1>

      <p className="text-sm text-gray-600 mt-2">
        {new Date(single?.Date).toDateString()}
      </p>

    </div>
        {/* HERO */}
        {/* HERO */}
<div className="w-full flex justify-center pt-2">
  <div className="w-full">

    {/* IMAGE */}
    <div className="w-full h-[260px] md:h-[480px] bg-white md:rounded-2xl overflow-hidden">
      <Image
        src={single?.HeroImg?.url}
        unoptimized
        alt={single?.HeroAltText || "Blog Image"}
        width={1200}
        height={800}
        priority
        className="w-full h-full object-cover"
      />
    </div>


  </div>
</div>

        {/* BLOG CONTENT */}
        <div className="max-w-6xl mx-auto space-y-8">

          {single.Content?.map((section) => (

            <div key={section?._id}>

              {/* TEXT */}
              <div className="quill-content">
                <div
                  className="ql-editor !p-0 text-black leading-relaxed
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-black
                  [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-black
                  [&_p]:text-black
                  [&_li]:text-black
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3
  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mt-3
  [&_li]:mb-2
"
  dangerouslySetInnerHTML={{ __html: section?.content }}
                />
              </div>

              {/* IMAGE */}
              {section?.img?.url && (
                <div className="w-full my-6">
                  <Image
                    src={section.img.url}
                    unoptimized
                    alt={section?.img?.altText || "Blog Image"}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-auto rounded-xl object-cover shadow-sm"
                  />
                </div>
              )}

            </div>

          ))}

          {/* FAQs */}
          {single?.FAQs?.length > 0 && (
            <div className="mt-10">

              <h2 className="text-2xl font-semibold mb-4 text-black">
                FAQs
              </h2>

              {single.FAQs.map((faq, i) => (
                <details
                  key={i}
                  className="border-b border-gray-200 py-3 cursor-pointer group"
                >
                  <summary className="font-semibold text-black group-hover:text-[#0d2f72]">
                    {faq.Q}
                  </summary>

                  <p className="mt-2 text-gray-700">
                    {faq.A}
                  </p>
                </details>
              ))}

            </div>
          )}

        </div>

      </article>

      {/* 🔥 RIGHT SIDE (RECENT BLOGS) */}
      {/* <div className="hidden lg:block">
        <div className="sticky top-24 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-xl font-bold text-black mb-4">
              Recent Blogs
            </h3>

            <div className="space-y-4">

                       {[...recentBlogs]
  ?.sort((a, b) => new Date(b.Date || b.date) - new Date(a.Date || a.date))
  ?.slice(0, 6)
  .map((item, index) => (
                <Link
                  key={item._id || index}
                  href={`/blog/${item.Slug || item.slug}`}
                  className="flex gap-3 items-center group hover:bg-gray-50 p-2 rounded-lg transition"
                >

                  <Image
                    src={
                      item?.HeroImg?.url ||
                      item?.image ||
                      "/fallback.jpg"
                    }
                    unoptimized
                    alt="recent blog"
                    width={80}
                    height={60}
                    className="rounded-lg object-cover w-20 h-16"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-black line-clamp-2 group-hover:text-[#0d2f72]">
                      {item?.Title || item?.title}
                    </h4>

                    <p className="text-xs text-gray-600 mt-1">
                      {new Date(item?.Date || item?.date).toDateString()}
                    </p>
                  </div>

                </Link>
              ))}

            </div>

          </div>

        </div>
      </div> */}

    </div>
  )
}