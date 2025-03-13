import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Hybrids", "Electric", "Combustion"],
  datasets: [
    {
      label: "Population",
      data: [30, 10, 50],
      backgroundColor: ["#900639", "#646464", "#F2D398"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Fuel types" },
  },
};

const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
