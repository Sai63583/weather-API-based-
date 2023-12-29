const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

async function getWeather() {
    const location = document.getElementById('location').value;

    const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric);
    const data = await response.json();

    if (data.cod === "404") {
        document.getElementById('weatherInfo').innerText = "Location not found";
    } else {
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    }
}