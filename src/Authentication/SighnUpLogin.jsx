import React, { useState } from "react";
import { signUp, login } from "./authentication";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={() => signUp(email, password)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-3 rounded-md font-semibold text-lg"
        >
          Sign Up
        </button>

        <hr className="border-gray-700 my-6" />

        <h2 className="text-3xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={() => login(email, password)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-3 rounded-md font-semibold text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
