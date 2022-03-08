import React from "react";

const Input = ({ id, className, type, placeholder, label, textArea }) => {
  const selectedInput = textArea ? (
    <textarea id={id} placeholder={placeholder} className={className} />
  ) : (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
  return (
    <div className={textArea ? "form__control-textarea" : "form-control"}>
      <label htmlFor={id} className="form__label">
        {label}:
      </label>
      {selectedInput}
    </div>
  );
};

export default Input;
