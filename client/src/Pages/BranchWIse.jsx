// LineChart.js
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  const data = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'College A - Computer Science',
        data: [85, 90, 88, 92],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // Smooth lines
      },
      {
        label: 'College B - Mechanical Engineering',
        data: [80, 85, 82, 88],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
      {
        label: 'College C - Electrical Engineering',
        data: [75, 78, 80, 85],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Trend of Cutoff Marks Over the Years (Colleges & Branches)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4B5563',
        },
      },
      x: {
        ticks: {
          color: '#4B5563',
        },
      },
    },
  };

  return (
    <div className="p-6 mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">
        Yearly Cutoff Trends
      </h2>
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default LineChart;
