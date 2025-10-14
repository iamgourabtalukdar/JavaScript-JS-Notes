import { fetchSingleStudent } from "./student.js";
import { constructPayload } from "./utils.js";

const studentForm = document.getElementById("student-form");

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const payload = constructPayload(formData);
  try {
    await updateStudent(payload);
    window.location.href = "./index.html";
  } catch (err) {
    console.error(err);
  }
});

function setInputValue({ name, dob, gender, address }) {
  const { city, country, pin } = address || {};
  const nameElem = document.getElementById("name");
  const dobElem = document.getElementById("dob");
  const genderElem = document.getElementById("gender");
  const countryElem = document.getElementById("country");
  const cityElem = document.getElementById("city");
  const pinElem = document.getElementById("pin");

  nameElem.value = name || "";
  dobElem.value = dob ? dob.split("T")[0] : "";
  genderElem.value = gender || "";
  countryElem.value = country || "";
  cityElem.value = city || "";
  pinElem.value = pin || "";
}
//load student data
async function loadStudent() {
  try {
    const id = new URLSearchParams(window.location.search).get("id");
    const student = await fetchSingleStudent(id);
    setInputValue(student);
  } catch (err) {
    console.error(err);
  }
}

loadStudent();
