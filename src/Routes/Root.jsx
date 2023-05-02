import React from "react";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ChefSection from "../Components/ChefSection";
import Stats from "../Components/Stats";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <ChefSection></ChefSection>
      <Stats></Stats>
      <Footer></Footer>
    </div>
  );
};

export default Root;
