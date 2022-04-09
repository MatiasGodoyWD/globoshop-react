import ProductsHeader from "../../components/headers/products-header/ProductsHeader";

import FilterSection from "../../components/sections/filterSection/FilterSection";
import MainWrapper from "../../components/sections/main-wrapper/MainWrapper";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";
import "./products.css";

const Products = () => {
  return (
    <>
      <ProductsHeader />
      <MainWrapper>
        <FilterSection />
        <ProductGrid />
      </MainWrapper>
    </>
  );
};

export default Products;
