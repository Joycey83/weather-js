const displayWeatherInfo = function (response) {
  console.log(response.data);
  let cityName = document.querySelector("#city-name");
  let tempNum = document.querySelector("#temperature");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityNum = document.querySelector("#humidity");
  let windSpeedNum = document.querySelector("#wind-speed");
  cityName.innerHTML = response.data.name;
  tempNum.innerHTML = Math.round(response.data.main.temp);
  weatherDescription.innerHTML = response.data.weather[0].description;
  humidityNum.innerHTML = response.data.main.humidity;
  windSpeedNum.innerHTML = Math.round(response.data.wind.speed);
};

let apiKey = "5dd071644aff4379355022a20839a99e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeatherInfo);
