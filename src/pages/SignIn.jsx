import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

//login

useEffect (() => {
  (async () => {

    const headersold = {
      'Content-Type': 'application/json',
      "email":"steve@rogers.com",
      "password": "password456"
    }
   
    const headers = {
      email:"steve@rogers.com",
      password: "password456"
    }

    
    
   await axios.post('http://localhost:3001/api/v1/user/login', {
    email:"steve@rogers.com",
      password: "password456"
  }).then(response => console.log('response',response))
    .catch(error => {        
        console.error('There was an error!', error);
    });;
    
  })();
}, []);





    return (
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor='username'>Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor='remember-me'>
                Remember me</label>
          </div>
         
        <NavLink className="sign-in-button" to="/user" > Sign In   </NavLink>
        {/* <button className="sign-in-button">Sign In</button> */}

        </form>


      </section>
    </main>
    );
};

export default SignIn;