import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Properties = () => {
  const properties = [
    {
      id: "1",
      name: "Safari Lodge Villa",
      location: "Serengeti, Tanzania",
      description: "Luxury villa with panoramic savanna views, perfect for wildlife enthusiasts. Features a private deck and infinity pool overlooking the endless plains.",
      image: property1,
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
      description: "Stunning beachfront property with direct ocean access. Wake up to the sound of waves and enjoy spectacular sunsets from your private terrace.",
      image: property2,
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
      description: "Authentic safari camp with luxury amenities. Experience the wild up close while enjoying modern comforts and traditional Maasai hospitality.",
      image: property3,
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

  return (
    <section id="properties" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked accommodations that offer authentic East African experiences 
            with world-class comfort and hospitality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We have more properties available.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/+254716073759?text=Hi! I\'d like to see more property options available.', '_blank')}
            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4"
          >
            View More Properties on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;