import { addStudent } from "./student.js";
import { constructPayload } from "./utils.js";

const studentForm = document.getElementById("student-form");
const errorElem = document.getElementById("error");

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const payload = constructPayload(formData);

  try {
    await addStudent(payload);
    window.location.href = "./index.html";
  } catch (err) {
    console.error(err);
    errorElem.innerHTML = err.message;
  }
});
