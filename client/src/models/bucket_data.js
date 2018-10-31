const Request = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");


const BucketList = function (url) {
  this.url = url;
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:list-item-submitted", (event) => {
    this.postBucketListItem(event.detail);
  })
};


BucketList.prototype.getData = function () {
  this.request.get()
  .then((bucketList) => {
    PubSub.publish('BucketList:data-ready', bucketList)
    console.log(bucketList);
  })
  .catch(console.error);
};

// postBucketListItem
BucketList.prototype.postBucketListItem = function (bucketListItem) {
  const request = new Request(this.url)
  request.post(bucketListItem)
  .then((bucketListItems) => {
    PubSub.publish('BucketList:data-ready', bucketListItems)

  })
  .catch(console.error);

};

module.exports = BucketList;
