function eventHandler(msg) {
  console.log(msg);
}

const h1Elem = document.querySelector("h1");

h1Elem.onmouseleave = () => {
  eventHandler("mouse leave");
};

h1Elem.onclick = () => {
  eventHandler("click");
};

h1Elem.onmouseenter = () => {
  eventHandler("mouse enter");
};
