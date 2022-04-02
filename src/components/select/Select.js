import React from "react";
import SelectOption from "./SelectOption";

const Select = ({
  name,
  title,
  id,
  options,
  placeholder,
  className = "form-control-select",
  changeHandler,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="select__label">
        {title}:
      </label>
      <select
        defaultValue={"Select a value"}
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
