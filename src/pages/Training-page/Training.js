import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Training = () => {
  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection category={"entrenamiento"} />
        <ProductGrid category={"entrenamiento"} />
      </main>
    </>
  );
};

export default Training;
