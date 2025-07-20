const ctx = document.getElementById('myChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(0, 123, 255, 0.3)');
gradient.addColorStop(1, 'rgba(0, 123, 255, 0)');

const data = {
  labels: Array.from({length: 22}, (_, i) => i),
  datasets: [
    {
      label: 'Main Line',
      data: [5, 10, 15, 14, 13, 15, 20, 40, 50, 30, 15, 10, 12, 18, 38, 45, 44, 42, 38, 36, 0, 0],
      fill: true,
      backgroundColor: gradient,
      borderColor: '#007bff',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#007bff'
    },
    {
      label: 'Secondary Line',
      data: [25, 24, 20, 22, 24, 26, 27, 29, 28, 24, 20, 16, 15, 17, 35, 40, 30, 28, 30, 34, 0, 0],
      fill: false,
      borderColor: '#ccc',
      tension: 0.4
    }
  ]
};

new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 60
      }
    }
  }
});
