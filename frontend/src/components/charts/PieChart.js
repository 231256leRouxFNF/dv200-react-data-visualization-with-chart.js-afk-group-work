import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Population",
      data: [300, 500, 200],
      backgroundColor: ["#900639", "#F2D398", "#646464"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Pie Chart Example" },
  },
};

const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
