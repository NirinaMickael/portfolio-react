import React from "react";
import { motion } from "framer-motion";
import { CardVariant } from "../../core/data/variant";
import './Card.scss'
import TypeWriter from "../../features/pages/TypeWriter";
export default function Card() {
  return (
    <motion.div
      className="card-about"
      variants={CardVariant}
      initial="hidden"
      animate="visible"
    >
      <TypeWriter/>
      <div className="profil">
        <img src="/avatar4.svg" alt="noImage" />
      </div>
    </motion.div>
  );
}
