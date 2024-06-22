"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const GoogleAuth = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL;
  return (
    <div className=" text-white text-right pt-2 w-fit">
      <h2 className="text-2xl font-bold">Create an account</h2>
      <form action="">
        <label className="flex flex-col gap-2 mt-6" htmlFor="email">
          Email
          <input className="auth-input p-2" name="email" type="email" />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 mt-6 relative">
          Password
          <input
            className="auth-input py-2 pl-2 pr-8"
            name="password"
            type={isPasswordShown ? "text" : "password"}
          />
          {isPasswordShown ? (
            <FaEye
              className="absolute text-yellow bottom-3 right-2 "
              onClick={() => setIsPasswordShown(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute text-yellow bottom-3 right-2 "
              onClick={() => setIsPasswordShown(true)}
            />
          )}
        </label>
        <button className="rounded-md bg-yellow text-white py-2 px-4 mt-4 w-full">
          Signup
        </button>
          <Link href={GoogleAuth || ""}>
            <button
              type="button"
              className="rounded-md bg-black text-white py-2 px-4 mt-8 w-full flex justify-center items-center gap-2"
            >
              <FcGoogle />
              <p>Sign up with Google</p>
            </button>
          </Link>

        <p className="mt-2 text-sm text-white opacity-90">
          Already have an account?
          <span className="text-yellow font-bold">
            <Link href={"/auth/login"}> Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
