import React, { useState } from "react";
import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";
import { useSelector } from "react-redux";
import "./products.css";

const Products = () => {
  let activeProducts = useSelector((state) => state.products.products);

  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection />
        <ProductGrid products={activeProducts} />
      </main>
    </>
  );
};

export default Products;
