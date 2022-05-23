import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.scss";
import Loading from "./components/home/Loading";
import Contact from "./components/contact/Contact";
import HOme from "./components/home/Home";
import Project from "./components/project/Project";
import About from "./components/about/About";
import { Home } from "@mui/icons-material";
import Aside from "./@shared/components/aside/Aside";
import { DataAside } from "./core/data/variant";
const App = () => {
  const state = sessionStorage.getItem("visited");
  const navigate = useNavigate();
  const url = useLocation().pathname
  const [visit, setVisit] = useState(state);
  const Data = DataAside;
  return (
    <>
      {visit && (
        <>
         <div className="Title" onClick={() => navigate("home")}>
          <h1 className="text">Mickael</h1>
        </div>
         <div className="icon-home" onClick={() => navigate("home")}>
          <Home sx={{ fontSize: 60 }} />
        </div>
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={<Loading visited={(state) => setVisit(state)} />}
        ></Route>
        <Route path="/home" element={<HOme />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
       {
         visit && (
           <>
         {
           Data.map(item=> {
             const active = (`/${item.label.toLowerCase()}`==url?true:false);
             console.log(url)
            return (
              <Aside
              label={item.label}
              position={item.position}
              dr={item.dr}
              deg={item.deg}
              w={item.w}
              h={item.h}
              active={active}
            />
             );
           })
         }
           </>
         )
       }
    </>
  );
};
export default App;
