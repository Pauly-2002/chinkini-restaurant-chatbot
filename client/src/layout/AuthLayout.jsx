import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#F5F8FA]">
      <div className=" bg-white h-fit m-10 w-110 rounded-xl shadow-gray-400 shadow-2xl border-t-4 border-[#CED8E3] flex flex-col gap-5 items-center justify-center py-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
