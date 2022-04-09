import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import MainWrapper from "../../components/sections/main-wrapper/MainWrapper";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Merch = () => {
  return (
    <>
      <ProductsHeader />
      <MainWrapper>
        <FilterSection category={"merchandising"} />
        <ProductGrid category={"merchandising"} />
      </MainWrapper>
    </>
  );
};

export default Merch;
