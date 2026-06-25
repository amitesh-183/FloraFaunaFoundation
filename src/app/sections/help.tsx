"use client";

import {
  BanknotesIcon,
  UserGroupIcon,
  HeartIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const WAYS = [
  {
    icon: BanknotesIcon,
    title: "Donate",
    description:
      "Your contribution — big or small — provides food, shelter, and medical care to animals in need across Bhilai.",
    cta: "Donate Now",
    href: "mailto:gauravverma9112001@gmail.com?subject=Donation%20Inquiry",
    highlight: true,
  },
  {
    icon: UserGroupIcon,
    title: "Volunteer",
    description:
      "Join our dedicated team. Whether it's feeding drives, adoption events, or rescue operations — your time matters.",
    cta: "Volunteer",
    href: "mailto:gauravverma9112001@gmail.com?subject=Volunteer%20Inquiry",
  },
  {
    icon: HeartIcon,
    title: "Adopt",
    description:
      "Open your heart and home to a furry friend. By adopting, you give an animal a second chance at a loving life.",
    cta: "Adopt a Pet",
    href: "mailto:gauravverma9112001@gmail.com?subject=Adoption%20Inquiry",
  },
  {
    icon: MegaphoneIcon,
    title: "Spread Awareness",
    description:
      "Share our mission on social media. A single share can reach someone who might just become our next volunteer or donor.",
    cta: "Share Our Story",
    href: "mailto:gauravverma9112001@gmail.com?subject=Partnership%20Inquiry",
  },
  {
    icon: ShoppingBagIcon,
    title: "Shop for a Cause",
    description:
      "Every purchase from our merchandise store directly funds our rescue and rehabilitation efforts.",
    cta: "Coming Soon",
    href: "#",
  },
];

export function HelpSection() {
  return (
    <section id="help" className="py-20 lg:py-28 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full mb-4 border border-teal-200 dark:border-teal-700">
            Take Action
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-white mb-4 font-heading">
            How You Can Help
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-base leading-relaxed">
            There are many beautiful ways to be part of this mission. Every act
            of kindness ripples out and changes lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {WAYS.map(({ title, description, cta, href, highlight }) => (
            <div
              key={title}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                highlight
                  ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-emerald-200 dark:border-emerald-700"
                  : "bg-stone-50/60 dark:bg-stone-800/40 border-stone-100 dark:border-stone-800 hover:bg-white dark:hover:bg-stone-800"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border mb-4 ${
                highlight
                  ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700"
                  : "bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-600"
              }`}>
                {title === "Donate" ? <BanknotesIcon className="w-5 h-5" /> :
                 title === "Volunteer" ? <UserGroupIcon className="w-5 h-5" /> :
                 title === "Adopt" ? <HeartIcon className="w-5 h-5" /> :
                 title === "Spread Awareness" ? <MegaphoneIcon className="w-5 h-5" /> :
                 <ShoppingBagIcon className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-stone-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">
                {description}
              </p>
              <a
                href={href}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                  highlight
                    ? "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                    : "text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                {cta}
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </a>

              {highlight && (
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full">
                  Most Needed
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
