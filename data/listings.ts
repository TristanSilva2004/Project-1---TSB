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
    id: "penthouse-sky-lounge",
    title: "Penthouse Sky Lounge",
    description:
      "Stunning penthouse with panoramic city views, private terrace, and luxury finishes throughout.",
    longDescription:
      "Experience unparalleled luxury in this breathtaking penthouse situated on the top floor of Marina Towers. Floor-to-ceiling windows flood the space with natural light while offering 360-degree panoramic views of the city skyline and waterfront. The open-plan living area flows seamlessly onto a wraparound private terrace, perfect for entertaining. Italian marble floors, a chef's kitchen with premium appliances, and a spa-inspired master bathroom complete this extraordinary residence.",
    price: 8500,
    currency: "USD",
    period: "month",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    floor: 42,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=Penthouse+Sky+Lounge",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Penthouse+Living+Room",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Penthouse+Kitchen",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Penthouse+Bedroom",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Penthouse+Terrace",
    ],
    amenities: [
      "Private Terrace",
      "Smart Home System",
      "Wine Cellar",
      "Private Elevator",
      "Concierge Service",
      "Gym Access",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "marina-view-suite",
    title: "Marina View Suite",
    description:
      "Elegant 2-bedroom suite with direct marina views, modern interiors, and resort-style amenities.",
    longDescription:
      "Wake up to stunning marina views every morning in this beautifully appointed two-bedroom suite. Designed with a contemporary aesthetic, the apartment features an open-concept living and dining area, a fully equipped modern kitchen, and two generously sized bedrooms each with en-suite bathrooms. The balcony overlooks the marina, providing a serene escape from city life. Residents enjoy access to a rooftop infinity pool, fitness center, and 24-hour concierge.",
    price: 4200,
    currency: "USD",
    period: "month",
    bedrooms: 2,
    bathrooms: 2,
    area: 145,
    floor: 28,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=Marina+View+Suite",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Marina+Living+Area",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Marina+Kitchen",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Marina+Bedroom",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Marina+Balcony",
    ],
    amenities: [
      "Marina View",
      "Infinity Pool",
      "Fitness Center",
      "Balcony",
      "Concierge",
      "Parking",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "golden-studio-loft",
    title: "Golden Studio Loft",
    description:
      "Chic studio loft with double-height ceilings, designer furniture, and city skyline views.",
    longDescription:
      "This designer studio loft redefines compact luxury living. Soaring double-height ceilings create an airy, expansive feel, while the mezzanine sleeping area maximizes the use of space. The unit comes fully furnished with curated designer pieces, a fully equipped kitchenette, and a luxurious bathroom with rainfall shower. Floor-to-ceiling windows frame spectacular city views, and the building offers premium amenities including a rooftop lounge, pool, and co-working space.",
    price: 2800,
    currency: "USD",
    period: "month",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    floor: 15,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=Golden+Studio+Loft",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Studio+Main+Area",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Studio+Kitchen",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Studio+Mezzanine",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Studio+Bathroom",
    ],
    amenities: [
      "City View",
      "Furnished",
      "Co-Working Space",
      "Rooftop Lounge",
      "Pool",
      "Security",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "executive-residence",
    title: "Executive Residence",
    description:
      "Spacious 3-bedroom executive apartment with home office, premium finishes, and harbor views.",
    longDescription:
      "Tailored for the discerning professional, this expansive three-bedroom executive residence combines sophisticated living with dedicated workspace. The apartment features a private home office with built-in cabinetry, a grand living room with harbor views, a formal dining area, and a gourmet kitchen with top-of-the-line appliances. The master suite includes a walk-in closet and spa-like bathroom. Two additional bedrooms offer flexibility for family or guests.",
    price: 6500,
    currency: "USD",
    period: "month",
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    floor: 35,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=Executive+Residence",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Executive+Living+Room",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Executive+Office",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Executive+Kitchen",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Executive+Master+Suite",
    ],
    amenities: [
      "Harbor View",
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
    id: "the-grand-duplex",
    title: "The Grand Duplex",
    description:
      "Magnificent duplex apartment with spiral staircase, private garden, and luxury throughout.",
    longDescription:
      "A true masterpiece of residential design, The Grand Duplex spans two floors connected by an elegant spiral staircase. The lower level features an expansive open-plan living area, dining room, and a state-of-the-art kitchen, all opening onto a private landscaped garden terrace. Upstairs, four generous bedrooms each have their own bathroom, with the master suite offering a private balcony and dressing room. Smart home technology, premium materials, and meticulous attention to detail define every corner.",
    price: 12000,
    currency: "USD",
    period: "month",
    bedrooms: 4,
    bathrooms: 4,
    area: 400,
    floor: 38,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=The+Grand+Duplex",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Duplex+Living+Area",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Duplex+Garden",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Duplex+Staircase",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Duplex+Master+Suite",
    ],
    amenities: [
      "Private Garden",
      "Spiral Staircase",
      "Smart Home",
      "Private Parking",
      "Pool",
      "24/7 Security",
    ],
    available: true,
    whatsapp: "1234567890",
  },
  {
    id: "sunset-corner-apartment",
    title: "Sunset Corner Apartment",
    description:
      "Bright corner unit with wraparound windows, sunset views, and contemporary open-plan living.",
    longDescription:
      "Positioned on a coveted corner of Marina Towers, this stunning apartment captures golden sunset views through its wraparound floor-to-ceiling windows. The intelligent layout maximizes natural light throughout the day, illuminating the contemporary open-plan living and dining area. Two well-proportioned bedrooms offer comfort and privacy, while the modern kitchen is equipped for culinary enthusiasts. A generous balcony wraps around two sides of the apartment, perfect for al fresco dining with spectacular views.",
    price: 3800,
    currency: "USD",
    period: "month",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    floor: 22,
    image: "https://placehold.co/800x600/1a1a1a/d4a017?text=Sunset+Corner+Apt",
    images: [
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Sunset+Living+Room",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Sunset+Kitchen",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Sunset+Bedroom",
      "https://placehold.co/800x600/1a1a1a/d4a017?text=Sunset+Balcony+View",
    ],
    amenities: [
      "Sunset Views",
      "Corner Unit",
      "Wraparound Balcony",
      "Pool",
      "Gym",
      "Doorman",
    ],
    available: true,
    whatsapp: "1234567890",
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}
