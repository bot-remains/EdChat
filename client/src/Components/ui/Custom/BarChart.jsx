import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ data }) => {
  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'rectRounded',
              font: {
                size: 10,
                weight: 'bold',
              },
              color: '#333',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#4B5563',
              font: {
                size: 12,
              },
            },
            grid: {
              borderDash: [5, 5],
              borderColor: '#ddd',
            },
          },
          x: {
            ticks: {
              color: '#4B5563',
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
