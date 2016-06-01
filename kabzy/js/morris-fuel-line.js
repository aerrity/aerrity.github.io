$(function() {
    var graph = Morris.Line({
		element: 'morris-line',
		data: [
			{ y: '2012-01-01', a: 10},
			{ y: '2012-01-02', a: 75},
			{ y: '2012-01-03', a: 50},
			{ y: '2012-01-04', a: 75},
			{ y: '2012-01-05', a: 50},
			{ y: '2012-01-06', a: 75},
			{ y: '2012-01-07', a: 10}
		],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Fuel level']
	});
});
