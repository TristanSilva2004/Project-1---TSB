import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-white font-heading text-xl font-semibold">
                  Marina Towers
                </span>
                <span className="block text-ocean-400 text-xs tracking-[0.3em] uppercase">
                  Rentals
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Discover luxury living at Marina Towers. Premium apartments with
              world-class amenities, stunning views, and an unparalleled lifestyle
              in the heart of the city.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-ocean-400 font-heading text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/50 hover:text-ocean-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-white/50 hover:text-ocean-400 transition-colors text-sm">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-white/50 hover:text-ocean-400 transition-colors text-sm">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ocean-400 font-heading text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Marina Towers, Downtown</li>
              <li>info@marinatowers.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Marina Towers Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
