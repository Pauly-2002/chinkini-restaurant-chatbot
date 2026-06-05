import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <label>{props.name}</label>
      <div className="flex items-center pl-3 gap-5 h-11 w-90 border bg-[#FCFDFE] border-[#E2E8F0] rounded-2xl">
        {props.icon}
        <input
          className={props.className}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
