import React from 'react';
import './App.css';
import logo from "./images/kp-black.svg";

const LoadingComponent: React.FC = () => {
  return (
    <div className="container">
      <div className="loading">
        <div className="loading__letter">L</div>
        <div className="loading__letter">o</div>
        <div className="loading__letter">a</div>
        <div className="loading__letter">d</div>
        <div className="loading__letter">i</div>
        <div className="loading__letter">n</div>
        <div className="loading__letter">g</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
      </div>
      <div>
        <br /> 
      <img src={logo} alt="Logo" style={logoStyle} />
      </div>
    </div>
  );
};


const logoStyle: React.CSSProperties = {
  width: "50px",
  height: "100%"
};


export default LoadingComponent;
