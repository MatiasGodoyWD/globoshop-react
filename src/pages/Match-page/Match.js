import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import MainWrapper from "../../components/sections/main-wrapper/MainWrapper";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Match = () => {
  return (
    <>
      <ProductsHeader />
      <MainWrapper>
        <FilterSection category={"juego"} />
        <ProductGrid category={"juego"} />
      </MainWrapper>
    </>
  );
};

export default Match;
