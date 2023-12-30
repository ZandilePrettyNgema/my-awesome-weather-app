function updateTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "5e64tc31ab6af99145eb23afo3d1f8c0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(updateTemperature);
}
function handleSearchInput(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#city-name-input");
  searchCity(searchElement.value);
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", handleSearchInput);
searchCity("Durban");
