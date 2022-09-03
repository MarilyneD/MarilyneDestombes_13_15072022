import axios from 'axios';
import React, { useRef, useState } from 'react';

const SignUp = () => {

    const signUpEmail = useRef();
    const signUpPassword = useRef();
    const signUpFirstName = useRef();
    const signUpLastName = useRef();
    const [error, setError] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const axiosSignUp = async () => {
        axios
          .post("http://localhost:3001/api/v1/user/signup", {
            email: signUpEmail.current.value,
            password: signUpPassword.current.value,
            firstName: signUpFirstName.current.value,
            lastName: signUpLastName.current.value,

          })
          .then((res) => {
            console.log(res.data);
            setIsVisible(true);
          })
          .catch((error) => {
            console.error("There was an error!", error);
            setError(true);
          });
      };

    const handleSignUp = async (e) => {
        e.preventDefault();
        axiosSignUp();
    

      };

    return (
        <main className="main bg-dark">
      <section className="sign-up-content">
        <i className="fa fa-user-circle sign-up-icon"></i>
        <h1>Sign Up</h1>


        <form onSubmit={e => handleSignUp(e)}>
          <div className="input-wrapper">
            <label htmlFor='useremail'>User email</label
            ><input type="email" id="useremail" autoComplete="off" required ref={signUpEmail}/>  
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label
            ><input type="password" id="password" autoComplete="off" required ref={signUpPassword}/> 
          </div>
          <div className="input-wrapper">
            <label htmlFor='firstname'>First Name</label
            ><input type="firstname" id="firstname" autoComplete="off" required ref={signUpFirstName}/> 
          </div>
          <div className="input-wrapper">
            <label htmlFor='lastname'>Last Name</label
            ><input type="lastname" id="lastname" autoComplete="off" required ref={signUpLastName}/> 
          </div>

        <input className="sign-up-button"type="submit" value="Sign Up"/>
        <span className='sign-up-error'>{error && "error on registration"}</span>
        <span className='sign-up-success'>{(!error && isVisible) && "new registered account" }</span>
        </form>


      </section>
    </main>
            
        
    );
};

export default SignUp;