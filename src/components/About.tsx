import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Globe, Users, Star, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We connect you with the true spirit of East Africa through carefully curated local experiences."
    },
    {
      icon: Award,
      title: "Luxury Standards",
      description: "Every property meets our high standards for comfort, cleanliness, and exceptional service."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Discover rich traditions, local cuisine, and vibrant communities with our expert guidance."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 support and thoroughly vetted accommodations."
    }
  ];

  const achievements = [
    { number: "300+", label: "Happy Guests" },
    { number: "4.9", label: "Average Rating" },
    { number: "15+", label: "Properties" },
    { number: "4", label: "Countries" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-sunset text-white mb-4">About Vacation Rentals</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Gateway to
            <span className="block text-primary">East African Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for showcasing the incredible beauty and hospitality of East Africa,
            we specialize in providing luxury accommodations that offer authentic cultural experiences
            while maintaining the highest standards of comfort and service.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sunset rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-safari rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => {
              // Start of conditional logic for the label
              let displayLabel = achievement.label; // Default to the original label

              // Check if the current achievement is 'Countries'
              if (achievement.label === "Countries") {
                const numericValue = parseInt(achievement.number.replace("+", ""), 10);

                // Apply conditional rendering for singular/plural
                displayLabel = numericValue > 1 ? "Countries" : "Country";
              }
              // End of conditional logic

              return (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">
                    {displayLabel} {/* Use the dynamically determined label */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vacation Rentals was born from our founder's deep love for East Africa and years of
                traveling across Tanzania, Kenya, Ethiopia, and Uganda. After countless unforgettable experiences,
                we realized the need for accommodations that truly capture the essence of this remarkable region.
              </p>
              <p>
                Today, we work closely with local communities and property owners to ensure that every
                stay not only exceeds your expectations but also contributes positively to the areas you visit.
                From luxury safari lodges to coastal retreats, each property is hand-selected for its unique
                character and commitment to sustainable tourism.
              </p>
              <p>
                Whether you're seeking adventure in the Serengeti, Maasai Mara, the Nile or relaxation to Kenyan's Coastal beaches or Zanzibar's pristine beaches,
                or cultural immersion in vibrant local communities, we are here to make your East African
                dreams a reality.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-golden/10 to-accent/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Award-Winning Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Recognized by TripAdvisor and Booking.com for exceptional hospitality and guest satisfaction.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-safari/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting local communities through employment opportunities and sustainable tourism practices.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-golden/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">
                    Welcoming guests from over 50 countries while maintaining authentic East African experiences.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
