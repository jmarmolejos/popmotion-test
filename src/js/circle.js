var CircleChart = function(settings) {
  this.circleActor = new ui.Actor({
    element: "#circle-path",
    values: {
      length:0
    }
  });
};

CircleChart.prototype.drawChart = function(complete) {
  var drawLine = new ui.Tween({
    duration: 600,
    values: {
      length: complete
    }
  });
  
  this.circleActor.start(drawLine);
}

module.exports = CircleChart;
