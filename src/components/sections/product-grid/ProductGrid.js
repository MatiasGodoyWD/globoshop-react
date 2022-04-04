import { useSelector } from "react-redux";
import { selectedProducts } from "../../../redux/products-reducer/products-utils";

import ProductCard from "../../cards/ProductCard";

const ProductGrid = ({ category }) => {
  let activeProducts = selectedProducts(
    useSelector((state) => state.products.shownProducts),
    category
  );

  return (
    <>
      <section
        className="product-grid__section"
        data-aos="fade-right"
        onChange={onchange}
      >
        {!activeProducts.length ? (
          <p className="empty__grid">
            No existen productos que cumplan con los criterios seleccionados.
            Por favor, modifique sus criterios de selección.
          </p>
        ) : (
          activeProducts.map((prod, index) => (
            <ProductCard key={index + prod.name} product={prod} />
          ))
        )}
      </section>
    </>
  );
};

export default ProductGrid;
