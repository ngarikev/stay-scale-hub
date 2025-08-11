import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";


const Properties = () => {
  

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
            <PropertyCard image={[property.images[0]]} key={property.id}
            {...property}            />
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