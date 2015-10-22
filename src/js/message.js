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
