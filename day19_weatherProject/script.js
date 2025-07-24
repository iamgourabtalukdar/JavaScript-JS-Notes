const updateUI = (data) => {
  // Main weather display elements
  const locationName = document.getElementById("locationName");
  const locationDetails = document.getElementById("locationDetails");
  const localTime = document.getElementById("localTime");
  const weatherIcon = document.getElementById("weatherIcon");
  const temperature = document.getElementById("temperature");
  const conditionText = document.getElementById("conditionText");
  const lastUpdated = document.getElementById("lastUpdated");

  // Detailed info elements
  const feelsLike = document.getElementById("feelsLike");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const windDir = document.getElementById("windDir");
  const pressure = document.getElementById("pressure");
  const uvIndex = document.getElementById("uvIndex");
  const visibility = document.getElementById("visibility");

  const { location, current } = data;
  // Update main summary panel
  locationName.textContent = location.name;
  locationDetails.textContent = `${location.region || "-"}, ${
    location.country
  }`;
  localTime.textContent = `Local Time: ${new Date(
    location.localtime
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  weatherIcon.src = `https:${location.icon || current.condition.icon}`; // Ensure protocol is present
  weatherIcon.alt = current.condition.text;
  temperature.innerHTML = `${Math.round(current.temp_c)}&deg;C`;
  conditionText.textContent = current.condition.text;
  lastUpdated.textContent = current.last_updated.split(" ")[1]; // Just show the time

  // Update details grid
  feelsLike.innerHTML = `${Math.round(current.feelslike_c)}&deg;C`;
  humidity.textContent = `${current.humidity}%`;
  wind.textContent = `${current.wind_kph} kph`;
  windDir.textContent = `Direction: ${current.wind_dir}`;
  pressure.textContent = `${current.pressure_mb} mb`;
  uvIndex.textContent = current.uv;
  visibility.textContent = `${current.vis_km} km`;
};

const showError = (error) => {
  const errorBox = document.getElementById("errorBox");
  errorBox.classList.remove("hidden");
  errorBox.innerText = error;
};
const hideError = () => {
  const errorBox = document.getElementById("errorBox");
  errorBox.classList.add("hidden");
};

const fetchWeatherData = (city = "new delhi") => {
  hideError();
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=4d5689b3d6f64bccaf1145422252107&q=${city}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      if ("error" in data) {
        throw new Error(data.error.message);
      }
      updateUI(data);
    })
    .catch((error) => {
      showError(error);
    });
};

const searchFormElem = document.getElementById("searchForm");
searchFormElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchFormData = new FormData(searchFormElem);
  const city = searchFormData.get("cityInput");

  fetchWeatherData(city);
});

fetchWeatherData();
