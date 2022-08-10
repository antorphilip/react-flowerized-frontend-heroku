import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Featured from "./pages/Home/Featured";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />

        {/* NOTE: Where is this? */}
        <Route path="/feature" element={<Featured />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
