// WeatherApp.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./weather.css";
import WeatherInfo from "./WeatheInfo";
import { data } from "jquery";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_APP_ID
        }&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="weather">
      <SearchBar onSearch={fetchWeather} />

      <h1>Weather</h1>
      <WeatherInfo weatherInfo={weatherData} />
      {/* <WeatherInfo /> */}
    </div>
  );
};

export default WeatherApp;
