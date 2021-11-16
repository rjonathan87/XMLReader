import React from "react";
import { Navbar } from "./Navbar";
import { XMLReader } from "./XMLReader";

export const ReadXML = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <XMLReader />
      </div>
    </>
  );
};
