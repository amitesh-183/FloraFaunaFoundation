"use client";

import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

const GALLERY_IMAGES = [
  {
    src: "https://img.freepik.com/free-photo/adorable-dog-fantasy-style_23-2151147734.jpg?t=st=1715061945~exp=1715065545~hmac=8bfbdf368fa9f4f69961582cb7afb03e19bed92cab799f0e487cfc87058c1c37&w=360",
    alt: "Rescued dog in Bhilai",
    caption: "Rescued from the streets",
  },
  {
    src: "https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257865.jpg?t=st=1715062108~exp=1715065708~hmac=04b36e984449318482ed3b2b7681cb3c4c5d2736627aa5cf23c47514f4655097&w=360",
    alt: "Dog resting safely",
    caption: "Safe and sound now",
  },
  {
    src: "https://img.freepik.com/free-photo/cute-dog-sleeping-ai-generated_23-2150643837.jpg?t=st=1715062139~exp=1715065739~hmac=851a2db24aa73474d2fc56db2b8d7ad4076318fe49d96dba2b461c07214381dd&w=360",
    alt: "Happy dog",
    caption: "Napping peacefully",
  },
  {
    src: "https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907138.jpg?t=st=1715062221~exp=1715065821~hmac=38dcf2b568f435d8ee8f8042f52db7cd392b060d1f94f2a4226f17a9c061ade9&w=360",
    alt: "Adorable dog",
    caption: "Ready for adoption",
  },
  {
    src: "https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257870.jpg?t=st=1715062258~exp=1715065858~hmac=c8d0f4f40e781a6475e100e8d347c18b00bd0fd792534754f73dee7841c6d0af&w=360",
    alt: "Peaceful dog",
    caption: "Loved and cared for",
  },
  {
    src: "https://img.freepik.com/free-photo/portrait-cute-dog-anime-style_23-2151382095.jpg?t=st=1715062338~exp=1715065938~hmac=e949c31b8b02bde475a1dd7a1a02f699f8b65f495034560f4d7195c4ac989667&w=360",
    alt: "Cute dog portrait",
    caption: "Finding forever homes",
  },
  {
    src: "https://img.freepik.com/free-photo/cute-dog-city_23-2151002720.jpg?t=st=1715062377~exp=1715065977~hmac=b11129a9173fa13c9f484407f8d47b53d05ba87c3c477b9b956ecbc8d29a89ec&w=360",
    alt: "Dog in the city",
    caption: "Exploring with us",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-stone-50 dark:bg-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 text-xs font-semibold rounded-full mb-4 border border-rose-200 dark:border-rose-700">
            Our Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-white mb-4 font-heading">
            Faces of Hope
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-base leading-relaxed">
            Every photo tells a story of rescue, love, and second chances. Meet
            some of the beautiful souls we&apos;ve had the privilege to help.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map(({ src, alt, caption }) => (
            <div
              key={alt}
              className="group relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                width={600}
                height={600}
                src={src}
                alt={alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium drop-shadow-sm">{caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/90 dark:bg-stone-800/90 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🐾
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl p-5 shadow-sm">
            <span className="text-2xl">📸</span>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-stone-800 dark:text-white">
                Follow our journey on social media
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Share our posts to help us reach more people
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-stone-800 dark:bg-emerald-500 text-white text-xs font-semibold rounded-full hover:bg-stone-900 dark:hover:bg-emerald-600 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
