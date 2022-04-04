import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../../redux/products-reducer/products-action";
import {
  orderOptions,
  priceOptions,
  typeOptions,
} from "../../../data/filterOptions";
import Select from "../../select/Select";

const FilterSection = ({ category }) => {
  const dispatch = useDispatch();
  const [showFilterBar, setShowFilterBar] = useState(false);
  let productsReducer = useSelector((state) => state.products);

  const handleFilterBar = () => {
    setShowFilterBar(!showFilterBar);
  };

  const handleFilter = (e) => {
    productsReducer.filterValues[e.target.name] = e.target.value;

    dispatch(productsActions.filterProducts(category));
  };

  return (
    <>
      <section className="filter__section">
        <div className="filter__tab">
          <FontAwesomeIcon icon={faFilter} onClick={handleFilterBar} />
          Preferencias
        </div>
        <div className="filter__options">
          <Select
            name="sort"
            title="Ordenar Por"
            id="order__select"
            options={orderOptions}
            changeHandler={handleFilter}
          />
          <Select
            name="element"
            title="Filtrar por Prenda"
            id="element__select"
            options={typeOptions(productsReducer.products, category)}
            changeHandler={handleFilter}
          />
          <Select
            name="price"
            title="Filtrar por Precio"
            id="price__select"
            options={priceOptions}
            changeHandler={handleFilter}
          />
        </div>
      </section>
    </>
  );
};

export default FilterSection;
