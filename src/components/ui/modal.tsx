import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "./use-toast";
import { useState } from "react";
import { Textarea } from "./textarea";

export function DialogBookButton() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `
*New Booking Inquiry*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Interest: ${formData.property}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Adults: ${formData.adults}
Children: ${formData.children}

Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/+254716073759?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description:
        "Your inquiry is being sent via WhatsApp for faster response.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      checkIn: "",
      checkOut: "",
      adults: "",
      children: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Dialog>
      <form onSubmit={handleSubmit} className="">
        <DialogTrigger asChild>
          <Button variant="hero">Reserve Now</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Make Your Reservation Now</DialogTitle>
            <DialogDescription>
              Fill out the form below to book.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto pr-1 flex-1 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Interest
                </label>
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select a property</option>
                  <option value="Safari Lodge Villa">Safari Lodge Villa</option>
                  <option value="Coastal Retreat">Coastal Retreat</option>
                  <option value="Bush Camp Experience">
                    Bush Camp Experience
                  </option>
                  <option value="Other">Other / Multiple Properties</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Check-in Date
                </label>
                <Input
                  name="checkIn"
                  type="datetime-local"
                  value={formData.checkIn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Check-out Date
                </label>
                <Input
                  name="checkOut"
                  type="datetime-local"
                  value={formData.checkOut}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  No of Adults
                </label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select adults</option>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5 Adults</option>
                  <option value="6">6 Adults</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  No of Children(3-11YRS)
                </label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Select children</option>
                  <option value="0">No Child</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                  <option value="4">4 Children</option>
                  <option value="5">5 Children</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
              />
            </div>
          </div>

          <DialogFooter className="mt-4 shrink-0">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
