import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale
);

const data = {
  labels: ["Electric", "Hybrid", "Combustion"],
  datasets: [
    {
      label: "Price (USD)",
      data: [3000000, 2100000, 30000000],
      fill: false,
      borderColor: "#646464",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    }
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12
      }
    },
    title: { 
      display: true, 
      text: "Premium Vehicle Market Analysis",
      padding: { bottom: 20 }
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.parsed.y || context.dataset.data[context.dataIndex];
          return ` $${value.toLocaleString()}`;
        }
      }
    }
  },
  scales: {
    y: {
      // The 'logarithmic' scale is used for the y-axis to better visualize data with large differences in values.
      // This is particularly useful in this case where the prices of different vehicle types vary significantly.
      type: "logarithmic",
      grid: {
        color: 'rgba(200, 200, 200, 0.2)'
      },
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`,
        maxTicksLimit: 6
      },
      title: {
        display: true,
        text: 'Price (USD)'
      }
    },
    x: {
      grid: {
        display: false
      },
      title: {
        display: true,
        text: 'Powertrain Type'
      }
    }
  },
};

const LineChart = () => {
  return (
    <div style={{ 
      height: '400px', // Adjust this value to match your card height
      minHeight: '300px',
      position: 'relative'
    }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;