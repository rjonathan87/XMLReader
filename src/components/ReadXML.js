import { Routes, Route } from "react-router-dom";
import { Login } from "./Auth/Login";
import { Logout } from "./Auth/Logout";
import { Register } from "./Auth/Register";

import { Navbar } from "./Ui/Navbar";
import { XMLReader } from "./XMLReader";

export const ReadXML = () => {
  const isAuthenticated = false;
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={ isAuthenticated ? <XMLReader /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </div>
    </>
  );
};
