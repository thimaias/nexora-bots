import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Planes from "./components/Planes";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050609] selection:bg-cyber-blue/30 selection:text-white overflow-x-hidden antialiased">
      {/* 1. Startup loading experience */}
      <Loader onComplete={() => setLoading(false)} />

      {/* 2. Main content block display once loaded */}
      {!loading && (
        <div className="flex flex-col min-h-screen">
          {/* Persistent high-tech navigation utility rail */}
          <Navbar />

          <main className="flex-grow">
            {/* Hero module */}
            <Hero />

            {/* Pricing grids containing custom calculator */}
            <Planes />

            {/* Platform benefits and anti-raid parameters */}
            <Features />

            {/* Live operational dashboard simulator */}
            <DashboardPreview />

            {/* Developer group credentials */}
            <AboutUs />

            {/* Dual contact nodes containing automated whatsapp generator */}
            <ContactForm />
          </main>

          {/* Social connections and licensing */}
          <Footer />
        </div>
      )}
    </div>
  );
}
