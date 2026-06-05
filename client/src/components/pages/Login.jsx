import React from "react";
import Input from "../ui/Input";
import Logo from "../../assets/logo.png";
import { FaLock, FaMailBulk } from "react-icons/fa";
import LoginButton from "../ui/LoginButton";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import AuthLayout from "../../layout/AuthLayout";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      alert(`welcome ${result.user.displayName}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthLayout>
      {/* Div Parent Container for Login */}

      {/* Div for text, logo & google sign in */}
      <div className="flex flex-col items-center gap-5">
        <img
          src={Logo}
          alt=""
          className="w-28 h-28 rounded-full object-cover shadow-md"
        />
        <h1 className="heading-primary">Welcome to Chikini Monie</h1>
        <p className="paragraph">Sign in to continue</p>

        <button
          className="flex gap-4 h-12 w-90 items-center justify-center border border-[#CED8E3] rounded-xl cursor-pointer"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>
      </div>

      {/* Div for alternative */}

      <div className="flex items-center w-full gap-4">
        <div className="flex-1/4 h-[1px] bg-gray-300"></div>

        <span className="text-gray-500 font-semibold">OR</span>

        <div className="flex-1/4 h-[1px] bg-gray-300"></div>
      </div>

      {/* form fields */}
      <div className="flex flex-col gap-3">
        <Input
          icon={<FaMailBulk className="text-[#94A3B8] text-[15px]" />}
          name="Email"
          type="email"
          placeholder="you@email.com"
          className=" text-gray-700 h-11 w-90 placeholder:text-[#94A3B8]  outline-0"
        />
        <Input
          icon={<FaLock className="text-[#94A3B8] text-[15px]" />}
          name="Password"
          type="password"
          placeholder="........."
          className=" text-gray-700 h-11 w-90 placeholder:text-[#94A3B8] placeholder:text-3xl outline-0"
        />
      </div>

      <LoginButton name="Sign In" />

      {/* div for forget password & signUp */}
      <div className="flex gap-10">
        <p className="text-[#64748B] text-[14px] cursor-pointer hover:text-gray-600">
          Forget password?
        </p>
        <p className="text-[#64748B] text-[14px] cursor-pointer hover:text-gray-600">
          Need an account? <span className="font-bold">Sign up</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
