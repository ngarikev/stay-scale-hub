import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageGridCarousel from "@/components/ImageGridCarousel";
import { DialogBookButton } from "@/components/ui/modal";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/api"; // ✅ your backend URL

interface Property {
  property_id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  rating?: number;
  amenities: string[];
  images: string[];
}

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  const iconMap: Record<string, any> = {
    WiFi: Wifi,
    Parking: Car,
    default: Star,
  };

useEffect(() => {
  const fetchProperty = async () => {
    try {
      const res = await axios.get<Property>(`${baseURL}/properties/${id}`);
      setProperty(res.data);
    } catch (err) {
      console.error("Failed to fetch property", err )
    } finally {
      setLoading(false)
    }
  }
  fetchProperty();
}, [id])

    if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading property...</p>
      </div>
    );
  }


  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")}>Back to Properties</Button>
        </div>
      </div>
    );
  }


  return (
   <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
              <span className="font-medium">{property.rating ?? "New"}</span>
            </div>
            <DialogBookButton />
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="lg:col-span-1">
            <img
              src={property.images[0]}
              alt={property.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images[1] && (
              <img
                src={property.images[1]}
                alt={`${property.name} view 2`}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            <ImageGridCarousel images={property.images} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-luxury-navy mb-2">
                {property.name}
              </h1>
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-5 h-5" />
                  <span>{property.guests} guests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="w-5 h-5" />
                  <span>{property.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-5 h-5" />
                  <span>{property.bathrooms} bathrooms</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-foreground mb-8">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-display font-semibold mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((amenity) => {
                  const Icon = iconMap[amenity] || iconMap.default;
                  return (
                    <Badge key={amenity} variant="secondary" className="flex gap-2 px-4 py-2">
                      <Icon className="w-4 h-4" />
                      {amenity}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="card-elegant p-6 sticky top-32">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold gradient-text">
                    {property.price}
                  </span>
                  <span className="text-muted-foreground">per night</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  <span className="font-medium">{property.rating ?? "New"}</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full" variant="hero" size="lg">
                  Check Availability
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Contact Host
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                You won't be charged yet
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
