import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Safari Stays</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('tel:+254716073759', '_self')}
              className="flex items-center space-x-1"
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </Button>
            <Button 
              variant="golden" 
              size="sm"
              onClick={() => window.open('https://wa.me/+254716073759', '_blank')}
              className="flex items-center space-x-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-border space-y-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('tel:+254716073759', '_self')}
                className="flex items-center space-x-2 w-full justify-start"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </Button>
              <Button 
                variant="golden" 
                size="sm"
                onClick={() => window.open('https://wa.me/+254716073759', '_blank')}
                className="flex items-center space-x-2 w-full justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;