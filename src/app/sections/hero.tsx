"use client";

import Image from "next/image";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-emerald-50/30 to-teal-50/40 dark:from-stone-950 dark:via-emerald-950/30 dark:to-teal-950/40"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="absolute top-32 left-8 text-3xl opacity-10 dark:opacity-5 animate-float">🐾</div>
      <div className="absolute bottom-40 right-12 text-2xl opacity-10 dark:opacity-5 animate-float delay-1000">🐾</div>

      <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full mb-6 border border-emerald-200 dark:border-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Bhilai&apos;s Animal Welfare Foundation
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 dark:text-white leading-tight mb-6 font-heading">
              Every Animal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                Deserves
              </span>{" "}
              Love & Care
            </h1>

            <p className="text-stone-600 dark:text-stone-300 text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              At Flora Fauna Foundation, we rescue, shelter, feed, and care for
              animals across Bhilai. Together we can build a more compassionate
              world — one paw at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                id="donate"
                href="mailto:gauravverma9112001@gmail.com?subject=Donation%20Inquiry"
                className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 hover:shadow-xl active:scale-95 text-center"
              >
                Donate & Save Lives 💚
              </a>
              <a
                href="#mission"
                className="px-7 py-3.5 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 font-semibold rounded-full transition-all duration-200 border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 text-center"
              >
                Our Mission →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { value: "500+", label: "Animals Rescued" },
                { value: "200+", label: "Adopted" },
                { value: "1000+", label: "Meals Served" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{value}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-md mx-auto">
              <div className="flex flex-col gap-3 lg:gap-4 mt-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={400}
                    height={500}
                    src="https://img.freepik.com/free-photo/adorable-dog-fantasy-style_23-2151147734.jpg?t=st=1715061945~exp=1715065545~hmac=8bfbdf368fa9f4f69961582cb7afb03e19bed92cab799f0e487cfc87058c1c37&w=360"
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Rescued dog"
                    loading="lazy"
                  />
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={400}
                    height={400}
                    src="https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257870.jpg?t=st=1715062258~exp=1715065858~hmac=c8d0f4f40e781a6475e100e8d347c18b00bd0fd792534754f73dee7841c6d0af&w=360"
                    className="w-full h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Sleeping dog"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={400}
                    height={400}
                    src="https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257865.jpg?t=st=1715062108~exp=1715065708~hmac=04b36e984449318482ed3b2b7681cb3c4c5d2736627aa5cf23c47514f4655097&w=360"
                    className="w-full h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Cute dog"
                    loading="lazy"
                  />
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={400}
                    height={500}
                    src="https://img.freepik.com/free-photo/portrait-cute-dog-anime-style_23-2151382095.jpg?t=st=1715062338~exp=1715065938~hmac=e949c31b8b02bde475a1dd7a1a02f699f8b65f495034560f4d7195c4ac989667&w=360"
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Happy dog"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:left-0 bg-white dark:bg-stone-800 rounded-2xl shadow-lg p-3 border border-stone-100 dark:border-stone-700 flex items-center gap-2.5 animate-bounce-slow">
              <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-lg">
                🐶
              </div>
              <div>
                <p className="text-xs font-bold text-stone-800 dark:text-white">Active Rescues</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Bhilai Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-stone-400 dark:text-stone-500">
        <span className="text-xs">Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-stone-400 dark:from-stone-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

export default Hero;
