import React from 'react';
import './Loader.css'; // Asegúrate de importar el archivo CSS correspondiente

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