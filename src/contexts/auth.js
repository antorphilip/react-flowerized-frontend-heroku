import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("tokens")
      ? jwtDecode(localStorage.getItem("tokens"))
      : null
  );
  const [tokens, setTokens] = useState(() =>
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );
  const url = process.env.REACT_APP_SERVICE_URL;
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("tokens", JSON.stringify(data));
        alert("Successfully logged in");
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      alert("Network Error");
    }
  };

  const logout = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("tokens");
    navigate("/login");
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      if (response.status === 200) {
        alert("Registered successfully. Please login");
        navigate("/login");
      }
    } catch (e) {
      alert("Network Error");
    }
  };

  const context = {
    user,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
