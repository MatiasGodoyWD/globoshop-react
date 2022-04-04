export const orderOptions = [
  "Predeterminado",
  "Mayor precio",
  "Menor precio",
  "Nombre",
];
export const priceOptions = [
  "Todo",
  "Mas de $10.000",
  "Entre $5000 y $10000",
  "Menos de $5000",
];

export const typeOptions = (activeProducts, category = null) => {
  const typeList = [];
  typeList.push("Todas");
  if (category) {
    const prods = activeProducts.filter((p) => p.category === category);
    prods.forEach((prod) =>
      !typeList.includes(prod.type) ? typeList.push(prod.type) : ""
    );
  } else {
    activeProducts.forEach((prod) =>
      !typeList.includes(prod.type) ? typeList.push(prod.type) : ""
    );
  }

  return typeList;
};

export const sizeOptions = ["2XS", "XS", "S", "M", "L", "XL", "2XL"];
