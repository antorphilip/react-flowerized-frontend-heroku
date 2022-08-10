import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Reviews from "./components/Reviews";
import Feature from "./components/Feature";
import MyAccount from "./pages/MyAccount";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/feature" element={<Feature />} />

        <Route path="/events" element={<Events />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
