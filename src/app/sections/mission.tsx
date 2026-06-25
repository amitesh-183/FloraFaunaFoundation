"use client";

import {
  HeartIcon,
  HomeIcon,
  HandRaisedIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const MISSIONS = [
  {
    icon: HomeIcon,
    title: "Shelter & Safety",
    description:
      "Providing warm, safe shelters for homeless and injured animals across Bhilai with round-the-clock care.",
    color: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 border-amber-100 dark:border-amber-800",
  },
  {
    icon: HeartIcon,
    title: "Feed & Nourish",
    description:
      "Daily feeding drives across Bhilai communities ensuring no stray animal goes to bed hungry.",
    color: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 border-rose-100 dark:border-rose-800",
  },
  {
    icon: HandRaisedIcon,
    title: "Rescue & Rehabilitate",
    description:
      "Rapid emergency response for injured, sick, and distressed animals with veterinary support.",
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800",
  },
  {
    icon: UserGroupIcon,
    title: "Community Involvement",
    description:
      "Encouraging volunteerism and building a compassionate community around animal welfare.",
    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800",
  },
  {
    icon: GlobeAltIcon,
    title: "Animal Rights",
    description:
      "Advocating for legal protections and humane treatment of all living beings in our region.",
    color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800",
  },
  {
    icon: MegaphoneIcon,
    title: "Education & Awareness",
    description:
      "Running workshops on responsible pet ownership, animal welfare, and empathy in local schools.",
    color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 border-orange-100 dark:border-orange-800",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full mb-4 border border-emerald-200 dark:border-emerald-700">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-white mb-4 font-heading">
            Our Mission
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-base leading-relaxed">
            Flora Fauna Foundation is dedicated to making Bhilai a city where
            every animal lives with dignity, care, and love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {MISSIONS.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-800/40 hover:bg-white dark:hover:bg-stone-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
