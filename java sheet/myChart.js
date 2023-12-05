var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type:'polarArea',
    data:{
        labels: ['Poor Service', 'Standard Service', 'Average Service', 'Excellent Job', 'Outstanding Service', 'Moderate Performance'],
        datasets: [{
            label: 'Traffic Source',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255,99,132,1',
                'rgba(54,162,235,1',
                'rgba(255,206,86,1',
                'rgba(75,192,192,1',
                'rgba(153,102,255,1',
                'rgba(255,159,64,1',
                

            ],
             
        }] 
    },
    options: {
      responsive: true,
    }
  });

var earning = new Chart(earning, {
    type:'bar',
    data:{
        labels: ['Important Notice', 'Daily Service', 'Average Service', 'Urgent Service', 'Monthly Service', 'Special Occasion'],
        datasets: [{
            label: '# of Earning',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255,99,132,1',
                'rgba(54,162,235,1',
                'rgba(255,206,86,1',
                'rgba(75,192,192,1',
                'rgba(153,102,255,1',
                'rgba(255,159,64,1',
                

            ],
             
        }] 
    },
    options: {
      responsive: true,
    }
  });