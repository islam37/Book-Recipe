import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Chefs from "./MyRecipes";
import Testimonials from "./Testimonials";
import Membership from "./Membership";

const Home = () => {
  return (
    <div className=" bg-base-200 px-4 sm:px-6 lg:px-8">
      <div className="p-3">
        <Hero></Hero>
      </div>

      <div>
        <Features></Features>
      </div>

      <div>
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <Chefs></Chefs>
      </div>
      
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
