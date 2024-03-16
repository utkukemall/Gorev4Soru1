document.addEventListener('DOMContentLoaded', function() {
  var data = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz"],
    datasets: [{
        label: "Kazanç",
        data: [10, 30, 80, 43, 42, 10, 45],
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        borderColor: 'rgba(255, 165, 0, 0.5)',
      },
      {
        label: "Kayıp",
        data: [-10, -25, -17, -8, -10, -15, -45],
        backgroundColor: '#f44336', // Material Design "Red"
        borderColor: '#f44336',
      }
    ]
  };

  // Grafik ayarları
  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            var label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          }
        }
      }
    }
  };

  // Grafik boyutlarını ayarlama
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
    width: 400,
    height: 250
  });
});
