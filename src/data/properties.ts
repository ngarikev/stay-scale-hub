import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const properties = [
  {
    id: "1",
    name: "Safari Lodge Villa",
    location: "Serengeti, Tanzania",
    description: "Luxury villa with panoramic savanna views...",
    images: [property1, property2, property3], // Add more images here
    price: "$450",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Pool", "Game Drives", "Parking", "Kitchen", "Laundry"],
    rating: 4.9,
    reviews: 127,
    featured: true
  },
  {
    id: "2",
    name: "Coastal Retreat",
    location: "Zanzibar, Tanzania",
    description: "Stunning beachfront property...",
    images: [property2, property1, property3],
    price: "$320",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Beach Access", "Snorkeling", "Parking", "AC", "Kitchen"],
    rating: 4.8,
    reviews: 89,
    featured: false
  },
  {
    id: "3",
    name: "Bush Camp Experience",
    location: "Maasai Mara, Kenya",
    description: "Authentic safari camp with luxury amenities...",
    images: [property3, property1, property2],
    price: "$380",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Safari Tours", "Meals Included", "Parking", "Guide Services"],
    rating: 4.9,
    reviews: 156,
    featured: false
  }
];
