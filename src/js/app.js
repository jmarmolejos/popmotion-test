var Message = require('./message')
var CircleChart = require('./circle')

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

//loop();

var circleChart = new CircleChart();
circleChart.drawChart();
