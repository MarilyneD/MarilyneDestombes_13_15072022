import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import EditName from "./pages/EditName";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editname" element={<EditName />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
