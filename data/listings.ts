export interface Listing {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  period: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  floor: number;
  image: string;
  images: string[];
  amenities: string[];
  available: boolean;
  whatsapp: string;
}

export const listings: Listing[] = [
  {
    id: "1-bedroom-ocean-front",
    title: "1 Bedroom Ocean Front",
    description:
      "Chic one-bedroom retreat with direct ocean views, designer furniture, and resort-style amenities.",
    longDescription:
      "This designer one-bedroom apartment redefines compact luxury living with stunning ocean front views. Soaring ceilings create an airy, expansive feel, while floor-to-ceiling windows frame spectacular views of the Bay of Banderas. The unit comes fully furnished with curated designer pieces, a fully equipped kitchen, and a luxurious bathroom with rainfall shower. Residents enjoy premium amenities including a rooftop lounge, infinity pool, and co-working space.",
    price: 2800,
    currency: "USD",
    period: "month",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    floor: 15,
    image: "https://placehold.co/800x600/0B1426/06B6D4?text=1+Bed+Ocean+Front",
    images: [
      "https://placehold.co/800x600/0B1426/06B6D4?text=Living+Area",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Kitchen",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Bedroom",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Ocean+View",
    ],
    amenities: [
      "Ocean Front View",
      "Furnished",
      "Co-Working Space",
      "Rooftop Lounge",
      "Infinity Pool",
      "24/7 Security",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "2-bedroom-corner-apartment",
    title: "2 Bedroom Corner Apartment",
    description:
      "Bright corner unit with wraparound windows, panoramic views, and contemporary open-plan living.",
    longDescription:
      "Positioned on a coveted corner of Marina Towers, this stunning two-bedroom apartment captures breathtaking panoramic views through its wraparound floor-to-ceiling windows. The intelligent layout maximizes natural light throughout the day, illuminating the contemporary open-plan living and dining area. Two well-proportioned bedrooms each with en-suite bathrooms offer comfort and privacy, while the modern kitchen is equipped for culinary enthusiasts. A generous balcony wraps around two sides of the apartment, perfect for al fresco dining with spectacular views of the marina and ocean.",
    price: 3800,
    currency: "USD",
    period: "month",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    floor: 22,
    image: "https://placehold.co/800x600/0B1426/06B6D4?text=2+Bed+Corner+Apt",
    images: [
      "https://placehold.co/800x600/0B1426/06B6D4?text=Corner+Living+Room",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Corner+Kitchen",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Corner+Bedroom",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Wraparound+Balcony",
    ],
    amenities: [
      "Panoramic Views",
      "Corner Unit",
      "Wraparound Balcony",
      "Infinity Pool",
      "Gym",
      "Concierge",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "3-bedroom-ocean-front",
    title: "3 Bedroom Ocean Front",
    description:
      "Spacious three-bedroom ocean front apartment with premium finishes, home office, and stunning sea views.",
    longDescription:
      "Tailored for the discerning professional and families, this expansive three-bedroom ocean front residence combines sophisticated living with breathtaking sea views. The apartment features a private home office with built-in cabinetry, a grand living room overlooking the Pacific Ocean, a formal dining area, and a gourmet kitchen with top-of-the-line appliances. The master suite includes a walk-in closet and spa-like bathroom with ocean views. Two additional bedrooms offer flexibility for family or guests, each with stunning natural light.",
    price: 6500,
    currency: "USD",
    period: "month",
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    floor: 35,
    image: "https://placehold.co/800x600/0B1426/06B6D4?text=3+Bed+Ocean+Front",
    images: [
      "https://placehold.co/800x600/0B1426/06B6D4?text=Ocean+Living+Room",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Ocean+Kitchen",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Master+Suite",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Home+Office",
    ],
    amenities: [
      "Ocean Front View",
      "Home Office",
      "Walk-in Closet",
      "Valet Parking",
      "Business Center",
      "Spa",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "4-bedroom-apartment",
    title: "4 Bedroom Apartment",
    description:
      "Magnificent four-bedroom apartment with panoramic views, private terrace, and luxury finishes throughout.",
    longDescription:
      "Experience unparalleled luxury in this breathtaking four-bedroom apartment situated on the upper floors of Marina Towers. Floor-to-ceiling windows flood the space with natural light while offering panoramic views of the Bay of Banderas and the Sierra Madre mountains. The open-plan living area flows seamlessly onto a wraparound private terrace, perfect for entertaining. Italian marble floors, a chef's kitchen with premium appliances, and a spa-inspired master bathroom complete this extraordinary residence. Smart home technology and meticulous attention to detail define every corner.",
    price: 8500,
    currency: "USD",
    period: "month",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    floor: 42,
    image: "https://placehold.co/800x600/0B1426/06B6D4?text=4+Bed+Apartment",
    images: [
      "https://placehold.co/800x600/0B1426/06B6D4?text=Grand+Living+Room",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Chef+Kitchen",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Master+Bedroom",
      "https://placehold.co/800x600/0B1426/06B6D4?text=Private+Terrace",
    ],
    amenities: [
      "Private Terrace",
      "Smart Home System",
      "Panoramic Views",
      "Private Elevator",
      "Concierge Service",
      "Gym Access",
    ],
    available: true,
    whatsapp: "1234567890",
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}
