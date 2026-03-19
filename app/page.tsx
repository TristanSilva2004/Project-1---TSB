import Link from "next/link";
import { listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";

export default function HomePage() {
  const featuredListings = listings.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-gold-500/30 px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Luxury Living Redefined
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Marina
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              Towers
            </span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover exceptional rental residences with panoramic views,
            world-class amenities, and an unparalleled lifestyle in the heart of
            the city.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/listings"
              className="bg-gold-500 hover:bg-gold-600 text-black px-10 py-4 text-sm font-bold tracking-widest uppercase transition-colors w-full sm:w-auto text-center"
            >
              Find Your Stay
            </Link>
            <Link
              href="/submit"
              className="border border-white/20 hover:border-gold-500 text-white hover:text-gold-400 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all w-full sm:w-auto text-center"
            >
              List Your Property
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 max-w-lg mx-auto">
            <div>
              <div className="text-gold-400 font-heading text-3xl font-bold">42</div>
              <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Floors</div>
            </div>
            <div>
              <div className="text-gold-400 font-heading text-3xl font-bold">200+</div>
              <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Residences</div>
            </div>
            <div>
              <div className="text-gold-400 font-heading text-3xl font-bold">5★</div>
              <div className="text-white/40 text-xs tracking-wider uppercase mt-1">Amenities</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/50 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
              The Marina Towers Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Premium Residences",
                desc: "Meticulously designed apartments with luxury finishes, smart home technology, and breathtaking views.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "World-Class Amenities",
                desc: "Infinity pools, fitness centers, spa facilities, concierge services, and private parking.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Prime Location",
                desc: "Situated in the heart of the marina district with easy access to dining, shopping, and entertainment.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 hover:border-gold-500/30 transition-colors group"
              >
                <div className="text-gold-400 mb-4 group-hover:text-gold-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
                Featured
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Handpicked Residences
              </h2>
            </div>
            <Link
              href="/listings"
              className="hidden sm:inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
            >
              View All Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
            >
              View All Listings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-6">
            Own a Property at
            <span className="text-gold-400"> Marina Towers</span>?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            List your apartment on our platform and connect with premium tenants
            looking for luxury living.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-10 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Submit Your Listing
          </Link>
        </div>
      </section>
    </>
  );
}
