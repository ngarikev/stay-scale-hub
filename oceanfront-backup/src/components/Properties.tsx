import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import axios from "axios";

const baseURL = "http://localhost:5000/api"; // ✅ your backend URL

interface Property {
  property_id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  price: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  rating?: number;
  reviews?: number;
  featured?: boolean;
}

const Properties = ({ searchTerm }: { searchTerm: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState<Property[]>([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${baseURL}/properties`);
        setProperties(res.data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Filter properties
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.price.toString().includes(searchTerm.toString())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <section id="properties" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked accommodations that offer authentic East African
            experiences with world-class comfort and hospitality
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <PropertyCard
                key={property.property_id}
                {...property}
                image={property.images || ["/placeholder.jpg"]}
                rating={property.rating || 4.8}
                reviews={property.reviews || 12}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No properties match your search.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                variant={currentPage === i + 1 ? "default" : "outline"}
                className="w-10 h-10"
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
