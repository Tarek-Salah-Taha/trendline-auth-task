"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [name, setName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("name");

    if (!token) {
      router.push("/login");
    } else {
      setName(userName);
    }
  }, [router]);

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold">Welcome, {name || "User"}!</h1>
    </div>
  );
}
