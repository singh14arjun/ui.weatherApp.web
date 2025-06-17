import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatheInfo";
import bgImage from "../assets/images/rainny.jpg";

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
      console.log(data);

      setWeatherData(data);
    } catch (err) {
      console.error(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div
      className="weather bg-cover bg-center bg-no-repeat text-[aliceblue] min-h-screen px-4 sm:px-6 md:px-10 pt-[100px] flex flex-col items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <SearchBar onSearch={fetchWeather} />
        <WeatherInfo weatherInfo={weatherData} />
      </div>
    </div>
  );
};

export default WeatherApp;
