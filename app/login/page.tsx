"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "../_lib/api";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await login(data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data?.name || "User");
      alert("Login successful!");
      router.push("/verify");
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
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          placeholder="Email"
          type="email"
          {...register("email")}
          required
        />
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2">
          Login
        </button>
      </form>
    </div>
  );
}
