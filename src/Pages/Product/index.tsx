import React from "react";
import Product from "./Product/Product";
import CtaSection from "../../Components/CtaSection/CtaSection";

const index = () => {
  return (
    <>
      <Product />
      <div className="mb-100">&nbsp;</div>
      <CtaSection />
    </>
  );
};

export default index;
