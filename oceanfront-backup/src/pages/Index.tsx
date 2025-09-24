import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen">
      <Navbar onSearch={setSearchTerm} />
      {/* <Properties searchTerm={searchTerm} /> */}
      <div id="home">
        <Hero />
      </div>
      <Properties searchTerm={searchTerm}/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
