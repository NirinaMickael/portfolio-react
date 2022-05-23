import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Step, UserRemark } from "../../../core/data/variant";
import "./Remark.scss";
export default function Remark({ pos }) {
  const data = UserRemark;
  const [ref, inView] = useInView();
  const control = useAnimation();
  console.log(pos);
  useEffect(() => {
    if (pos) control.start("visible");
    else control.start("hidden");
  }, [control, inView]);
  return (
    <motion.div className="wrapper-remark">
      {data.map((item, i) => {
          const animate =-( (i>(pos)*4) && (i<(pos+1)*4)  )?'animate':''
        return (
          <div
            className ={`card-remark ${animate}`}
            key={i}
          >
            <div className="username">
              <h3>{item.name}</h3>
            </div>
            <div className="message">
              <p>{item.remark}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
