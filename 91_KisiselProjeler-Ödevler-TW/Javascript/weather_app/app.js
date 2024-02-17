const apiKey = "f66ce15566f9ac8343e1c6598fef2fff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=frankfurt";

async function checkWeather(){
    const response = await fetch(apiUrl+`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
}