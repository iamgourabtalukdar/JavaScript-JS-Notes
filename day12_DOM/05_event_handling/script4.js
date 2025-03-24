function eventHandler1() {
  console.log("eventHandler1");
}
function eventHandler2() {
  console.log("eventHandler2");
}

const h1Elem = document.querySelector("h1");

h1Elem.addEventListener("click", eventHandler1);
h1Elem.addEventListener("click", eventHandler2);

h1Elem.onclick = eventHandler1;
h1Elem.onclick = eventHandler2; // this line will override -> h1Elem.onclick = eventHandler1

console.log(h1Elem);
