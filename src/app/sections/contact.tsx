"use client";

import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { SOCIAL_LINKS, CONTACT } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-50 dark:bg-stone-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-semibold rounded-full mb-4 border border-violet-200 dark:border-violet-700">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 dark:text-white mb-4 font-heading">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-base leading-relaxed">
              Have a question, want to volunteer, or spotted an animal in need?
              Reach out to Gaurav and the team — we&apos;re always here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div className="bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl shadow-md">
                    👨‍💼
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-800 dark:text-white">{CONTACT.director}</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{CONTACT.title}</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">Flora Fauna Foundation, Bhilai</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Gaurav leads all rescue operations, community programs, and donation initiatives
                  across the Bhilai area. He is the heart behind every mission of this foundation.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl shadow-sm hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <EnvelopeIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Email Us</p>
                    <p className="text-sm font-semibold text-stone-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Our Location</p>
                    <p className="text-sm font-semibold text-stone-800 dark:text-white">{CONTACT.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-2xl">
                <span className="text-xl">🛡️</span>
                <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                  <strong>100% Transparent.</strong> Every rupee donated goes directly
                  towards animal care, food, and medical needs. No hidden charges.
                </p>
              </div>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl shadow-sm hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                  <span className="text-base">📸</span>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Follow Us</p>
                  <p className="text-sm font-semibold text-stone-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    @_flora_founa_foundation_inda_
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-800 dark:text-white mb-5">
                Send us a message 💌
              </h3>
              <form
                action={`mailto:${CONTACT.email}`}
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ramesh Sharma"
                    className="w-full px-4 py-2.5 text-sm border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-400 transition-all bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white placeholder-stone-400 dark:placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 text-sm border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-400 transition-all bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white placeholder-stone-400 dark:placeholder-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="I'd like to know about adoption / volunteering / donating..."
                    className="w-full px-4 py-2.5 text-sm border border-stone-200 dark:border-stone-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-400 transition-all bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl active:scale-[0.98] transition-all duration-200 shadow-sm"
                >
                  Send Message 🐾
                </button>
                <p className="text-xs text-stone-400 dark:text-stone-400 text-center">
                  This will open your email client. Response within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
