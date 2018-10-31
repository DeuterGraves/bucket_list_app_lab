const BucketList = require("./models/bucket_data.js");
const BucketListView = require("./views/bucket_list_view.js");
const BucketListItemView = require("./views/bucket_list_item.js");


document.addEventListener('DOMContentLoaded', () => {

const bucketListViewContainer = document.querySelector('section#bucket');
const bucketListView = new BucketListView(bucketListViewContainer);
bucketListView.bindEvents();





const url = 'http://localhost:3000/api/bucketlist';
const bucketList = new BucketList(url);
bucketList.getData();

});
