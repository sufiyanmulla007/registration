import React,{useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration";
import Header from "./NewComponents.js/Header";
import Home from "./NewComponents.js/Home";
import './Form.css';
import { Route, Routes } from "react-router-dom";
import Login from "./NewComponents.js/Login";
import Dashboard from "./NewComponents.js/Dashboard";
import Errror from "./NewComponents.js/Errror";
function App() {
  
  return (
<div>
  {/* <Registration /> */}
 <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="*" element={<Errror/>}/>
  </Routes>
</div>
  );
};

export default App;
