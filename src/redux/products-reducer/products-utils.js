export const selectedProducts = (prods, category) =>
  !category ? prods : prods.filter((p) => p.category === category);

export const orderProducts = (value, prods) => {
  if (value.value === "Mayor precio") {
    return prods.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  if (value.value === "Menor precio") {
    return prods.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (value.value === "Nombre") {
    return prods.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (value.value === "Predeterminado") {
    return prods.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
};
