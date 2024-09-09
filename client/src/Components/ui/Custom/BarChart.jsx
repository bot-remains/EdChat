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
            position: 'top',
            labels: {
              font: {
                size: 12,
                weight: 'bold',
              },
              color: '#333',
            },
          },
          title: {
            display: false,
            font: {
              size: 16,
            },
            color: '#333',
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
          },
          x: {
            ticks: {
              color: '#4B5563',
              font: {
                size: 12,
              },
            },
          },
        },
        options: {
          plugins: {
            legend: {
              labels: {
                position: 'bottom',
                align: 'left',
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
