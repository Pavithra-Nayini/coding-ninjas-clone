import React, { useState, useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import OfferingsSection from "./sections/OfferingsSection";
import WhyUsSection from "./sections/WhyUsSection";
import HiringPartnersSection from "./sections/HiringPartnersSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

export default function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Create refs for each section you want to scroll to
  const sectionRefs = {
    "Job Bootcamp": useRef(null),
    "IIT Certifications": useRef(null),
    "New Launches": useRef(null),
  };

  const handleNavClick = (sectionName) => {
    sectionRefs[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleLoginOpen = () => setLoginModalOpen(true);
  const handleLoginClose = () => setLoginModalOpen(false);

  return (
    <div
      className={`font-sans antialiased bg-[#17212C] ${
        isLoginModalOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header onNavClick={handleNavClick} onLoginClick={handleLoginOpen} />
      <main>
        <HeroSection />
        <OfferingsSection sectionRefs={sectionRefs} />
        <WhyUsSection />
        <HiringPartnersSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginClose} />
    </div>
  );
}
