"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CONTACT } from "@/lib/constants";

const FAQS = [
  {
    title: "How can I donate to Flora Fauna Foundation?",
    desc: `You can reach out to us directly via email at ${CONTACT.email} with the subject 'Donation Inquiry'. Gaurav will personally guide you through the process and ensure your donation reaches animals in need.`,
  },
  {
    title: "Do you have volunteer opportunities in Bhilai?",
    desc: `Yes! We actively welcome volunteers for feeding drives, adoption events, rescue operations, and awareness campaigns across Bhilai. Email us at ${CONTACT.email} to get started.`,
  },
  {
    title: "Can I adopt a pet from Flora Fauna Foundation?",
    desc: `Absolutely! We have many lovable animals waiting for their forever homes in Bhilai. Write to us at ${CONTACT.email} with 'Adoption Inquiry' and our team will guide you through the process.`,
  },
  {
    title: "I found an injured animal near Bhilai. What should I do?",
    desc: `Please contact us immediately at ${CONTACT.email} or reach out to Gaurav Verma directly. Provide your location and details about the animal's condition. We'll coordinate a rescue response as quickly as possible.`,
  },
  {
    title: "How is my donation used?",
    desc: "Every rupee donated goes directly towards animal care — food, shelter, veterinary treatment, and rescue operations. We maintain full transparency and can provide a breakdown upon request. Your trust means everything to us.",
  },
  {
    title: "Can schools and colleges partner with Flora Fauna Foundation?",
    desc: `Yes! We love collaborating with educational institutions for awareness workshops, street feeding drives, and adoption campaigns. Email us at ${CONTACT.email} to schedule a session for your institution.`,
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full mb-4 border border-amber-200 dark:border-amber-700">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-white mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
              Everything you need to know about Flora Fauna Foundation and how
              you can make a difference.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-stone-100 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-stone-200 dark:hover:border-stone-700 transition-colors"
              >
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors duration-200"
                >
                  <span className="text-sm font-semibold text-stone-800 dark:text-white leading-snug pr-4">
                    {faq.title}
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 text-stone-400 dark:text-stone-500 flex-shrink-0 transition-transform duration-300 ${
                      open === idx ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === idx ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {faq.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-6">
            <p className="text-stone-700 dark:text-white font-semibold mb-1">
              Still have questions?
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
              Reach out directly to Gaurav — he&apos;ll be happy to help.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 transition-colors"
            >
              📬 Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
