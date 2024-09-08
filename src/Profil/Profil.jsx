import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomePage = () => {
  const [hiddenBlock1, setHiddenBlock1] = useState(false);
  const [hiddenBlock2, setHiddenBlock2] = useState(false);
  const [hiddenBlock3, setHiddenBlock3] = useState(false);
  const [hiddenBlock4, setHiddenBlock4] = useState(false);
  const [startView, setStartView] = useState(false);

  const handleStart = () => {
    setStartView(true);
  };
  useEffect(() => {
    if (startView === false) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
      body.style.height = "100vh";
      body.style.width = "100vw";
    } else {
      setTimeout(() => {
        const body = document.querySelector("body");
        body.style.overflow = "auto";
        body.style.height = "auto";
        body.style.width = "auto";
        const div = document.querySelector(".container");
        div.style.display = "none";
      }, 2000);
    }
  }, [startView]);

  return (
    <div className="container">
      <div className="background">
        {!hiddenBlock1 && (
          <motion.div
            className="block1"
            initial={{ y: 0 }}
            animate={startView ? { x: "-100vh" } : {}}
            transition={{ duration: 1, delay: 0 }}
          >
            1
          </motion.div>
        )}
        {!hiddenBlock2 && (
          <motion.div
            className="block2"
            initial={{ x: 0 }}
            animate={startView ? { x: "-100vw" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            2
          </motion.div>
        )}
        {!hiddenBlock3 && (
          <motion.div
            className="block3"
            initial={{ x: 0 }}
            animate={startView ? { x: "100vw" } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            3
          </motion.div>
        )}
        {!hiddenBlock4 && (
          <motion.div
            className="block4"
            initial={{ y: 0 }}
            animate={startView ? { y: "100vh" } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            4
          </motion.div>
        )}
      </div>
      {!startView && (
        <div className="welcome">
          <h1>Привет</h1>
          <button onClick={handleStart}>Начать просмотр</button>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
