// src/redux/thunks.js
import { setWeatherData, setWeatherError } from './tasksSlice';
import { fetchWeatherData } from '../utils/api';

export const fetchWeather = (location) => async (dispatch) => {
  try {
    const weatherData = await fetchWeatherData(location);
    dispatch(setWeatherData(weatherData));
  } catch (error) {
    dispatch(setWeatherError(error.message));
  }
};
