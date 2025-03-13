import React from "react";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import "../../styles/dashboard.css";


const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="app-title">Dashboard</h2>
      <div className="chart-grid">
        <div className="card">
          <h3>Bar Chart</h3>
          <BarChart />
        </div>
        <div className="card">
          <h3>Line Chart</h3>
          
          <LineChart />
        </div>
        <div className="card">
          <h3>Pie Chart</h3>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
