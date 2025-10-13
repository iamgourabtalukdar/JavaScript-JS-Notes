const apiBaseURL = "https://crud-api-4tam.onrender.com/api";

const studentForm = document.getElementById("student-form");
const errorElem = document.getElementById("error");

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {
    address: {},
  };
  for (const [key, value] of formData) {
    if (["city", "country", "pin"].includes(key)) {
      if (value) {
        payload["address"][key] = value;
      }
    } else {
      payload[key] = value;
    }
  }

  try {
    const resp = await fetch(`${apiBaseURL}/students`, {
      method: "POST",
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
