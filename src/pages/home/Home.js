import React from "react";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/forms/contact/ContactForm";
import Suscribe from "../../components/forms/Suscribe/Suscribe";
import LandingHeader from "../../components/headers/landing-header/LandingHeader";
import Hero from "../../components/hero/Hero.js";
import CategoriesSection from "../../components/sections/categories/CategoriesSection";
import FeaturedSections from "../../components/sections/featured/FeaturedSections";

const Home = () => {
  return (
    <>
      <LandingHeader />
      <Hero />
      <FeaturedSections />
      <CategoriesSection />
      <ContactForm />
      <Suscribe />
      <Footer />
    </>
  );
};

export default Home;
