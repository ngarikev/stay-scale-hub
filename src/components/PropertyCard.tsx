import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Bed, Bath, Wifi, Car, Star } from "lucide-react";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
}

const PropertyCard = ({ 
  name, 
  location, 
  description, 
  image, 
  price, 
  guests, 
  bedrooms, 
  bathrooms, 
  amenities, 
  rating, 
  reviews,
  featured = false 
}: PropertyCardProps) => {
  const handleBookNow = () => {
    const message = `Hi! I'm interested in booking ${name} in ${location}. Could you please share availability and more details?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const amenityIcons: { [key: string]: any } = {
    'Wi-Fi': Wifi,
    'Parking': Car,
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-warm hover:scale-105 ${featured ? 'ring-2 ring-primary' : ''}`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-sunset text-white">Featured</Badge>
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-background/90 rounded-lg px-2 py-1">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="text-sm text-muted-foreground">per night</div>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{guests} guests</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms} bath</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <Badge key={amenity} variant="secondary" className="text-xs">
                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
                {amenity}
              </Badge>
            );
          })}
          {amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        <Button 
          onClick={handleBookNow}
          className="w-full" 
          variant="hero"
        >
          Book Now via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;