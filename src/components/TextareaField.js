import React from "react";

const TextareaField = (props) => {
  const { name, label, handleChange } = props;
  return (
    <>
      <label>{label}</label>
      <textarea
        type="text"
        placeholder="your desc project"
        className="bg-primary outline-none border-b h-1/2 w-10/12"
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default TextareaField;
