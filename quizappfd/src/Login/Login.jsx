import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "./Login.css";
import InputField from "../utils/commoncomponents/InputField";

const LoginModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
console.log({email, password});

    // Example credentials check (replace with real auth logic)
    if (email === "test@example.com" && password === "password123") {
      // navigate('/dashboard');
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginModule;
