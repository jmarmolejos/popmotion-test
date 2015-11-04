(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Message = require('./message')
var CircleChart = require('./circle')

if (window.location.href.indexOf("index.html") !== -1) {
  var messages = [
    {
      title: "Lorem ipsum dolor",
      subTitle: "Vestibulum non dui ac augue"
    },
    {
      title: "Integer iaculis",
      subTitle: "Luctus justo sit amet porttitor"
    },
    {
      title: "Tristique volutpat",
      subTitle: "Mauris aliquet sit viverra"
    }
  ];

  var counter = 0

  var loop = function() {
    var message = new Message(messages[counter]);
    message.show();

    counter++;

    if(counter >= messages.length)
      counter = 0;

    setTimeout(loop, 2500)
  }

  loop();
};

if (window.location.href.indexOf("circle_chart.html") !== -1) {
  var circleChart = new CircleChart();
  circleChart.drawChart(75);
}

},{"./circle":2,"./message":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var Message = function (settings) {

  var initialValues = {
    y:40,
    opacity:0
  }

  this.mainTitleActor = new ui.Actor({
    element: "#main-title",
    values: initialValues
  });

  this.subTitleActor = new ui.Actor({
    element: "#sub-title",
    values: initialValues
  });

  this.sequence = new ui.Sequence();

  this.setTitle(settings.title, settings.subTitle);
}

Message.prototype.setTitle = function(title, subTitle) {
  var titleEl = document.body.querySelector("#main-title"),
    subTitleEl = document.body.querySelector("#sub-title"),
    containerEl = document.body.querySelector(".demo-container");

  titleEl.textContent = title;
  subTitleEl.textContent = subTitle;
}

Message.prototype.show = function () {
  var initialValues = {
    y:40,
    opacity:0
  };

  this.mainTitleActor.set(initialValues);
  this.subTitleActor.set(initialValues);

  this.sequence.clear()
    .do(this.mainTitleActor, this.showUpTween)
    .at('+=150')
    .do(this.subTitleActor, this.showUpTween)
    .start();
}

Message.prototype.showUpTween = new ui.Tween({
  values: {
    y: 0,
    opacity: 1
  },
  duration:600
});

module.exports = Message;

},{}]},{},[1]);
