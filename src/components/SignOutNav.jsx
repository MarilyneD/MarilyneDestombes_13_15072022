import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAll } from '../feature/signSlice';

const SignOutNav = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => { dispatch(resetAll());navigate("/") };

    return (
        <button className="main-nav-item main-nav-button" onClick={ e => handleSignOut()}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
    );
};

export default SignOutNav;