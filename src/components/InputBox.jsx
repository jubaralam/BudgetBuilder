import React from "react";

const InputBox = ({
  title = "title",
  id = null,
  type = "text",
  placeholder = `Enter Your ${title}`,
  value = null,
  onChangeFunction = null,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block mb-1">
        {title}
      </label>
      <input
        id={id}
        type={type}
        className="w-full px-3 py-2 rounded bg-[#0B192C] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
        value={value}
        onChange={
          onChangeFunction ? (e) => onChangeFunction(e.target.value) : undefined
        }
        required={required}
      />
    </div>
  );
};

export default InputBox;
