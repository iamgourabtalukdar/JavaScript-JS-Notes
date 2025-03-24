function eventHandler(msg) {
  console.log(msg);
}

const h1Elem = document.querySelector("h1");

function abc() {
  eventHandler("click");
}

h1Elem.addEventListener("click", abc);
h1Elem.addEventListener("dblclick", function () {
  eventHandler("double click");
});
h1Elem.addEventListener("copy", function () {
  eventHandler("The text is copied");
});
