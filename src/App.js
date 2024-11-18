import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import the Home component
import View3D from "./Components/View3D"; // Import the View3D component
import './App.css'; // Import the global styles for the app

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Main Page Route - Home */}
          <Route path="/" element={<Home />} />
          
          {/* 3D Model View Page Route */}
          <Route path="/view3d" element={<View3D />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
