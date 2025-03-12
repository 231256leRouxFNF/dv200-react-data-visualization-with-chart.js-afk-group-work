import { lineData, barData, pieData } from './data/ChartData';
import LineChart from './components/Charts/LineChart';
import './styles/dashboard.css';

function App() {
  return (
    <div className="dashboard">
      <h1>Data Visualization Dashboard</h1>
      <div className="chart-grid">
        <div className="chart-card">
          <LineChart data={lineData} />
        </div>
        {/* Add other charts */}
      </div>
    </div>
  );
}