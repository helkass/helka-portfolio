import React from "react";

const inputfields = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        className="bg-primary outline-none border-b w-1/2"
        name={name}
        value={value}
        required
        onChange={handleChange}
      />
    </>
  );
};

export default inputfields;
