"use client";
import Spinner from "@/app/components/ui/Spinner";
import { AuthData } from "@/app/types/formData";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const GoogleAuth = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL;
  const baseUrl = "https://mingle-v1.onrender.com/api/v1";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState<AuthData>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      let req = await axios.post(`${baseUrl}/user/signup`, {
        email: formData.email,
        password: formData.password,
      });

      if (req.status == 201) {
        router.push("/auth/login");
      }
    } catch {
      setError("user with this email already exists");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" text-white text-right pt-2 w-fit">
      <h2 className="text-2xl font-bold">Create an account</h2>
      <form action="" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 mt-6" htmlFor="email">
          Email
          <input
            required
            className="auth-input p-2"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 mt-6 relative">
          Password
          <input
            required
            className="auth-input py-2 pl-2 pr-8"
            name="password"
            onChange={handleChange}
            type={isPasswordShown ? "text" : "password"}
          />
          {isPasswordShown ? (
            <FaEye
              className="password"
              onClick={() => setIsPasswordShown(false)}
            />
          ) : (
            <FaEyeSlash
              className="password"
              onClick={() => setIsPasswordShown(true)}
            />
          )}
        </label>
        {error && <p className="text-red-600 text-sm py-1">{error}</p>}
        {!isLoading && (
          <button className="rounded-md bg-yellow text-white py-2 px-4 mt-4 w-full">
            Signup
          </button>
        )}
        {isLoading && (
          <button
            type="button"
            className="rounded-md bg-yellow text-white py-2 px-4 mt-4 w-full"
          >
            <Spinner bg="darkGreen" />
          </button>
        )}
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
