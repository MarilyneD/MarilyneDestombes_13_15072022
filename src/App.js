import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/user/:id" element={<User />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
