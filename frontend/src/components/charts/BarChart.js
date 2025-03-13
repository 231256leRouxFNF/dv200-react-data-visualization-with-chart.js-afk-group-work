import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Hybrid", "Electric", "Combustion"],
  datasets: [
    {
      label: "Votes",
      data: [15, 25, 10],
      backgroundColor: [
        "#900639",
        "#F2D398",
        "#646464",
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Vehicle Type Votes" },
  },
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
