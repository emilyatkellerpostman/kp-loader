import './index.css';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
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
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
}

export default App;
