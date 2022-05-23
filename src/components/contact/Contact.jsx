import React, { useState } from "react";
import Form from "../../features/pages/form/Form";
import Remark from "../../features/pages/remak/Remark";
import "./Contact.scss";
import { MapsHomeWork } from "@mui/icons-material";
import { Emoji, Item, Rounded } from "../../core/data/variant";
import { motion } from "framer-motion";
const Contact = () => {
  const [pos, setpos] = useState(0);
  const HandleScroll = (e) => {
    const posTop = e.target.scrollTopMax / 4;
    const scrollTop = e.target.scrollTop;
    console.log(posTop, scrollTop);
    if (posTop * 1 > scrollTop && scrollTop > posTop * 0) setpos(0);
    if (posTop * 2 > scrollTop && scrollTop > posTop * 1) setpos(1);
    if (posTop * 3 > scrollTop && scrollTop > posTop * 2) setpos(2);
    if (posTop * 4 > scrollTop && scrollTop > posTop * 3) setpos(3);
  };
  return (
    <div className="contact">
      <div className="formulaire">
        <motion.div
          className="rate"
          variants={Rounded}
          initial="hidden"
          animate="visible"
        >
          {Emoji.map((item, i) => (
            <motion.span variants={Item} whileHover={{ scale: 1.5 }}>
              {item.emoji}
            </motion.span>
          ))}
        </motion.div>
        <Form />
      </div>
      <div className="avis" onScrollCapture={(e) => HandleScroll(e)}>
        <Remark pos={pos} />
      </div>
    </div>
  );
};

export default Contact;
