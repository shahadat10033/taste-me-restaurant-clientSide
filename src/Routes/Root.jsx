import React from "react";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import ChefSection from "../Components/ChefSection";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <ChefSection></ChefSection>
      <Footer></Footer>
    </div>
  );
};

export default Root;
