import React from "react";
import style from './Routers.module.scss'
import { Routes,Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Service from '../Service';
import Probuct from '../Probuct';
import NavigateChild from "../../../component/NavigateChild";


const Routers=()=>{
    return<>
    
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Probuct" element={<Probuct />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/NavigateChild" element={<NavigateChild />}></Route>
       </Routes>
    
    
    </>
}

export default Routers;