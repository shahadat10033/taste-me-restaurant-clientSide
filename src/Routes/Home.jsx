import React from "react";
import Banner from "../Components/Banner";
import ChefSection from "../Components/ChefSection";
import Stats from "../Components/Stats";
import Story from "../Components/Story";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <Story></Story>
      <Stats></Stats>
    </div>
  );
};

export default Home;
