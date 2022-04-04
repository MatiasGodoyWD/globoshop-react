export const selectedProducts = (prods, category) =>
  !category ? prods : prods.filter((p) => p.category === category);

export const orderProducts = (value, prods) => {
  if (value === "Mayor precio") {
    return prods.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  if (value === "Menor precio") {
    return prods.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (value === "Nombre") {
    return prods.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (value === "Predeterminado") {
    return prods.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
};

export const filterByElement = (value, prods) => {
  if (value === "Todas") {
    return prods;
  }
  return prods.filter((p) => p.type === value);
};

export const filterByPrice = (value, prods) => {
  if (value === "Todo") {
    return prods;
  }
  if (value === "Entre $5000 y $10000") {
    return prods.filter((prod) => prod.price >= 5000 && prod.price <= 10000);
  }
  if (value === "Mas de $10.000") {
    return prods.filter((prod) => prod.price > 10000);
  }
  if (value === "Menos de $5000") {
    return prods.filter((prod) => prod.price < 5000);
  }
};

export const filterProducts = (values, prods, category) => {
  let products = [...prods];
  if (category) {
    console.log(values);
    products = products.filter((p) => p.category === category);
  }
  orderProducts(values.sort, products);
  products = filterByPrice(values.price, products);
  products = filterByElement(values.element, products);
  return products;
};
