import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProfileResponse, addSignInResponse, } from '../feature/signSlice';

const SignIn = () => {

let navigate = useNavigate();  

// Variables locales globales : Store Redux, utiles dans tout le site (si logué, le nom et le token)
const dispatch = useDispatch()  // Pour sauvegarder des données dans le store
const globalStoreSign = useSelector(state => state.sign) // rappeler les données du store "sign"


// Variables locales : Hooks locaux, seulement utiles dans ce composant SignIn
const signInEmail = useRef();   // pour enregistrer le premier input email (local non redux)
const signInPassword = useRef(); // pour enregistrer le deuxième input pwd (local)
const [error, setError] = useState(false); // set comme "save"


// fonction post(j'envoie) du login, pour récupérer le token dans la réponse
const axiosSignIn = async () => {
  axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: signInEmail.current.value,
      password: signInPassword.current.value,
    })
    .then((res) => {
      dispatch(addSignInResponse(res.data)); // met la réponse dans le store global
    })
    .catch((error) => {
      console.error("There was an error!", error);
      setError(true);
    });
};



// fonction post du token dans le header, pour récupérer le profile
  const axiosProfile = async () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + globalStoreSign.responseLogin.body.token;
    axios
      .post("http://localhost:3001/api/v1/user/profile")
      .then((res) => {
        dispatch(addProfileResponse(res.data));
      })
      .catch((errorProfile) => {
        console.error("There was an error Profile!", errorProfile);
      });
  };



// fonction qui se déclenche au clic sur le formulaire
const handleSignIn = async (e) => {
  e.preventDefault();
  axiosSignIn(); // j'envoie les identifiants au backend et j'enregistre la réponse ds le store
};

useEffect(() => {
  if (globalStoreSign.responseLogin) {
    console.log("Response login arrivée dans le store Redux avec son token");
    axiosProfile();
    navigate("/profile");
  }
}, [globalStoreSign.responseLogin]); //useEffect ne se lance que si globalstoresign.responseLogin change
  

 
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

        <input className="sign-in-button"type="submit" value="Sign In"/>
        <span className='sign-in-error'>{error && "le mail ou le mot de passe ne correspondent pas"}</span>

        </form>


      </section>
    </main>
    );
};

export default SignIn;