const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://tinytales.trendline.marketing/api";

// Helper for handling fetch requests
async function request(url: string, options: RequestInit = {}, token?: string) {
  const headers: HeadersInit = {
    ...(options.headers || {}),
  };

  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }

  return res.json();
}

// === AUTH APIs ===

// Register
export const register = (data: {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
}) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) =>
    formData.append(key, value.toString())
  );

  return request("/auth/register", {
    method: "POST",
    body: formData,
  });
};

// Login
export const login = (data: { email: string; password: string }) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) =>
    formData.append(key, value.toString())
  );

  return request("/auth/login", {
    method: "POST",
    body: formData,
  });
};

export const verifyAccount = (token: string, code: string) => {
  const formData = new FormData();
  formData.append("code", code);

  return request(
    "/auth/verify-email",
    {
      method: "POST",
      body: formData,
    },
    token
  );
};

// Resend Code
export const resendCode = (token: string) => {
  return request(
    "/auth/verify-email/resend-code",
    {
      method: "POST",
      body: new FormData(),
    },
    token
  );
};

// User Data
export const getUserData = (token: string) => {
  return request("/auth/user-data", { method: "GET" }, token);
};

// Logout
export const logout = (token: string) => {
  return request(
    "/auth/logout",
    {
      method: "POST",
      body: new FormData(),
    },
    token
  );
};
