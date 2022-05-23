import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const container = {
    hidden: { opacity: 1, scale: 0 , y: '-5vh' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0 ,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
const Box = ()=>{
    const control = useAnimation();
    const [ref,inView] = useInView();
    useEffect(()=>{
      console.log(inView);
      if(inView){
        control.start("visible")
      }
      else{
         control.start("hidden");
      }
    },[control,inView])
    return(
      <div>
          <motion.ul variants={container} 
          ref={ref}
         initial="hidden"
         animate={control}
         className="container"
         >
         {
           [1, 2, 3, 4].map(items => <motion.span  variants={item} className="item" />)
         }
       </motion.ul>
       </div>
    )
  }  
  export default Box;