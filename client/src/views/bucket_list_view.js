const PubSub = require('../helpers/pub_sub.js');
const BucketListItemView = require("./bucket_list_item.js");

const BucketListView = function (container) {
  this.container = container;
};


BucketListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-ready', (event) => {
  this.render(event.detail);
  });

  };

  BucketListView.prototype.render = function (bucketListItems) {
    this.container.innerHTML = '';
    const bucketListItemView = new BucketListItemView(this.container);
    bucketListItems.forEach((bucketListItem) => bucketListItemView.render(bucketListItem));

  };




module.exports = BucketListView;
