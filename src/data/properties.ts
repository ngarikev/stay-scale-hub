import property1 from "@/assets/3br-property1.webp";
import property2 from "@/assets/3br-property2.webp";
import property3 from "@/assets/3br-property3.webp";
import property4 from "@/assets/3br-property4.webp";
import property5 from "@/assets/3br-property5.webp";
import property6 from "@/assets/3br-property6.webp";
import property7 from "@/assets/3br-property7.webp";
import property8 from "@/assets/3br-property8.webp";
import property9 from "@/assets/3br-property9.webp";
import property10 from "@/assets/3br-property10.webp";
import property11 from "@/assets/3br-property11.webp";
import property12 from "@/assets/3br-property12.webp";
import property13 from "@/assets/3br-property13.webp";
import property14 from "@/assets/3br-property14.webp";
import property15 from "@/assets/3br-property15.webp";

export const properties = [
  {
    id: "1",
    name: "3br apartment",
    location: "Nyali, Mombasa",
    description: "Luxury apartment with panoramic ocean views...",
    images: [property1, property2, property4, property5, property6, property7, property8, property9, property10, property11, property12, property13, property14, property15], // Add more images here
    price: "$150",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Pool", "AC", "Parking", "Gym", "Laundry"],
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
    price: "$110",
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
