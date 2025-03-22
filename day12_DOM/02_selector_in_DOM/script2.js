// #### difference between NodeList & HTMLCollection

// # diff1
// const nodeList = document.querySelectorAll(".common1"); //NodeList
// const htmlCollection = document.getElementsByClassName("common1"); //HTMLCollection

// console.log(nodeList);
// console.log(htmlCollection);

// # diff2
const nodeList = document.querySelectorAll(".common1"); //NodeList
const htmlCollection = document.getElementsByClassName("common1"); //HTMLCollection

console.error("Before adding P tag dynamically");
console.log(nodeList);
console.log(htmlCollection);

// creating & inserting a p tag in html
const p = document.createElement("p");
p.innerText = "Hello";
p.classList.add("common1");
document.body.appendChild(p);

console.error("After adding P tag dynamically");
console.log(nodeList);
console.log(htmlCollection);

// htmlCollection gets updated automatically (when a new element is added in DOM)
// NodeList does not get updated (when a new element is added in DOM)

// forEach works on NodeList
// forEach does not works on HTMLCollection
