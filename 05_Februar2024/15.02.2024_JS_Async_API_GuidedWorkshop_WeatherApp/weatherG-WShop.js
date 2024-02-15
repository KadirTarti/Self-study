async function fetchWeatherData() {
  const cityName = document.getElementById("city-input").value.toLowerCase();
  console.log(cityName);
  const apiKey = "f66ce15566f9ac8343e1c6598fef2fff"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url); // network
    const data = await response.json(); // promise
    console.log("result", data);

    const date = new Date().toDateString();
    const weatherInfo = `${date} ${cityName.toUpperCase()} Temperature: ${
      data.main.temp} °C`;

   


    document.getElementById("weather-info").textContent = weatherInfo;
    const weatherIcon = document.querySelector('.weather-icon img');
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.style.display = 'block';


    var z = document.createElement('div');
    z.innerHTML = `The wind value in ${cityName} is ${data.wind.speed}`;
    const weatherWind = document.querySelector('.weather-icon').appendChild(z)


 // data.wind.speed


    // data.sys.country
    // data.weather[0].icon
    //http://openweathermap.org/img/w/01d.png
  } catch (err) {
    console.log("err", err);
  }
}

document.onload = () => {
  document
    .querySelector(".search-button")
    .addEventListener("click", fetchWeatherData);
};
