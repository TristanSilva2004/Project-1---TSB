import { listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";

export const metadata = {
  title: "Browse Listings | Marina Towers Rentals",
  description: "Explore luxury rental apartments available at Marina Towers.",
};

export default function ListingsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-black py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Our Collection
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Available Residences
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Browse our curated selection of luxury apartments. Each residence
            offers a unique blend of comfort, style, and sophistication.
          </p>
        </div>
      </section>

      {/* Listings grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <p className="text-white/40 text-sm">
              Showing <span className="text-white">{listings.length}</span>{" "}
              available residences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
