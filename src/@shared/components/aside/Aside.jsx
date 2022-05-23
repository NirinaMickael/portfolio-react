import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Aside.scss";
import { Transation } from "../../../core/data/variant";
const Aside = (props) => {
  const { position, label, dr, deg, w, h ,active} = props;
  const { l, r, t, b } = position;
  const routeActive = active?'active':'';
  return (
    <motion.div
      variants={Transation}
      custom={t | -b}
      initial="hidden"
      animate="visible"
      className="aside"
      style={{ left: `${l}%`, right: `${r}%`, top: `${t}%` }}
    >
       {dr === "right" && (
        <span className="rule" style={{height: 5, width: w }}>
          .
        </span>
      )}
      {dr === "top" && (
        <span className="rule" style={{ width: w, height: h }}>
          .
        </span>
      )}
      <Link
        to={label.toLowerCase()}
        className={`${routeActive} label`}
        style={{ transform: `rotate(${deg}deg)` }}

      >
        {label}
      </Link>
      {dr === "bottom" && (
        <span className="rule" style={{ width: w, height: h }}>
          .
        </span>
      )}
      {dr === "left" && (
        <span className="rule" style={{height: 5, width: w }}>
          .
        </span>
      )}
    </motion.div>
  );
};
export default Aside;
