"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Submission Received
          </h2>
          <p className="text-white/50 mb-8">
            Thank you for submitting your property. Our team will review your
            listing and get back to you within 24-48 hours.
          </p>
          <a
            href="/"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 font-semibold uppercase tracking-wide transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-black py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Property Owners
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            List Your Property
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Submit your Marina Towers apartment for listing on our premium
            rental marketplace. Reach qualified tenants looking for luxury
            living.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Owner Info */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-6 pb-3 border-b border-white/10">
                Owner Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-6 pb-3 border-b border-white/10">
                Property Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-white/60 text-sm mb-2">
                    Property Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="e.g. Luxury Penthouse with Marina View"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Bedrooms *
                  </label>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="" className="bg-neutral-900">Select</option>
                    <option value="studio" className="bg-neutral-900">Studio</option>
                    <option value="1" className="bg-neutral-900">1 Bedroom</option>
                    <option value="2" className="bg-neutral-900">2 Bedrooms</option>
                    <option value="3" className="bg-neutral-900">3 Bedrooms</option>
                    <option value="4" className="bg-neutral-900">4+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Bathrooms *
                  </label>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="" className="bg-neutral-900">Select</option>
                    <option value="1" className="bg-neutral-900">1 Bathroom</option>
                    <option value="2" className="bg-neutral-900">2 Bathrooms</option>
                    <option value="3" className="bg-neutral-900">3 Bathrooms</option>
                    <option value="4" className="bg-neutral-900">4+ Bathrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Area (m²) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="e.g. 150"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Floor *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="e.g. 25"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Monthly Rent (USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="e.g. 5000"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Available From *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-white/60 text-sm mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Describe your property, its features, views, and what makes it special..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-white/60 text-sm mb-2">
                    Amenities
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="e.g. Pool, Gym, Parking, Concierge (comma separated)"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-white/10">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black px-12 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
              >
                Submit Listing
              </button>
              <p className="text-white/30 text-xs mt-4">
                By submitting, you agree to our terms of service. Our team will
                review your listing before it goes live.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
