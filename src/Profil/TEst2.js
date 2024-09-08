import React, { Children, useState } from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
  };

  const handleStart = () => {
    setIsAnimated(true);
    setTimeout(() => {
      setHidden(true);
    }, 700);
  };
  return (
    <div
      className="container"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <div
        className="content"
        style={{
          visibility: isAnimated ? "visible" : "hidden",

          position: hidden ? "relative" : "absolute",

          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        {children}
      </div>

      <motion.div
        className="greeting-screen"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          zIndex: 2,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimated ? 0 : 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="circle"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            border: "2px solid white",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: isAnimated ? 20 : 0 }}
          transition={{ duration: 1.5 }}
        />
        <h1 style={{ color: "white", zIndex: 3 }}>Приветствие!</h1>
        <button
          onClick={handleStart}
          style={{
            position: "absolute",
            bottom: "10%",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Начать
        </button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
