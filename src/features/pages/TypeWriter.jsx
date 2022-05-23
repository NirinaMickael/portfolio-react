import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import './TypeWriter.scss';
export default function TypeWriter() {
  const data = ["web Developer", "and", "Mathematic Student"];
  
  return (
    <div className="container-writer">
      <span>Hi!</span><span>I'm</span>
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: true,
          deleteSpeed:100,
          delay:200
        }}
      />
    </div>
  );
}
