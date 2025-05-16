import React from "react";

const WeatherInfo = ({ weatherInfo }) => {
  if (!weatherInfo)
    return <p className="text-white text-center">No data available</p>;

  const toTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="weather-card text-white">
      {/* Current Weather */}
      <div className="weather-presentDay bg-[#14203A] rounded-2xl m-3">
        <div className="weather-Data p-3 flex justify-between gap-15 w-120">
          <div className="row1Data">
            <div className="cityName bg-violet-600 rounded-l text-center font-bold text-2xl my-4 px-3 py-1">
              {weatherInfo.name || "City"}
            </div>

            <h3 className="text-4xl mt-3 py-1">{days[new Date().getDay()]}</h3>

            <h4 className="text-xl">
              {new Date().toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h4>

            <h2 className="text-6xl mb-3">
              {Math.round(weatherInfo.main.temp)}°C
            </h2>

            <div className="high-low text-xl flex flex-col gap-1">
              <span>
                <i className="fa-solid fa-temperature-high text-red-400"></i>{" "}
                High: {Math.round(weatherInfo.main.temp_max)}°C
              </span>
              <span>
                <i className="fa-solid fa-temperature-low text-blue-400"></i>{" "}
                Low: {Math.round(weatherInfo.main.temp_min)}°C
              </span>
            </div>
          </div>

          <div className="row2Data text-right">
            <div className="text-5xl mb-2">
              <i className="fa-solid fa-cloud text-gray-300"></i>
            </div>
            <h4 className="text-2xl capitalize">
              {weatherInfo.weather[0].description}
            </h4>
            <p className="text-xl mt-2">
              <i className="fa-solid fa-wind text-cyan-300"></i> Wind:{" "}
              {weatherInfo.wind.speed} m/s
            </p>
            <p className="text-xl mt-1">
              <i className="fa-solid fa-temperature-half text-yellow-300"></i>{" "}
              Feels Like: {Math.round(weatherInfo.main.feels_like)}°C
            </p>
          </div>
        </div>
      </div>

      {/* Sunrise & Sunset */}
      <div className="todya-week grid grid-cols-2 gap-4 px-3">
        <div className="bg-gradient-to-l from-white to-orange-600 rounded-2xl text-center p-5 text-black shadow-lg">
          <p className="text-gray-400">
            <i className="fa-solid fa-sun"></i> Sunrise
          </p>
          <h3 className="text-2xl">
            {toTime(weatherInfo.sys.sunrise)}{" "}
            <span className="text-sm">AM</span>
          </h3>
        </div>

        <div className="bg-gradient-to-r from-white to-orange-400 rounded-2xl text-center p-5 text-black shadow-lg">
          <p className="text-black">
            <i className="fa-solid fa-moon"></i> Sunset
          </p>
          <h3 className="text-2xl">
            {toTime(weatherInfo.sys.sunset)} <span className="text-sm">PM</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
