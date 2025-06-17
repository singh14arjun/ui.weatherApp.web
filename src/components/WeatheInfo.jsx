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
    <div className="weather-card text-white w-full max-w-5xl">
      <div className=" bg-[#14203A] rounded-2xl my-1">
        <div className="p-5 flex flex-col md:flex-row justify-between gap-8 w-full">
          {/* Column 1 */}
          <div className="row1Data flex-1">
            <div className="cityName bg-violet-600 rounded text-center font-bold text-xl md:text-2xl my-3 px-3 py-1">
              {weatherInfo.name || "City"}
            </div>

            <h3 className="text-2xl md:text-4xl mt-2">
              {days[new Date().getDay()]}
            </h3>

            <h4 className="text-base md:text-xl">
              {new Date().toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h4>

            <h2 className="text-4xl md:text-6xl my-3">
              {Math.round(weatherInfo.main.temp)}°C
            </h2>

            <div className="high-low text-base md:text-xl flex flex-col gap-1">
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

          {/* Column 2 */}
          <div className="row2Data flex-1 text-right md  md:text-left mt-6 md:mt-0">
            <div className="text-4xl md:text-5xl mb-2">
              <i className="fa-solid fa-cloud text-gray-300"></i>
            </div>
            <h4 className="text-xl md:text-2xl capitalize">
              {weatherInfo.weather[0].description}
            </h4>
            <p className="text-base md:text-xl mt-2">
              <i className="fa-solid fa-wind text-cyan-300"></i> Wind:{" "}
              {weatherInfo.wind.speed} m/s
            </p>
            <p className="text-base md:text-xl mt-1">
              <i className="fa-solid fa-temperature-half text-yellow-300"></i>{" "}
              Feels Like: {Math.round(weatherInfo.main.feels_like)}°C
            </p>
          </div>
        </div>
      </div>

      {/* Sunrise & Sunset Section */}
      <div className="today-week grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div className="bg-gradient-to-l from-white to-orange-600 rounded-2xl text-center p-5 text-black shadow-lg">
          <p>
            <i className="fa-solid fa-sun"></i> Sunrise
          </p>
          <h3 className="text-xl md:text-2xl">
            {toTime(weatherInfo.sys.sunrise)}{" "}
            <span className="text-sm">AM</span>
          </h3>
        </div>

        <div className="bg-gradient-to-r from-white to-orange-400 rounded-2xl text-center p-5 text-black shadow-lg">
          <p>
            <i className="fa-solid fa-moon"></i> Sunset
          </p>
          <h3 className="text-xl md:text-2xl">
            {toTime(weatherInfo.sys.sunset)} <span className="text-sm">PM</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
