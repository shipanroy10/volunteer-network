import React, { useContext } from 'react';
import './Login.css';
import logo from '../../volunteer-network-main/logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import Inventory from '../AboutTask/AboutTask';
firebase.initializeApp(firebaseConfig);
const Login = () => {
  

const [loggedInUser,setLoggedInUser] = useContext(UserContext);
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = ()=>{
    const  provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
         
            var token = result.credential.accessToken;
          
            var {displayName,email} = result.user;
            const signInUser = {name:displayName,email}
          setLoggedInUser(signInUser)
          history.replace(from);
          }).catch(function(error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div className="container">
           <div className="col">
           <div className="main">
           <div className="login">
                <h2>Login with</h2>
               
                  <button onClick={handleGoogleSignIn} >  <img className="logo" src={logo} alt=""/> continueWithGoogle</button>
                  <p>don't have account <Link to="/home"> click here</Link> </p>
               
            </div>
           </div>
           </div>

         
        </div>
    );
};

export default Login;