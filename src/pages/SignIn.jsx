import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProfile, addSignInResponse, } from '../feature/signSlice';

const SignIn = () => {

//Redux import ne fonctionne pas
const globalStoreSign = useSelector(state => state.sign)
const dispatch = useDispatch()


const signInEmail = useRef();   // pour enregistrer le premier input email (local non redux)
const signInPassword = useRef(); // pour enregistrer le deuxième input pwd (local)
const [axiosResponse, setAxiosResponse] = useState({});
const [error, setError] = useState(false);
const [axiosResponseProfile, setAxiosResponseProfile] = useState({});



const axiosSignIn = async () => {
  axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: signInEmail.current.value,
      password: signInPassword.current.value,
    })
    .then((res) => {
      dispatch(addSignInResponse(res.data)); // dans le store global
      setAxiosResponse(res); // stocké localement
    })
    .catch((error) => {
      console.error("There was an error!", error);
      setError(true);
    });
};




  const axiosProfile = async () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + axiosResponse.data.body.token;
    axios
      .post("http://localhost:3001/api/v1/user/profile")
      .then((res) => {
        dispatch(addProfile(res.data));
        setAxiosResponseProfile(res);
        console.log("response Profile", axiosResponseProfile);
      })
      .catch((errorProfile) => {
        console.error("There was an error Profile!", errorProfile);
      });
  };



const handleSignIn = async (e) => {
  e.preventDefault();
  console.log(signInEmail.current.value, signInPassword.current.value);
  axiosSignIn();

  if (Object.keys(axiosResponse).length>1) {  // je dois avoir eu une réponse pour continuer
  await axiosProfile();  // je post avec le token et je reçois le profil
  }
    else {}

    
     };



    return (
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>


        <form onSubmit={e => handleSignIn(e)}>
          <div className="input-wrapper">
            <label htmlFor='useremail'>User email</label
            ><input type="email" id="useremail" required ref={signInEmail}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor='password'>Password</label
            ><input type="password" id="password" required ref={signInPassword}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor='remember-me'>Remember me</label>
          </div>

        <NavLink className="sign-in-button" to="/profile" > Sign In NavLink   </NavLink>
        <input className="sign-in-button"type="submit" value="Sign In Input"/>
        <span className='sign-in-error'>{error && "le mail ou le mot de passe ne correspondent pas"}</span>

        </form>


      </section>
    </main>
    );
};

export default SignIn;