const displayWeatherInfo = function (response) {
  console.log(response.data.main.temp);
};

let apiKey = "5dd071644aff4379355022a20839a99e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeatherInfo);
