import React from 'react';
import './Login.css';
import logo from '../../volunteer-network-main/logos/google.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container">
           <div className="login-main">
           <div className="login">
                <h2>Login with</h2>
                <form action="">
                  <button  >  <img className="logo" src={logo} alt=""/> continueWithGoogle</button>
                  <p>don't have account <Link to="/home"> click here</Link> </p>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Login;