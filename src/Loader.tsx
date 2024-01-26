import React from "react";
import { motion } from "framer-motion";
import logo from "./images/kp-black.svg";
import gif from "gif.js";

const gifInstance = new gif();


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
   // flexDirection: "column",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "3em"
}

function Loader() {

  const generateGif = () => {
    // Asegúrate de que gifInstance tenga las dimensiones adecuadas
    gifInstance.setSize(/* ancho */, /* alto */);
  
    // Lógica para generar el GIF utilizando gifInstance
    // Puedes capturar el estado actual del loader y agregarlo como fotograma al GIF
  
    // Se llama a onRenderComplete cuando el GIF ha sido renderizado completamente
    gifInstance.on("finished", function(blob) {
      // Crea un objeto URL del blob y crea un enlace para descargar el GIF
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "mi_gif.gif";
      a.click();
      // Libera el objeto URL después de la descarga
      URL.revokeObjectURL(url);
    });
  
    // Inicia el renderizado del GIF
    gifInstance.render();
  };
  
  
  

setTimeout(() => {
  generateGif();
}, 5000); 


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