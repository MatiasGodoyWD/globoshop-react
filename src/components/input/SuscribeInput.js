import React from "react";
import { useController } from "react-hook-form";

const SuscribeInput = ({
  control,
  name,
  className,
  placeholder,
  type,
  rules,
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      name={name}
      className={className}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default SuscribeInput;
