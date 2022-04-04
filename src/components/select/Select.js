import React from "react";
import SelectOption from "./SelectOption";

const Select = ({
  name,
  title,
  id,
  options,
  className = "form-control-select",
  changeHandler,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="select__label">
        {title}:
      </label>
      <select
        name={name}
        id={id}
        className="select__input"
        onChange={changeHandler}
      >
        {options.map((op, i) => (
          <SelectOption key={i + "select"} value={op} />
        ))}
      </select>
    </div>
  );
};

export default Select;
