// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function myFill(fillValue) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fillValue;
//   }
// }
// arr.fill = myFill;

// arr.fill = function(){
//      for (let i = 0; i < arr.length; i++) {
//        arr[i] = fillValue;
//      }
// }

// arr.fill = (fillValue) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fillValue;
//   }
//   return arr;
// };

// console.log(arr.fill(0));
// console.log(arr);

arr.includes = (value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(arr.includes(3));
