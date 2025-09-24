import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // TODO: call your register API
      // Example:
      // const res = await fetch("/api/auth/register", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ fullName, email, password }) });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || "Registration failed");

      // mock success:
      await new Promise((r) => setTimeout(r, 700));
      navigate("/auth/login"); // redirect to login on success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w[800px] bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center text-orange-600 mb-6">
          Create account
        </h1>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="register form"
        >
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your full name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Repeat password"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold text-white ${
              loading ? "bg-orange-400" : "bg-orange-600 hover:bg-orange-700"
            }`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-orange-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
