import React from "react";

const DropdownField = ({ labelName, name, value, id, onChange, options }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor={id} className="text-sm font-semibold">
        {labelName}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-3 text-sm text-neutral-800 outline-none"
      >
        {options?.map((opt, i) => {
          return (
            <option value={opt} key={i}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownField;
