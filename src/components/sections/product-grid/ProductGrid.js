import ProductCard from "../../cards/ProductCard";

const ProductGrid = ({ products, category }) => {
  return (
    <>
      <section className="product-grid__section" data-aos="fade-right">
        {!products.length ? (
          <p className="empty__grid">
            No existen productos que cumplan con los criterios seleccionados.
            Por favor, modifique sus criterios de selección.
          </p>
        ) : (
          products.map((prod) => <ProductCard product={prod} />)
        )}
      </section>
    </>
  );
};

export default ProductGrid;
