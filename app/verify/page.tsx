"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { verifyAccount } from "../_lib/api";

type VerifyForm = {
  code: string;
};

export default function VerifyPage() {
  const { register, handleSubmit } = useForm<VerifyForm>();
  const router = useRouter();

  const onSubmit = async (data: VerifyForm) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("No token found, please login again.");

    try {
      await verifyAccount(token, data.code);
      alert("Verification successful!");
      router.push("/dashboard");
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
      <h1 className="text-xl font-bold mb-4">Verify Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          placeholder="Enter Code (123456)"
          {...register("code")}
          required
        />
        <button type="submit" className="bg-purple-500 text-white py-2">
          Verify
        </button>
      </form>
    </div>
  );
}
