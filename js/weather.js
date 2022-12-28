const formatDate = function (timestamp) {
  let date = new Date(timestamp);
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

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

  return `${day} ${hour}:${minutes}`;
};

const formatForecastDay = function (dateTimeStamp) {
  let date = new Date(dateTimeStamp * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
};

const displayForecast = function (response) {
  let dailyForecast = response.data.daily;
  let weatherForecastElement = document.querySelector("#weather-forecast");

  let forecastHTML = `<div class="row">`;

  dailyForecast.forEach(function (forecastDay) {
    forecastHTML =
      forecastHTML +
      ` 

<div class="col-auto mb-3">
  <div class="card card-border">
    <div class="card-body">
      <h3 class="weather-forecast-day">${formatForecastDay(forecastDay.dt)}</h3>
      <img
        src="icons/${forecastDay.weather[0].icon}.svg"
        alt=""
        width="42"
      />
      <div class="weather-forecast-temperature">
        <span class="weather-temperature-max">${Math.round(
          forecastDay.temp.max
        )}˚|</span
        ><span class="weather-temperature-min">${Math.round(
          forecastDay.temp.min
        )}˚</span>
      </div>
    </div>
  </div>
</div>

`;
  });

  forecastHTML = forecastHTML + `</div>`;
  weatherForecastElement.innerHTML = forecastHTML;
};

const getForecastInfo = function (coordinates) {
  console.log(coordinates);
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let lat = coordinates.lat;
  let long = coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
};

const displayWeatherInfo = function (response) {
  console.log(response.data);
  let cityName = document.querySelector("#city-name");
  let tempNum = document.querySelector("#temperature");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityNum = document.querySelector("#humidity");
  let windSpeedNum = document.querySelector("#wind-speed");
  let displayDateTime = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  cityName.innerHTML = response.data.name;

  celsiusTemperature = response.data.main.temp;
  tempNum.innerHTML = Math.round(celsiusTemperature);
  weatherDescription.innerHTML = response.data.weather[0].description;
  humidityNum.innerHTML = response.data.main.humidity;
  windSpeedNum.innerHTML = Math.round(response.data.wind.speed);
  displayDateTime.innerHTML = formatDate(response.data.dt * 1000);
  let icon = response.data.weather[0].icon;
  iconElement.setAttribute("src", `icons/${icon}.svg`);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecastInfo(response.data.coord);
};

// Search Engine functions
const search = function (city) {
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherInfo);
};

const searchCity = function (event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name-input");
  search(cityInput.value);
};

let celsiusTemperature = null;

// Search engine eventlistner
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

// Convert convert celsius to fahrenheit function

const displayFahrenheitTemp = function (event) {
  event.preventDefault();
  // remove the active class for the celsius link
  celsiusLink.classList.remove("active");
  // add the active class for the  fahrenheit Link
  fahrenheitLink.classList.add("active");
  let tempNum = document.querySelector("#temperature");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  tempNum.innerHTML = Math.round(fahrenheitTemp);
};

const displayCelsiusTemp = function (event) {
  event.preventDefault();
  // add the active class for the celsius link
  celsiusLink.classList.add("active");
  // remove the active class for the  fahrenheit Link
  fahrenheitLink.classList.remove("active");
  let tempNum = document.querySelector("#temperature");
  tempNum.innerHTML = Math.round(celsiusTemperature);
};

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

search("London");
