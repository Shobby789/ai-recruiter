import React from "react";

const TextField = ({
  labelName,
  inputType,
  value,
  name,
  id,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor={id} className="text-sm font-semibold">
        {labelName}
      </label>
      <input
        type={inputType ? inputType : "text"}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border rounded-lg p-3 text-sm text-neutral-800 outline-none placeholder:text-gray-500"
      />
    </div>
  );
};

export default TextField;
