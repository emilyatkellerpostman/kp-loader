import { motion, Variants } from "framer-motion";

interface DrawVariants extends Variants {
  hidden: { opacity: number };
  visible: {
    opacity: number;
    pathLength: number;
    fillOpacity: number;
    transition: {
      duration: number;
      ease: string;
      repeat: number;
    };
  };
}

const draw: DrawVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

function ExampleTwo() {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        variants={draw}
        className="item"
      >
        <motion.path
          d="M100 100 L200 200 L300 100 L400 200 L500 100"
          fill="transparent"
          stroke="black"
          strokeWidth="5"
          variants={draw}
          style={{
            pathLength: 0,
            strokeDasharray: "0 1",
            strokeDashoffset: 1,
          }}
        />
      </motion.svg>
    </div>
  );
}

export default ExampleTwo;
