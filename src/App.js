import { useContext } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import AuthContext from "./contexts/auth";
import AboutUs from "./pages/AboutUs";
import Confirmation from "./pages/Confirmation";
import ContactUs from "./pages/ContactUs";
import Customization from "./pages/Customization";
import Customize from "./pages/Customization/Customize";
import Events from "./pages/Events";
import Greetings from "./pages/Greetings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import MyCart from "./pages/MyCart";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/customization"
          element={
            <ProtectedRoute>
              <Customization />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customize"
          element={
            <ProtectedRoute>
              <Customize />
            </ProtectedRoute>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route
          path="/myaccount"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/greetings" element={<Greetings />} />
        <Route
          path="/mycart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
