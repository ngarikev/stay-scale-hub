import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Properties", href: "#properties" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Book Now", href: "#contact" },
  ];

  const destinations = [
    "Serengeti, Tanzania",
    "Zanzibar, Tanzania", 
    "Maasai Mara, Kenya",
    "Amboseli, Kenya",
    "Bwindi, Uganda",
    "Queen Elizabeth, Uganda"
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-8 w-8 text-golden" />
              <span className="text-2xl font-bold">Safari Stays</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience the heart of East Africa with our carefully curated luxury accommodations. 
              From safari lodges to coastal retreats, we offer authentic experiences with world-class comfort.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-golden">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-golden">Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <span className="text-white/80 text-sm">{destination}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-golden">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-golden mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Phone</p>
                  <button 
                    onClick={() => window.open('tel:+1234567890', '_self')}
                    className="text-white hover:text-golden transition-colors"
                  >
                    +1 (234) 567-890
                  </button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-golden mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">WhatsApp</p>
                  <button 
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    className="text-white hover:text-golden transition-colors"
                  >
                    Quick Response
                  </button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-golden mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Email</p>
                  <button 
                    onClick={() => window.open('mailto:hello@safaristays.com', '_self')}
                    className="text-white hover:text-golden transition-colors"
                  >
                    hello@safaristays.com
                  </button>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-golden mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Based in</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Safari Stays. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;