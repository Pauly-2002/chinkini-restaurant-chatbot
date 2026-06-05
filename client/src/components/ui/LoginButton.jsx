import React from "react";

const LoginButton = (props) => {
  return (
    <div>
      <button className="h-11 w-90 bg-black rounded-2xl text-white hover:bg-gray-700 cursor-pointer">
        {props.name}
      </button>
    </div>
  );
};

export default LoginButton;
