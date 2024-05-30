import React from 'react';
import './css/loading.css';

const Loading = () => {
  return (
    <div className="container loading-container">
      <div className="cargando">
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <div className="pelotas"></div>
      </div>
      <div className="texto-cargando"><span>Cargando</span></div>
    </div>
  );
};

export default Loading;
