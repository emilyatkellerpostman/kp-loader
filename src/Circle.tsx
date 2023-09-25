import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from './images/kp-black.svg';

const containerStyle: React.CSSProperties = {
  position: "relative",
  width: "5rem",
  height: "5rem",
  boxSizing: "border-box"
};

const circleStyle: React.CSSProperties = {
  display: "block",
  width: "5rem",
  height: "5rem",
  border: "0.3rem solid #e9e9e9",
  borderTop: "0.3rem solid #20ce9c",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const logoStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%", 
  height: "50%"
};

function Circle() {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 1
        }
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={controls}
      />
      <img src={logo} alt="Logo" style={logoStyle} />
    </div>
  );
}

export default Circle;
