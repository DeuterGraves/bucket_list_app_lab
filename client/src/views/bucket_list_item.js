const PubSub = require("../helpers/pub_sub.js");

const BucketListItemView = function (container) {
  this.container = container
}


BucketListItemView.prototype.render = function (bucketListItem) {
  const bucketListItemContainer = document.createElement('div');
  bucketListItemContainer.id = 'list-item';

  const title = this.createHeading(bucketListItem.title);
  // append item created with create heading to the container

// console.log("render called", bucketListItem.title);

//  description
  const description = this.createTextElement("p", bucketListItem.description)

// location - not all
const location = this.ifCreateTextElement("p", bucketListItem.location)
//  deadline - not all
const deadline = document.createElement("p");
if (!bucketListItem.deadline){
  deadline.textContent = ""
}else{
  // call createTextElement if there is content - pass elementType and text
  deadline.textContent = `Deadline: ${bucketListItem.deadline} `
}

// image - not all
const image = document.createElement("img");
if (!bucketListItem.image){
  image.textContent = ""
}else{
  // call createTextElement if there is content - pass elementType and text
  image.setAttribute("src", bucketListItem.image)
  image.setAttribute("alt", `${bucketListItem.title} `)
  image.setAttribute("width", "200")
}


const lineBreak = document.createElement("hr")

bucketListItemContainer.appendChild(title);
bucketListItemContainer.appendChild(description)
bucketListItemContainer.appendChild(location)
bucketListItemContainer.appendChild(deadline)
bucketListItemContainer.appendChild(image)
bucketListItemContainer.appendChild(lineBreak)

// append this conatiner to the document
this.container.appendChild(bucketListItemContainer)

};

BucketListItemView.prototype.createHeading= function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  // console.log("create heading called");
  return heading;
};

BucketListItemView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};




//  refactor attempt
// location - not all



BucketListItemView.prototype.ifCreateTextElement = function (elementType, dataAccessed) {

const element = document.createElement(elementType);
if (!dataAccessed){
  element.textContent = ""
}else{
  // call createTextElement if there is content - pass elementType and text
  element.textContent = dataAccessed
}
 return element
};


module.exports = BucketListItemView;
