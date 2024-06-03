// script.js
document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'a9f28ae8cb3e62a1796961f8599f4a0e';
  const city = 'Delhi';

  async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  }

  function updateWeatherWidget(data) {
    const icon = document.getElementById('weather-icon');
    const cityElem = document.getElementById('city');
    const descriptionElem = document.getElementById('description');
    const temperatureElem = document.getElementById('temperature');

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const weatherIcon = data.weather[0].icon;

    icon.innerHTML = getWeatherIcon(weatherIcon);
    icon.className = 'weather-icon ' + getWeatherAnimationClass(weatherIcon);
    cityElem.textContent = data.name;
    descriptionElem.textContent = weatherDescription;
    temperatureElem.textContent = `${temperature}°C`;
  }

  function getWeatherIcon(icon) {
    const iconMap = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '🌤',
      '02n': '🌤',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '🌥',
      '04n': '🌥',
      '09d': '🌧',
      '09n': '🌧',
      '10d': '🌦',
      '10n': '🌦',
      '11d': '⛈',
      '11n': '⛈',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫',
      '50n': '🌫'
    };
    return iconMap[icon] || '❓';
  }

  function getWeatherAnimationClass(icon) {
    const animationMap = {
      '01d': 'sunny',
      '01n': 'sunny',
      '02d': 'sunny',
      '02n': 'sunny',
      '03d': 'cloudy',
      '03n': 'cloudy',
      '04d': 'cloudy',
      '04n': 'cloudy',
      '09d': 'rainy',
      '09n': 'rainy',
      '10d': 'rainy',
      '10n': 'rainy',
      '11d': 'thunderstorm',
      '11n': 'thunderstorm',
      '13d': 'snowy',
      '13n': 'snowy',
      '50d': 'mist',
      '50n': 'mist'
    };
    return animationMap[icon] || '';
  }

  fetchWeather().then(updateWeatherWidget);
});
