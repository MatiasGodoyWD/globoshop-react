import React from "react";

const SelectOption = ({ value }) => {
  return (
    <>
      <option value={value}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </option>
    </>
  );
};

export default SelectOption;
