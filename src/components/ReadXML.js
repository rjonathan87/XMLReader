import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Navbar } from "./Ui/Navbar";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { XMLReader } from "./XMLReader";
import { useUser } from "../hooks/useUser";


export const ReadXML = () => {
  const { isLogged } = useUser()
  const navigate = useNavigate();
  
  useEffect(() => {
    if(isLogged) { navigate("/")  }
    // console.log(isLogged)
  }, [isLogged, navigate])

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={ isLogged ? <XMLReader /> : <Login /> } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </>
  );
};
