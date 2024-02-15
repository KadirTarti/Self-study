function fetchWeatherData() {
  const cityName = document.getElementById('city-input').value;
  const apiKey = 'f66ce15566f9ac8343e1c6598fef2fff'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;


  new Date().toLocaleDateString(); // 11/16/2015

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('weather-info').textContent = `${new Date().toLocaleDateString()} ${cityName.toUpperCase()} Temperature: ${data.main.temp} °C`;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

document.getElementById('city-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      fetchWeatherData();
    }
  });

  document.getElementById('search-button').addEventListener('click', fetchWeatherData);