"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { register as registerApi } from "../_lib/api";

type RegisterForm = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const router = useRouter();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerApi(data);
      alert("Registration successful! Please login.");
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Registration failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input placeholder="Full Name" {...register("name")} required />
        <input
          placeholder="Email"
          type="email"
          {...register("email")}
          required
        />
        <input placeholder="Phone Number" {...register("mobile")} required />
        <input
          placeholder="Country Code"
          {...register("mobile_country_code")}
          required
        />
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
          required
        />
        <input
          placeholder="Confirm Password"
          type="password"
          {...register("password_confirmation")}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2">
          Register
        </button>
      </form>
    </div>
  );
}
