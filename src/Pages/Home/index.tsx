import React from "react";
import Banner from "./Banner/Banner";

import Product from "./ProductSection/ProductSection";
import ParallaxSection from "../../Components/ParallaxSection/ParallaxSection";
import StorySection from "./StorySection/StorySection";
import CtaSection from "../../Components/CtaSection/CtaSection";
const index = () => {
  return (
    <>
      <Banner />
      <Product />
      <ParallaxSection/>
      <StorySection/>
      <CtaSection/>
    </>
  );
};

export default index;
