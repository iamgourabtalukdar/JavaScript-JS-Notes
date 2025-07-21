const a = myPromise();

// a.then(() => {
//   console.log(a);
//   console.log("Promise fulfilled");
// });
// a.catch(() => {
//   console.log("Promise rejected");
// });

// a.finally(() => {
//   console.log("promise settled");
// });

// const b = a
//   .then(() => {
//     console.log("Promise fulfilled");
//   })
//   .then(callback)
//   .then(callback)
//   .catch(callback)
//   .finally(callback);

// console.log(b);

// visualization of then
// class Promise {
//   then(callback) {
//     //checking if the promise is fulfilled
//     if (fulfilled) {
//       callback();
//       return new Promise((resolve, reject) => {});
//     }
//   }
// }

// const c = a.catch(() => {
//   console.log("Promise rejected");
// });

// console.log(c);

// const d = a.finally(() => {
//   console.log("promise settled");
// });

// console.log(d);

// const xhr = new XMLHttpRequest();

// xhr.addEventListener("load", () => {
//   console.log(xhr.response);
// });
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// xhr.send();

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     const json = res.json();
//     return json;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
