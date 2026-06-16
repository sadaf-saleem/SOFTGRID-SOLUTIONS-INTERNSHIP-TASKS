const apiKey = 'YOUR_API_KEY_HERE'; // Please insert your own OpenWeather API Key to run this locally
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const weatherBox = document.getElementById('weather-box');
const weatherDetails = document.getElementById('weather-details');
const errorBox = document.getElementById('error-box');

// Setup initial view state dynamically on script load
window.addEventListener('DOMContentLoaded', () => {
    errorBox.style.display = 'none';
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
});

async function checkWeather(city) {
    if (!city || !city.trim()) {
        alert("Please enter a valid city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Handle strict API invalid states or city not found
        if (Number(data.cod) === 404 || data.message === "city not found") {
            errorBox.style.display = 'block';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            return;
        }

        if (!response.ok) {
            throw new Error(data.message || "HTTP connection issue");
        }

        // Successfully received metrics -> Update UI state
        errorBox.style.display = 'none';
        weatherBox.style.display = 'block';
        weatherDetails.style.display = 'flex';

        // DOM dynamic updates
        document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
        document.getElementById('desc').textContent = data.weather[0].description;
        document.getElementById('humidity-val').textContent = `${data.main.humidity}%`;
        document.getElementById('wind-val').textContent = `${Math.round(data.wind.speed * 3.6)} Km/h`;

        // Weather asset condition handler
        const weatherIcon = document.getElementById('weather-icon');
        const condition = data.weather[0].main.toLowerCase();

        if (condition.includes('cloud')) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/414/414825.png';
        } else if (condition.includes('clear')) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/4814/4814268.png';
        } else if (condition.includes('rain') || condition.includes('drizzle')) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png';
        } else if (condition.includes('snow')) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/642/642102.png';
        } else if (condition.includes('mist') || condition.includes('haze') || condition.includes('smoke')) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png';
        } else {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/414/414825.png'; 
        }

    } catch (error) {
        console.error("Critical Fetch Error:", error);
        alert("Something went wrong with the connection. Please check console logs.");
    }
}

// Global Event Triggers
searchBtn.addEventListener('click', () => {
    checkWeather(cityInput.value);
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(cityInput.value);
    }
});