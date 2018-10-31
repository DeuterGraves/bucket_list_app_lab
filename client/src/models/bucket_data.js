const Request = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");


const BucketList = function (url) {
  this.url = url;
  this.request = new Request(this.url);
};



BucketList.prototype.getData = function () {
  this.request.get()
  .then((bucketList) => {
    PubSub.publish('BucketList:data-ready', bucketList)
    console.log(bucketList);
  })
  .catch(console.error);
};

module.exports = BucketList;
