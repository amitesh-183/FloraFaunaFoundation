"use client";

const STATS = [
  { number: "500+", label: "Animals Rescued", emoji: "🦮", description: "From streets, accidents & abuse across Bhilai" },
  { number: "200+", label: "Happy Adoptions", emoji: "🏡", description: "Animals placed in loving forever homes" },
  { number: "10,000+", label: "Meals Provided", emoji: "🍖", description: "Daily feeding drives in Bhilai localities" },
  { number: "50+", label: "Medical Camps", emoji: "💊", description: "Free veterinary care events held" },
  { number: "300+", label: "Volunteers", emoji: "🤝", description: "Kind hearts who make our work possible" },
  { number: "5+", label: "Years of Service", emoji: "⭐", description: "Dedicated to animal welfare in Bhilai" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-20 left-20 text-3xl opacity-10 animate-float">🐾</div>
      <div className="absolute bottom-20 right-20 text-2xl opacity-10 animate-float delay-1000">🐾</div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-4 border border-white/30">
            Our Impact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
            Numbers That Matter
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-base leading-relaxed">
            Every number represents a life touched, a tail wagged, and a heart
            full of gratitude. Here&apos;s what we&apos;ve accomplished together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {STATS.map(({ number, label, emoji, description }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 lg:p-6 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-200 inline-block">
                {number}
              </div>
              <div className="text-sm font-semibold text-emerald-200 mb-1.5">
                {label}
              </div>
              <div className="text-xs text-emerald-200 leading-relaxed hidden sm:block">
                {description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-emerald-100 mb-4 text-sm">
            Help us reach even more animals in need
          </p>
          <a
            href="mailto:gauravverma9112001@gmail.com?subject=Donation%20Inquiry"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            🐾 Support Our Cause
          </a>
        </div>
      </div>
    </section>
  );
}
