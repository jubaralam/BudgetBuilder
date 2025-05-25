// pages/Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigate("/login");
      // Redirect to home
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };
  console.log(email);
  return (
    <div className="flex items-center justify-center bg-dark h-screen px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm bg-light text-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
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

        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
        >
          Register
        </button>
        <div className="text-center my-3">
          <Link to="/login">I have an Account, Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
