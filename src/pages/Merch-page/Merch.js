import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Merch = () => {
  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection category={"merchandising"} />
        <ProductGrid category={"merchandising"} />
      </main>
    </>
  );
};

export default Merch;
