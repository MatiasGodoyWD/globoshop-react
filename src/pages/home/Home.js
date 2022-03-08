import React from "react";
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
    </>
  );
};

export default Home;
