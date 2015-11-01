var CircleChart = function(settings) {
  this.circleActor = new ui.Actor({
    element: "#circle-path",
    values: {
      length:0
    }
  });
};

CircleChart.prototype.drawChart = function() {
  var drawLine = new ui.Tween({
    duration: 2000,
    values: {
      length: 100
    }
  });
  console.log("about to start.");
  this.circleActor.start(drawLine);
}

module.exports = CircleChart;
