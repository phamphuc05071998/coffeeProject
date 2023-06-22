import React from "react";
import Banner from "./Banner/Banner";

import Product from "./ProductSection/ProductSection";
import ParallaxSection from "../../Components/ParallaxSection/ParallaxSection";
import StorySection from "./StorySection/StorySection";
import CtaSection from "../../Components/CtaSection/CtaSection";
const image  = require("./../../assets/img/Section-Image-2.jpg")
const index = () => {
  return (
    <>
      <Banner />
      <Product />
      <ParallaxSection image={image}/>
      <StorySection/>
      <CtaSection/>
    </>
  );
};

export default index;
