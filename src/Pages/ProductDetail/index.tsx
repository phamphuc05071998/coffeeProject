import React from "react";
import Content from "./Content/Content";
import Parallax from "./Parallax/Parallax";
import BreakLine from "../../Components/UI/BreakLine/BreakLine";
import ProductList from "../../Components/ProductList/ProductList";
import CtaSection from "../../Components/CtaSection/CtaSection";
import Wrap from "../../Layouts/Wrap/Wrap";

const index = () => {
  return (
    <>
      <Content />
      <Parallax />
      <BreakLine>You might also like these</BreakLine>
      <Wrap>
        <ProductList />
        <div className="mb-100"></div>
      </Wrap>
      <CtaSection />
    </>
  );
};

export default index;
