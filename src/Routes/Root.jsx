import React from "react";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ChefSection from "../Components/ChefSection";
import Stats from "../Components/Stats";
import About from "../Components/About";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <ChefSection></ChefSection>
      <About></About>
      <Stats></Stats>
      <Footer></Footer>
    </div>
  );
};

export default Root;
