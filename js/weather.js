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
};
// Search Engine functions
const search = function (city) {
  let apiKey = "5dd071644aff4379355022a20839a99e";
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
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let tempNum = document.querySelector("#temperature");
  tempNum.innerHTML = Math.round(fahrenheitTemp);
};

const displayCelsiusTemp = function (event) {
  event.preventDefault();
  let tempNum = document.querySelector("#temperature");
  tempNum.innerHTML = Math.round(celsiusTemperature);
};

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

search("London");
