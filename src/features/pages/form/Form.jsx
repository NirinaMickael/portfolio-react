import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './Form.scss'
import { Transation } from "../../../core/data/variant";
export default function Form() {
  return (
    < motion.div className="wrapper-form"
      variants={Transation}
      initial="hidden"
      animate="visible"
    >
      <form>
        <div className="email">
          <input 
            type="email"
            id="email"
            className="inputNeomorphic"
            placeholder="Your email"
          />
        </div>
        <div className="Name">
          <input
            type="text"
            id="Name"
            className="inputNeomorphic"
            placeholder="Your name"
          />
        </div>
        <div className="Remark">
            <textarea name="remark" id="remak" cols="30" rows="10" placeholder="Your remark"></textarea>
        </div>
        <div className="button">
          <button type="submit" className="buttonNeomorphic">
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
