import React from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";

const Street = () => {
  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection category={"salida"} />
        <ProductGrid category={"salida"} />
      </main>
    </>
  );
};

export default Street;
