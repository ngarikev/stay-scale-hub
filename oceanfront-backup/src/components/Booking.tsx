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
import axios from "axios";
// import { useToast } from "use-toast";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:5000/api"

export function Booking() {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    phone: "",
    passportNo: "",
    propertyId: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
  });

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async() =>{
      try {
        const res = await axios.get(`${baseURL}/properties`)
        setProperties(res.data)
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }
    fetchProperties();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      alert("Check-out must be after check-in date");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        property_id: Number(formData.propertyId),
        phone: formData.phone,
        passport_no: formData.passportNo,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        adults: Number(formData.adults),
        children: Number(formData.children),
        status: "pending",
      };
      console.log("Submitting booking payload:", payload);
      
    const res = await axios.post(`${baseURL}/bookings`, payload)

     alert("Booking successfully submitted!");

     // Reset form after success
    setFormData({
      passportNo: "",
      phone: "",
      propertyId: "",
      checkIn: "",
      checkOut: "",
      adults: "",
      children: "",
    });
    } catch (error: any) {
      console.error("Booking submission failed:", error);
      alert(
        error.response?.data?.message ||
          "An error occurred while submitting the booking."
      );
    } finally {
      setLoading(false);
    }
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
                  id-card no/passport no *
                </label>
                <Input
                  name="passportNo"
                  type="text"
                  value={formData.passportNo}
                  onChange={handleChange}
                  required
                  placeholder="Enter your id/passport number"
                />
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
                  <option value="">Select</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
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
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-1">

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Interest
                </label>
                <select
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                <option value="">Select a property</option>
                {properties.map((prop: any) => (
                  <option key={prop.property_id} value={prop.property_id}>
                    {prop.name}
                  </option>
                ))}
                </select>
              </div>
            </div>

          </div>

          <DialogFooter className="mt-4 shrink-0">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
