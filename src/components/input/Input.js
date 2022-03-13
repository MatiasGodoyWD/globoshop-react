import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Input = React.forwardRef(
  (
    {
      id,
      className,
      type,
      placeholder,
      label,
      textArea,
      name,
      error,
      register,
      ...inputProps
    },
    ref
  ) => {
    const selectedInput = textArea ? (
      <textarea
        id={id}
        placeholder={placeholder}
        className={className}
        name={name}
        ref={ref}
        {...inputProps}
      />
    ) : (
      <input
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        name={name}
        {...inputProps}
      />
    );
    return (
      <div className={textArea ? "form__control-textarea" : "form-control"}>
        <label htmlFor={id} className="form__label">
          {label}:
        </label>
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
  }
);

export default Input;
