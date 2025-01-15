const API_KEY = '7851e3b635a3493084a114415251401';  
const BASE_URL = 'http://api.weatherapi.com/v1';

const fetchCurrentWeather = async (location) => {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    
    // Check if the API returned a valid data object
    if (!data || !data.current) {
      throw new Error('Invalid data received from the weather API');
    }

    return {
      temperature: data.current.temp_c,
      weather: data.current.condition.text,
      city: data.location.name,
      country: data.location.country,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error(error.message);  
  }
};

// Function to fetch 7-day weather forecast for a given location
const fetchWeatherForecast = async (location, days = 7) => {
  try {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather forecast');
    }

    const data = await response.json();
    
    // Check if the API returned a valid data object
    if (!data || !data.forecast) {
      throw new Error('Invalid data received from the weather API');
    }

    return data.forecast.forecastday.map((day) => ({
      date: day.date,
      temperature: day.day.avgtemp_c,
      weather: day.day.condition.text,
    }));
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw new Error(error.message); 
  }
};

// Function to search for cities by name
const searchCities = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${query}`);
    
    if (!response.ok) {
      throw new Error('Failed to search for cities');
    }

    const data = await response.json();
    
    // Check if the API returned valid city data
    if (!data || data.length === 0) {
      throw new Error('No cities found');
    }

    return data.map((city) => ({
      name: city.name,
      country: city.country,
      region: city.region,
    }));
  } catch (error) {
    console.error('Error searching cities:', error);
    throw new Error(error.message);  
  }
};


export const fetchWeather = fetchCurrentWeather;
export const fetchForecast = fetchWeatherForecast;
export const searchCitiesByName = searchCities;
