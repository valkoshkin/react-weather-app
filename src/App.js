import React, { useState } from "react";
import { CityInput } from "./components/CityInput/CityInput";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { DailyForecast } from "./components/DailyForecast/DailyForecast";
import { HourlyForecast } from "./components/HourlyForecast/HourlyForecast";

function App() {
  const [indexOfClicked, setIndexOfClicked] = useState(-1);
  const [isResponseOk, setResponseOk] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState();
  const API_KEY = "0a97cd0d9dde43c5bb2214640202906";

  const handleClick = (index) => {
    setIndexOfClicked(index);
  };

  const getResponse = async (location) => {
    let response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=" +
        API_KEY +
        "&q=" +
        location +
        "&days=3"
    );
    if (response.ok) {
      setWeatherInfo(await response.json());
      setResponseOk(true);
    } else {
      alert("Error code: " + response.status + "\nTry again later.");
    }
  };

  return (
    <div className="wrapper">
      <CityInput onSubmit={getResponse} />
      {isResponseOk && <CurrentWeather weatherInfo={weatherInfo} />}

      {isResponseOk && (
        <DailyForecast
          handleClick={handleClick}
          weatherInfo={weatherInfo}
          indexOfClicked={indexOfClicked}
        />
      )}
      {indexOfClicked !== -1 && (
        <HourlyForecast
          weatherInfo={weatherInfo}
          indexOfClicked={indexOfClicked}
        />
      )}
    </div>
  );
}

export default App;
