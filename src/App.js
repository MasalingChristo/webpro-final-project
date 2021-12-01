import React from "react";
import Home from './pages/Home';
import About from "./pages/About";
import {Routes, Route } from "react-router-dom";

const App= () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  )

}

export default App;