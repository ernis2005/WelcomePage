import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

const Pixel = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    if (isAnimated === false) {
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
        setTimeout(() => {
          const pixels = document.querySelector(".pixels");
          pixels.style.display = "none";
        }, 500);
      }, 2000);
    }
  }, [isAnimated]);

  const animate = {
    initial: {
      opacity: 0,
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        duration: 0,
        delay: 0.02 * i[0],
      },
    }),
    close: (i) => ({
      opacity: 0,
      transition: {
        duration: 0,
        delay: 0.02 * i[1],
      },
    }),
  };
  const getBlocks = (IndexOf) => {
    const { innerWidth, innerHeight } = window;
    const BlockSize = innerWidth * 0.05;
    const amount = Math.ceil(innerHeight / BlockSize);
    const shuffle = (a) => {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    };
    const delays = shuffle([...Array(amount)].map((_, i) => i));

    return delays.map((random, i) => (
      <motion.div
        key={i}
        className="PixelBlock"
        animate={isAnimated ? "open" : "close"}
        initial="initial"
        variants={animate}
        custom={[IndexOf + random, 20 - IndexOf + random]}
      ></motion.div>
    ));
  };
  return (
    <div className="pixels">
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="PixelBlock">
          {getBlocks(i)}
        </motion.div>
      ))}
      <button className="pixels-btn" onClick={() => setIsAnimated(!isAnimated)}>
        Start
      </button>
    </div>
  );
};

export default Pixel;
