import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Charts Dashboard</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
