import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../../redux/products-reducer/products-action";
import {
  orderOptions,
  priceOptions,
  typeOptions,
} from "../../../data/filterOptions";
import Select from "../../select/Select";
import { toggleFilterHidden } from "../../../redux/menus-reducer/menu-actions";

const FilterSection = ({ category }) => {
  const dispatch = useDispatch();

  let productsReducer = useSelector((state) => state.products);
  let clicked = useSelector((state) => state.menu.activeFilterBar);

  const handleFilter = (e) => {
    productsReducer.filterValues[e.target.name] = e.target.value;
    dispatch(productsActions.filterProducts(category));
    dispatch(toggleFilterHidden());
  };

  return (
    <>
      <section className="filter__section" data-aos="fade-right">
        <div
          className={`filter__tab ${clicked ? "filter__tab-active" : ""}`}
          onClick={() => dispatch(toggleFilterHidden())}
        >
          <FontAwesomeIcon icon={faFilter} />
          Preferencias
        </div>
        <div
          className={`filter__options ${
            clicked ? "filter__options-active" : ""
          }`}
        >
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
