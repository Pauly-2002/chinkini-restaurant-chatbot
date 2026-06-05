import React from "react";
import Input from "../ui/Input";
import AuthLayout from "../../layout/AuthLayout";
import LoginButton from "../ui/LoginButton";
import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="flex w-90 justify-start items-center">
        <div className="flex gap-3 items-center cursor-pointer hover:font-bold">
          <FaArrowLeft className="text-[#334155] hover:text-gray-900 w-3 h-3 opacity-60" />
          <p className="text-[#334155] text-[14px] hover:text-gray-900  opacity-60">
            Back to sign in
          </p>
        </div>
      </div>
      <h1 className="heading-secondary">Create your account</h1>
      <Input
        type="text"
        name="Email"
        placeholder="you@example.com"
        className="placeholder:text-[#94A3B8]"
      />
      <Input
        type="password"
        name="Password"
        placeholder="Min. 8 characters"
        className="placeholder:text-[#94A3B8]"
      />

      <Input
        type="password"
        name="Confirm Password"
        placeholder="Re-enter password"
        className="placeholder:text-[#94A3B8]"
      />

      <LoginButton name="Create account" />
    </AuthLayout>
  );
};

export default SignUp;
