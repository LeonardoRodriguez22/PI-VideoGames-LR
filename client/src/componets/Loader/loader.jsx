import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner">
          <div className="controller"></div>
        </div>
        <div className="message">Cargando...</div>
      </div>
    </div>
  );
};

export default Loader;
