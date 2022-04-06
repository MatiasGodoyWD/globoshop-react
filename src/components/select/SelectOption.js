import React from "react";

const SelectOption = ({ value, ...props }) => {
  return (
    <>
      <option value={value} disabled={props.disabled} selected={props.selected}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </option>
    </>
  );
};

export default SelectOption;
