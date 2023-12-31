import { motion } from "framer-motion";

function Example(){
    return(
      <div style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="item"
        animate={{ 
          scale: [1, 2, 1, 2, 1],
          rotate:  [0, 20, 40, 20, 0]
        }}
        transition={{duration: 2.5, repeat: Infinity}}
        style={{ transformOrigin: "center" }}
        />
      </div>
    );
  }
  
  export default Example;