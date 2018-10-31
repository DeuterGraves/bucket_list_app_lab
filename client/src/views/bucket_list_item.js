const PubSub = require("../helpers/pub_sub.js");

const BucketListItemView = function (container) {
  this.container = container
}


BucketListItemView.prototype.render = function (bucketListItem) {
  const bucketListItemContainer = document.createElement('div');
  bucketListItemContainer.id = 'list-item';

  const title = this.createHeading(bucketListItem.title);
  // append item created with create heading to the container
  bucketListItemContainer.appendChild(title);

console.log("render called", bucketListItem.title);

// append this conatiner to the document
this.container.appendChild(bucketListItemContainer)

};

BucketListItemView.prototype.createHeading= function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;

  console.log("create heading called");

};

module.exports = BucketListItemView;
