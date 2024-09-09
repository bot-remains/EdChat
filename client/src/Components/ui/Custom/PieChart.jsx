import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => (
  <Pie
    data={data}
    options={{
      plugins: {
        legend: {
          position: 'bottom',
          align: 'center',
          labels: {
            font: {
              size: 12,
              weight: 'bold',
            },
            color: '#333',
          },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}%`;
            },
          },
        },
      },
      responsive: false,
      maintainAspectRatio: false,
    }}
    height={300}
  />
);

export default PieChart;
