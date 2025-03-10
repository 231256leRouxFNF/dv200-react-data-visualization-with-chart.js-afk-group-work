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
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#900639",
        "#F2D398",
        "#646464",
        "#C8C8C8",
        "#B4B4B4",
        "#787878",
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Bar Chart Example" },
  },
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
