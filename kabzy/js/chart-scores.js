    Chart.types.Doughnut.extend({
        name: "DoughnutTextInside",
        showTooltip: function() {
            this.chart.ctx.save();
            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
            this.chart.ctx.restore();
        },
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

            var width = this.chart.width,
                height = this.chart.height;

            var fontSize = (height / 50).toFixed(2);
            this.chart.ctx.font = fontSize + "em Helvetica Neue";
            this.chart.ctx.textBaseline = "middle";

            var text =this.segments[0].value+"%",
                textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
                textY = height / 2;

            this.chart.ctx.fillText(text, textX, textY);
        }
    });

    Chart.types.Doughnut.extend({
        name: "DoughnutTextInsideOneVal",
        showTooltip: function() {
            this.chart.ctx.save();
            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
            this.chart.ctx.restore();
        },
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

            var width = this.chart.width,
                height = this.chart.height;

            var fontSize = (height / 50).toFixed(2);
            this.chart.ctx.font = fontSize + "em Helvetica Neue";
            this.chart.ctx.textBaseline = "middle";

            var text = Math.floor(this.segments[0].value),
                textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
                textY = height / 2;

            this.chart.ctx.fillText(text, textX, textY);
        }
    });


    var data = [{
        value: 0,
        color: "#FF8800"
    }, {
        value: 100,
        color: "#4D5360"
    }];

    var options = {
        responsive: true,
        animateRotate : false,
        percentageInnerCutout: 80,
        segmentShowStroke : false
    };

    data[0].color = "#FF8800";
    data[1].color = "#4D5360";
    var safetyDonutChart = new Chart($('#safetyDonut')[0].getContext('2d')).DoughnutTextInside(data, options);

    data[0].color = "#02D914";
    data[1].color = "#4D5360";
    var ecoDonutChart = new Chart($('#ecoDonut')[0].getContext('2d')).DoughnutTextInside(data, options);

    data[0].color = "#0c6105";
    data[1].color = "#4D5360";
    var speedingDonutChart = new Chart($('#speedingDonut')[0].getContext('2d')).DoughnutTextInside(data, options);

    data[0].color = '#214EFF';
    data[1].color = "#4D5360";
    var idleDonutChart = new Chart($('#idleDonut')[0].getContext('2d')).DoughnutTextInside(data, options);

    var data = [{
        value: 0.1,
        color: "#1da228"
    }];
    var aggLaneDonutChart = new Chart($('#aggLaneDonut')[0].getContext('2d')).DoughnutTextInsideOneVal(data, options);

    var data = [{
        value: 0.1,
        color: "#630057"
    }];
    var harshCDonutChart = new Chart($('#harshCDonut')[0].getContext('2d')).DoughnutTextInsideOneVal(data, options);

    var data = [{
        value: 0.1,
        color: "#f51d00"
    }];
    var harshBDonutChart = new Chart($('#harshBDonut')[0].getContext('2d')).DoughnutTextInsideOneVal(data, options);

    var data = [{
        value: 0.1,
        color: "#3c78ff"
    }];
    var harshADonutChart = new Chart($('#harshADonut')[0].getContext('2d')).DoughnutTextInsideOneVal(data, options);

 



