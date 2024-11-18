import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; 
import View3D from "./Components/View3D"; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view3d" element={<View3D />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
