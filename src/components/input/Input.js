import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useController } from "react-hook-form";

const Input = ({
  id,
  className,
  labelClass,
  type,
  placeholder,
  label,
  textArea,
  error,
  control,
  name,
  rules,
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  const selectedInput = textArea ? (
    <textarea
      {...field}
      id={id}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  ) : (
    <input
      {...field}
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );

  return (
    <div className={textArea ? "form__control-textarea" : "form-control"}>
      {label && (
        <label htmlFor={id} className={`form__label ${labelClass}`}>
          {label}:
        </label>
      )}
      {selectedInput}
      {error ? (
        <span className="form__error">
          <FontAwesomeIcon icon={faTimes} />
          {error.message}
        </span>
      ) : (
        <span className="form__error"></span>
      )}
    </div>
  );
};

export default Input;
