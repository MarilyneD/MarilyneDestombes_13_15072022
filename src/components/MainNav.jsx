import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SignInNav from "./SignInNav";
import SignOutNav from "./SignOutNav";
import UserNav from "./UserNav";

const MainNav = () => {
  const globalStoreSign = useSelector(state => state.sign) // rappeler les données du store "sign"
 
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {globalStoreSign.responseProfile ? (
          <div>
            <UserNav /> <SignOutNav />
          </div>
        ) : (
          <SignInNav />
        )}
      </div>
    </nav>
  );
};

export default MainNav;
