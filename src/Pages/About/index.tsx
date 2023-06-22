import React from "react";
import Heading from "./Heading/Heading";
import Wrap from "../../Layouts/Wrap/Wrap";
import Content from "./Content/Content";
import ParallaxSection from "../../Components/ParallaxSection/ParallaxSection";
import BreakLine from "../../Components/UI/BreakLine/BreakLine";
import TimeLine from "./TimeLine/TimeLine";
import CtaSection from "../../Components/CtaSection/CtaSection";
const image = require("./../../assets/img/brooke-image.jpg");
const index = () => {
  return (
    <>
      <Heading />
      <Wrap>
        <Content />
      </Wrap>
      <div className="mb-100">
        <ParallaxSection image={image} />
      </div>
      <BreakLine>HISTORY TIMELINE</BreakLine>
      <Wrap>
        <TimeLine />
      </Wrap>
      <CtaSection />
    </>
  );
};

export default index;
