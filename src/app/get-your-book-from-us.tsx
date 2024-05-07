"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  HeartIcon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: BanknotesIcon,
    title: "Donate",
    description:
      " Your financial contributions help us provide food, shelter, and medical care to animals in need. Every donation, no matter how small, makes a difference.",
  },
  {
    icon: UserGroupIcon,
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and make a direct impact on the lives of animals. Whether it's walking dogs, assisting with adoptions, or helping out at events, your time and skills are invaluable.",
  },
  {
    icon: HeartIcon,
    title: "Adopt",
    description:
      "Consider opening your heart and home to a furry friend in need. By adopting from us, you're not only saving a life but also gaining a loyal and loving companion.",
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    title: "Spread the Word",
    description:
      "Help us raise awareness about animal welfare issues and our organization's work. Follow us on social media, share our posts, and encourage others to get involved.",
  },
  {
    icon: HandThumbUpIcon,
    title: "Shop for a Cause",
    description:
      "Support us by purchasing merchandise from our online store. Every purchase directly benefits our rescue and rehabilitation efforts.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
        How You Can Help?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
        >
          There are many ways you can support our mission:
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
