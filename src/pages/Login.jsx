// Login.jsx - Page for user login with Firebase authentication
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Firebase config
import { Link, useNavigate } from "react-router-dom";
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
      navigate("/user");
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
        className="w-full max-w-sm bg-light text-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <InputBox
          title="Email"
          id="email"
          type="email"
          required={true}
          value={email}
          onChangeFunction={setEmail}
        />
        <InputBox
          title="Password"
          id="password"
          type="password"
          required={true}
          value={password}
          onChangeFunction={setPassword}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
        >
          Login
        </button>
        <div className="text-center my-3">
          <Link to="/register">I don't have an Account, Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
