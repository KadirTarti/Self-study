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
    const weatherInfo = `${date} ${cityName.toUpperCase()} Temperature: ${data.main.temp} °C`;
    

    const oldWindValueElements = document.querySelectorAll('.weather-wind-value');
    oldWindValueElements.forEach(element => element.remove());

    let windDiv = document.createElement('div');
    windDiv.className = 'weather-wind-value'; // Add a class to identify this element later
    windDiv.innerHTML = `Wind: ${data.wind.speed}  km/h`;
    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.appendChild(windDiv);
    

    weatherIcon.appendChild(windDiv).style.color='white'
    document.getElementById("weather-info").textContent = weatherInfo;
    document.getElementById("weather-info").style.fontSize = "1.2rem";
    document.getElementById("weather-info").style.fontWeight = "700";
    document.getElementById("weather-info").style.color = "white";     


    document.getElementById("weather-info").textContent = weatherInfo;
    const weatherIcon2 = document.querySelector('.weather-icon img');
    weatherIcon2.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon2.style.display = 'block';
    weatherIcon2.style.size= '25px';

    const cityInputElement = document.getElementById("city-input");   
    cityInputElement.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the default action of the Enter key
        fetchWeatherData();
      }
    });

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

