import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "white"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "black"
  }
};

export const Loading = () => {

  

  return (
  <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="item"
    >
      <motion.path
        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 5, ease: "easeInOut" },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] }
        }}
        style={{strokeWidth: 0.5, stroke: "#fff", strokeLinejoin: "round",
        strokeLinecap: "round"}}
      />
    </motion.svg>
  </div>
);
}

<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
