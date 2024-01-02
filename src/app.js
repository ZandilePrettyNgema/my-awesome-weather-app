function updateTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElememnt = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#weather-icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formattedDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElememnt.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-icon"/>`;
}
function formattedDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
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

function displayWeatherForecast() {
  let day = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  day.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` <div class = "weather-forecast-data">
      <div class="weather-forecast-day">${day}</div>
          <div class="weather-forecast-icon">⛅</div>
          <div class="weather-forecast-tempearatures">
            <span class="weather-forecast-max-temp"
              ><strong>23&deg;</strong></span
            >
            <span class="weather-forecast-min-temperature">21&deg;</span>
          </div> 
          </div>`;
  });

  let forecastElement = document.querySelector("#weather-forecast");
  forecastElement.innerHTML = forecastHtml;
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", handleSearchInput);
searchCity("Durban");
displayWeatherForecast();
