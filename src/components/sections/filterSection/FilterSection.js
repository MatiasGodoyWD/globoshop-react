import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { orderOptions } from "../../../data/filterOptions";
import Select from "../../select/Select";

const FilterSection = ({ changeHandler }) => {
  const [showFilterBar, setShowFilterBar] = useState(false);

  const handleFilterBar = () => {
    setShowFilterBar(!showFilterBar);
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
            name="order"
            title="Ordenar Por"
            id="order__select"
            options={orderOptions}
            placeholder="Todos"
            changeHandler={changeHandler}
          />
        </div>
      </section>
    </>
  );
};

export default FilterSection;
