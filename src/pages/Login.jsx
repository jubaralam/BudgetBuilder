// Login.jsx - Page for user login with Firebase authentication
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Firebase config
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
const Login = () => {
  // State hooks for managing email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Navigation hook

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", res.user);

      // Redirect to homepage or dashboard
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message); // Show error to user
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-dark px-4">
      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-[#1E3E62] text-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 rounded bg-[#0B192C] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 rounded bg-[#0B192C] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
