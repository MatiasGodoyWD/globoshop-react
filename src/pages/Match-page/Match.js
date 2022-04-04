import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Match = () => {
  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection category={"juego"} />
        <ProductGrid category={"juego"} />
      </main>
    </>
  );
};

export default Match;
