import { notFound } from "next/navigation";
import Link from "next/link";
import { listings, getListingById } from "@/data/listings";
import WhatsAppButton from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const listing = getListingById(params.id);
  if (!listing) return { title: "Not Found" };
  return {
    title: `${listing.title} | Marina Towers Rentals`,
    description: listing.description,
  };
}

export default function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = getListingById(params.id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/40 hover:text-ocean-400 transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/listings" className="text-white/40 hover:text-ocean-400 transition-colors">
              Listings
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-ocean-400">{listing.title}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {listing.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${listing.title} ${i + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="bg-ocean-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Available Now
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                {listing.title}
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {listing.longDescription}
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 p-6 bg-white/5 border border-white/10">
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Bedrooms
                  </div>
                  <div className="text-white font-heading text-2xl font-bold">
                    {listing.bedrooms}
                  </div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Bathrooms
                  </div>
                  <div className="text-white font-heading text-2xl font-bold">
                    {listing.bathrooms}
                  </div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Area
                  </div>
                  <div className="text-white font-heading text-2xl font-bold">
                    {listing.area} m²
                  </div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    Floor
                  </div>
                  <div className="text-white font-heading text-2xl font-bold">
                    {listing.floor}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <h2 className="font-heading text-xl font-semibold text-white mb-4">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {listing.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-ocean-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-navy-900 border border-white/10 p-8">
                <div className="mb-6">
                  <div className="text-white/40 text-sm mb-1">Monthly Rent</div>
                  <div className="text-ocean-400 font-heading text-4xl font-bold">
                    ${listing.price.toLocaleString()}
                  </div>
                  <div className="text-white/40 text-sm">per {listing.period}</div>
                </div>

                <div className="space-y-4 mb-8">
                  <WhatsAppButton
                    phone={listing.whatsapp}
                    message={`Hi! I'm interested in renting "${listing.title}" at Marina Towers. Could you provide more details?`}
                    className="w-full justify-center"
                  />

                  <Link
                    href="/listings"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:border-ocean-500 text-white hover:text-ocean-400 px-6 py-3 font-semibold transition-all w-full"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Listings
                  </Link>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/30 text-xs leading-relaxed">
                    Contact us via WhatsApp for immediate assistance. Our team
                    is available 24/7 to help you find your perfect home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
