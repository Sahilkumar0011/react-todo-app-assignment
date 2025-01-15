import React from 'react';
import '../styles/WeatherForecast.css';

const WeatherForecast = ({ forecastData }) => {
  if (!forecastData) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="weather-forecast-container">
      <h2 className="weather-forecast-header">3-Day Weather Forecast</h2>
      <ul className="weather-forecast-list">
        {forecastData.map((day, index) => (
          <li key={index} className="weather-forecast-item">
            <span className="date">{day.date}</span>:
            <span className="condition">{day.weather}</span>,
            <span className="temperature">{day.temperature}°C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
