import React from 'react';
import '../styles/WeatherInfo.css';

const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return <div className="weather-info-loading">Loading...</div>;  // Show loading message while data is being fetched
  }

  const { temperature, weather: weatherCondition, city, country } = weather || {};

  if (!city || !country || !temperature || !weatherCondition) {
    return <div className="weather-info-error">Unable to fetch weather information. Please try again later.</div>;  // Handle cases with missing data
  }

  return (
    <div className="weather-info-container">
      <h2 className="weather-info-header">Weather in {city}, {country}</h2>
      <div className="weather-info-details">
        <p><strong>Condition:</strong> {weatherCondition}</p>
        <p><strong>Temperature:</strong> {temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
