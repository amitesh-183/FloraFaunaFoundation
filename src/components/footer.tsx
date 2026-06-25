import { HeartIcon } from "@heroicons/react/24/solid";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT } from "@/lib/constants";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300">
      <div className="container mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <HeartIcon className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-semibold text-white">
                Flora Fauna <span className="text-emerald-400">Foundation</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              A compassionate initiative from Bhilai dedicated to rescuing,
              sheltering, feeding, and rehoming animals in need. Every life
              matters.
            </p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition-colors"
            >
              <span className="text-base">📸</span>
              Follow us on Instagram
            </a>
            <div className="flex items-center gap-2 text-xs text-stone-500 mt-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Actively serving Bhilai, Chhattisgarh
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📬</span>
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Location</p>
                  <p className="text-sm text-stone-300">{CONTACT.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">👨‍💼</span>
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Director</p>
                  <p className="text-sm text-stone-300">{CONTACT.director}</p>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${CONTACT.email}?subject=Donation%20Inquiry`}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              💚 Donate Now
            </a>
          </div>
        </div>

        <div className="border-t border-stone-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            &copy; {CURRENT_YEAR} Flora Fauna Foundation &middot; All rights reserved.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Made with <HeartIcon className="h-3 w-3 text-rose-400" /> for the
            animals of Bhilai
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
