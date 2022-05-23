import React, { useEffect, useState} from "react";
import { motion, useAnimation } from "framer-motion";
import "./Loading.scss";
import { useNavigate } from "react-router-dom";
const container = {
  hidden:j=>({ opacity: 1, x: 0, y: 0}),
  show: i=> ({
    opacity: 1,
    x: 100,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration:33
    },
  }),
};

export default function Loading({visited}) {
  const [counter, setCounter] = useState(0);
  const controll = useAnimation();
  const navigate = useNavigate();
  sessionStorage.removeItem('visited');
  
  ((visit)=>{
    visited(visit);
  })(false);

  useEffect(() => {
    const increment = setTimeout(() => {
      setCounter((initial) => initial + 1);
    }, 50);
    if (counter % 5 === 0) controll.start("show");
    else controll.start("hidden");

    if (counter > 100) {
      clearTimeout(increment);
      navigate('home');
      sessionStorage.setItem('visited',true);
      const visit = sessionStorage.getItem('visited');
      ((visit)=>{
        visited(visit);
      })(visit);
    };
  }, [counter,navigate,visited]);
  
  return (
    <div className="container-loading" >
      <div className="loading">
        <div className="progressbar-container">
          <div className="progressbar" style={{ width: `${counter}%` }}>
            <small>{counter}%</small>
          </div>
        </div>
      </div>
      <div className="container-bounce">
      <motion.div
        variants={container}
        custom={counter}
        initial="hidden"
        animate={controll}
        className="bounce"
      />
      </div>
    </div>
  );
}
