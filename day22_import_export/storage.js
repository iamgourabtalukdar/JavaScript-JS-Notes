const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
];

const students = [
  { roll: 1, firstName: "rohit", age: 25 },
  { roll: 2, firstName: "ankit", age: 26 },
  { roll: 3, firstName: "sumit", age: 24 },
];

const teachers = [
  { firstName: "sunil", age: 35 },
  { firstName: "mahesh", age: 36 },
  { firstName: "suresh", age: 37 },
];

// named export - multiple values can be exported from a file
export { users, students };
export default teachers;
