import { apiBaseURL } from "./variables.js";

export async function addStudent(payload = {}) {
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
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Something went wrong!");
  }
}

export async function updateStudent(payload = {}) {
  try {
    const resp = await fetch(`${apiBaseURL}/students`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();

    if (data.errors) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Something went wrong!");
  }
}

export async function fetchStudents() {
  try {
    const resp = await fetch(`${apiBaseURL}/students`);
    const data = await resp.json();

    if (data.errors) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Something went wrong!");
  }
}

export async function fetchSingleStudent(id) {
  try {
    const resp = await fetch(`${apiBaseURL}/students/${id}`);
    const data = await resp.json();

    if (data.errors) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Something went wrong!");
  }
}
