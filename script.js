const apiKey = "18c44e783057192869d84cc7b7c860c7"; // replace with your real OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherInfo = document.getElementById("weather-info");

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found.");
            return;
        }

        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} km/h`;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherInfo.style.display = "block";
    } catch (error) {
        alert("Error fetching weather data. Check console.");
        console.error(error);
    }
}
