document.addEventListener('DOMContentLoaded', function() {
  var data = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz"],
    datasets: [
      {
        label: "Kazanılan",
        data: [10, 30, 80, 43, 42, 10, 45],
        data: [10, 30, 80, 43, 42, 10, 45],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Orange
        borderColor: 'rgba(255, 165, 0, 0.5)',
      },
      {
        label: "Kaybedilen",
        data: [-10, -25, -17, -8, -10, -15, -45],
        backgroundColor: '#f44336', // Kırmızı
        borderColor: '#f44336',
      },
    ],
  };

  // Grafik seçenekleri
  var options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            return value + "k";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    legend: {
      display: false,
    },
    elements: {
      bar: {
        borderRadius: 5,
      },
    },
  };

  // Grafik oluşturma
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});
