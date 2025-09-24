import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:5000/api";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });
      const data = await res.data;

      localStorage.setItem("token", data.token); // store token from API real implementation
      navigate("/"); // go to dashboard on success

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed. Try again.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-[800px] bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center text-orange-600 mb-6">
          Sign in
        </h1>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="login form"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
              aria-required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
              required
              aria-required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold text-white ${
              loading ? "bg-orange-400" : "bg-orange-600 hover:bg-orange-700"
            }`}
            aria-busy={loading}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-orange-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
