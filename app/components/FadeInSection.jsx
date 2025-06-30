"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({
  children,
  direction = "up",
  delay = 0.15,
  threshold = 0.2,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  const offsetMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.98,
          ...offsetMap[direction],
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.7,
            delay,
            ease: [0.33, 1, 0.68, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
