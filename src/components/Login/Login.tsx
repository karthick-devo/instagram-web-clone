import React, { useState } from 'react'
import "../Login/index.css"
import {useNavigate} from 'react-router'


function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be 8 characters")
    } else {
      setError('');
      console.log("Logging in...");
      navigate('/home')

    }
  }
  return (
    <div className='login-container d-flex flex-row' >
      <div>
        <img src="/Images/insta_login_pg.png" alt="images" className='login-image' />
      </div>
      <div className='login-box'>
        <h1 className='logo'>Instagram</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">OR</div>

        <button className="facebook-login">Log in with Facebook</button>
        {error && <p className="error-message">{error}</p>}
        <a href="#" className="forgot-password">Forgot password?</a>
        <div className="signup-box">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>




  );
};

export default Login