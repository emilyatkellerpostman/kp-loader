import React from "react";
import { motion } from "framer-motion";
import logo from "./images/kp-black.svg";

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around"
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "black",
  borderRadius: "0.25rem"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingCircleTransition = {
  duration: .8,
  repeat: Infinity,
        repeatDelay: 1,
  ease: "easeInOut"
};

const logoStyle: React.CSSProperties = {
  width: "50px",
  height: "100%"
};

const containerAll = {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "3em"
}

function Loader() {
  return (
    <div style={containerAll}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
    </div>
  );
}

export default Loader;