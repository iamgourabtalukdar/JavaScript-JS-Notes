const apiBaseURL = "https://crud-api-4tam.onrender.com/api";
const id = new URLSearchParams(window.location.search).get("id");
const studentForm = document.getElementById("student-form");

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {
    address: {},
  };
  for (const [key, value] of formData) {
    if (["city", "country", "pin"].includes(key)) {
      payload["address"][key] = value;
    } else {
      payload[key] = value;
    }
  }
  try {
    const resp = await fetch(`${apiBaseURL}/students/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();

    if (data.errors) {
      errorElem.innerHTML = data.errors.message || "An error occurred";
      return;
    }

    window.location.href = "/";
  } catch (err) {
    console.error(err);
    errorElem.innerHTML = err.message;
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
  const resp = await fetch(`${apiBaseURL}/students/${id}`);
  const data = await resp.json();
  setInputValue(data);
}

loadStudent();
