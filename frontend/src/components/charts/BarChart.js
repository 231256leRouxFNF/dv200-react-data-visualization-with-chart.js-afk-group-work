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
      data: [15, 25, 10], //recieve data from the backend
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

// This BarChart component visualizes the number of votes for different vehicle types (Hybrid, Electric, Combustion).
// Each bar represents the votes for a specific vehicle type, with different colors for each type.
const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
