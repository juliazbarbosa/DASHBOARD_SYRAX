let myChart = document.getElementById("myChart").getContext('2d');
let myChart2 = document.getElementById("myChart2").getContext('2d');

const paletaCores = ['#ff780a', '#2e9e5b', '#ffb84d', '#4c9aff', '#a78bfa', '#f472b6'];

new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ['Celulares', 'Notebooks', 'Tablets', 'Acessórios', 'Relógios', 'Áudio'],
      datasets: [{
        label: 'Quantidade de vendas',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: paletaCores,
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(myChart2, {
    type: 'doughnut',
    data: {
      labels: ['Celulares', 'Notebooks', 'Tablets', 'Acessórios', 'Relógios', 'Áudio'],
      datasets: [{
        label: 'Quantidade de vendas',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: paletaCores,
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
