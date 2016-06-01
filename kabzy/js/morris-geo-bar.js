$(function() {
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '01-01-2016',
            a: 100
        }, {
            y: '02-01-2016',
            a: 75
        }, {
            y: '03-01-2016',
            a: 50
        }, {
            y: '04-01-2016',
            a: 75
        }, {
            y: '05-01-2016',
            a: 50
        }, {
            y: '06-01-2016',
            a: 75
        }, {
            y: '07-01-2016',
            a: 100
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Times entered'],
        hideHover: 'auto',
        barColors: ["#5cb85c"],
        resize: true
    });

});
