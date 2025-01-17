// console.log(5 !== 5);

// console.log(5 > 4 && 6 > 7);

// console.log(4 && -2 && 0 && 6);
// console.log(0 && -2);

// console.log(4 || -2 || 0 || 6);
// console.log(0 || -2 || 6);

console.log((0 && -2) || (0 && 6) || 0);

console.log(undefined && null && 0 && 4);
console.log(undefined || (null && 4) || 0);
if (4 || 0) {
  console.log(true);
} else {
  console.log(false);
}
