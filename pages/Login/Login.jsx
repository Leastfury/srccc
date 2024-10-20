import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './Login.css';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState(""); // Only needed for signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For displaying errors
  const navigate = useNavigate(); // Use useNavigate for redirection


  const user_auth = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Reset error message before new attempt

    try {
      if (signState === "Sign In") {
        // Sign In logic
        const response = await axios.post('http://localhost:3001/signin', { email, password });
        console.log("Logged in successfully:", response.data);
        navigate('/');
        localStorage.setItem('token', response.data.token); // Store token
      } else {
        // Sign Up logic
        const response = await axios.post('http://localhost:10000/signup', { name, email, password });
        console.log("Signed up successfully:", response.data);
        navigate('/');

      }
    } catch (error) {
      setErrorMessage(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className='login'>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {/* Only show name input during signup */}
          {signState === "Sign Up" && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">{signState}</button>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to the app?{' '}
                <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
