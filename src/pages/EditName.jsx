import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeFirstName, changeLastName } from '../feature/signSlice';

const EditName = () => {

const dispatch = useDispatch();
const globalStoreSign = useSelector(state => state.sign)
let navigate = useNavigate();
const newFirstName = useRef();
const newLastName = useRef();


const axiosPutName = async () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + globalStoreSign.responseLogin.body.token;
    axios
      .put("http://localhost:3001/api/v1/user/profile", {
        firstName: newFirstName.current.value,
        lastName: newLastName.current.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };



const handleSubmit = (e) => {
e.preventDefault();
dispatch(changeFirstName(newFirstName.current.value));
dispatch(changeLastName(newLastName.current.value));
axiosPutName();
navigate("/profile");


};



    return (
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit Name</h1>


        <form onSubmit={e => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor='new-first-name'>New First Name</label
            ><input type="firstname" id="firstname" required ref={newFirstName}/>  
          </div>
          <div className="input-wrapper">
            <label htmlFor='new-last-name'>New Last Name</label
            ><input type="lastname" id="lastname" required ref={newLastName}/>
          </div>
          

        <input className="sign-in-button"type="submit" value="Validate"/>

        </form>


      </section>
    </main>
    );
};

export default EditName;