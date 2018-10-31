const PubSub = require("../helpers/pub_sub.js");

const BucketListForm = function(form) {
  this.form = form
}

// bindEvents
BucketListForm.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (event) => {
    this.handleSubmit(event);
  });
};

// handleSubmit
// ask if in this case evt and event are referencing two different things
BucketListForm.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketListItem = this.createBucketListItem(event.target)
  PubSub.publish("FormView:list-item-submitted", newBucketListItem)
  event.target.reset();

};

BucketListForm.prototype.createBucketListItem = function (form) {
  const newBucketListItem = {
    title: form.title.value,
    description: form.description.value,
    location: form.location.value,
    deadline: form.deadline.value,
    image: form.image.value
  }
  return newBucketListItem;
};



module.exports = BucketListForm;
