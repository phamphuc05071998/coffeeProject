import React from "react";
import Banner from "./Banner/Banner";

import Product from "./ProductSection/ProductSection";
import ParallaxSection from "../../Components/ParallaxSection/ParallaxSection";
import StorySection from "./StorySection/StorySection";
const index = () => {
  return (
    <>
      <Banner />
      <Product />
      <ParallaxSection/>
      <StorySection/>
    </>
  );
};

export default index;
