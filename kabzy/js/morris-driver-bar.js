$(function() {
    Morris.Bar({
        element: 'morris-driver-bar-chart',
        data: [],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Driver Scores'],
        hideHover: 'auto',
        barColors: ["#5cb85c"],
        resize: true
    });

});
