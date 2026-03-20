import Link from "next/link";
import type { Listing } from "@/data/listings";
import WhatsAppButton from "./WhatsAppButton";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="group bg-navy-900 border border-white/10 hover:border-ocean-500/50 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-ocean-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Available
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <WhatsAppButton
            phone={listing.whatsapp}
            message={`Hi! I'm interested in ${listing.title} at Marina Towers.`}
            variant="icon"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-heading text-xl font-semibold">
            {listing.title}
          </h3>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
          {listing.description}
        </p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-5 text-white/40 text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {listing.bedrooms} Bed
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {listing.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {listing.area} m²
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Floor {listing.floor}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-white/10">
          <div>
            <span className="text-ocean-400 font-heading text-2xl font-bold">
              ${listing.price.toLocaleString()}
            </span>
            <span className="text-white/40 text-sm">/{listing.period}</span>
          </div>
          <Link
            href={`/listings/${listing.id}`}
            className="bg-white/5 hover:bg-ocean-500 border border-white/20 hover:border-ocean-500 text-white hover:text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
