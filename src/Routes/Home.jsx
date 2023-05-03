import React from "react";
import Banner from "../Components/Banner";
import ChefSection from "../Components/ChefSection";
import Stats from "../Components/Stats";
import About from "../Components/About";
const Home = () => {
  return (
    <div className="bg-dark">
      <Banner></Banner>
      <ChefSection></ChefSection>
      <About></About>
      <Stats></Stats>
    </div>
  );
};

export default Home;
