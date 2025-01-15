import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import WeatherInfo from '../components/WeatherInfo';
import WeatherForecast from '../components/WeatherForecast'; // Add new component to display forecast
import Sidebar from '../components/Sidebar'; // Import Sidebar component

import { fetchWeather, fetchForecast } from '../utils/api';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/storage';
import '../styles/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority); // Get selected priority from Redux store
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Filter tasks based on selected priority
  const filteredTasks = selectedPriority
    ? tasks.filter((task) => task.priority === selectedPriority)
    : tasks;

  useEffect(() => {
    // Load tasks from local storage
    const storedTasks = getFromLocalStorage('tasks');
    if (storedTasks) {
      storedTasks.forEach((task) => dispatch(addTask(task)));
    }

    // Fetch current weather
    const fetchCurrentWeather = async () => {
      try {
        const data = await fetchWeather('Delhi,IN');
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch weather forecast
    const fetchWeatherForecastData = async () => {
      try {
        const data = await fetchForecast('Delhi,IN', 7);
        console.log('Forecast data:', data);
        setForecast(data);
      } catch (error) {
        console.error('Error fetching forecast:', error);
      }
    };

    fetchCurrentWeather();
    fetchWeatherForecastData();
  }, [dispatch]);

  useEffect(() => {
    // Save tasks to local storage whenever they change
    saveToLocalStorage('tasks', tasks);
  }, [tasks]);

  return (
    <div className="home">
      <Sidebar />
      <div className="container mt-5">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList tasks={filteredTasks} /> {/* Render filtered tasks based on priority */}
        {weather && <WeatherInfo weather={weather} />}
        
        {forecast && <WeatherForecast forecastData={forecast} />}
      </div>
    </div>
  );
};

export default Home;
