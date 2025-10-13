// debugger;
// async function abc() {
//   console.log("hello");
//   return 5;
// }
// const returnVal = abc();

// returnVal
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(returnVal);

const apiBaseURL = "https://crud-api-4tam.onrender.com/api";

function fetchStudents() {
  const respPromise = fetch(`${apiBaseURL}/students`);
  const jsonPromise = respPromise.then((resp) => resp.json());
  jsonPromise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function fetchStudents2() {
  try {
    const resp = await fetch(`${apiBaseURL}/students`);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// fetchStudents();
debugger;
fetchStudents2();

display();

//
//
//
//
//

// callback queue ()
