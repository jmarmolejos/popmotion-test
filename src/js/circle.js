var CircleChart = function(settings) {
  var thatCall = this.chartValueUpdated;
  var that = this;

  this.circleActor = new ui.Actor({
    element: "#circle-path",
    values: {
      length:0
    },
    onUpdate: function (output) {
      thatCall.apply(that, [output]);
    }
  });

  this.labelElement = document.body.querySelector("#chart-label")
};

CircleChart.prototype.drawChart = function(complete) {
  var drawLine = new ui.Tween({
    duration: 600,
    values: {
      length: complete
    }
  });
  this.circleActor.start(drawLine);
};

CircleChart.prototype.chartValueUpdated = function(output) {
  this.labelElement.textContent = Math.round(output.length) + '%';
};

module.exports = CircleChart;
