import ProductsHeader from "../../components/headers/products-header/ProductsHeader";
import FilterSection from "../../components/sections/filterSection/FilterSection";
import ProductGrid from "../../components/sections/product-grid/ProductGrid";
import "./products.css";

const Products = () => {
  return (
    <>
      <ProductsHeader />
      <main>
        <FilterSection />
        <ProductGrid />
      </main>
    </>
  );
};

export default Products;
