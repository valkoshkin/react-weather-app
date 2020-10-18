import React, { useState } from "react";
import { CityInput } from "./components/CityInput/CityInput";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { DailyForecast } from "./components/DailyForecast/DailyForecast";
import { HourlyForecast } from "./components/HourlyForecast/HourlyForecast";
import { Loader } from "./components/Loader/Loader";
import swal from "sweetalert";

function App() {
  const [indexOfClicked, setIndexOfClicked] = useState(-1);
  const [isResponseStatusOk, setResponseStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState();
  const [currentCity, setCurrentCity] = useState("");
  const API_KEY = "0a97cd0d9dde43c5bb2214640202906";

  const handleClick = (index) => {
    setIndexOfClicked(index);
  };

  const getResponse = async (location) => {
    setLoading(true);
    let response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=" +
        API_KEY +
        "&q=" +
        location +
        "&days=3"
    );
    if (response.ok) {
      setWeatherInfo(await response.json());
      setResponseStatus(true);
      setCurrentCity(location);
    } else {
      swal({
        title: "Error :(",
        text:
          "Nothing was found for your request.\nPlease check the data and re-enter.",
        icon: "error",
        buttons: {
          cancel: "Ok",
        },
      });
    }
    setLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="wrapper">
        <CityInput onSubmit={getResponse} currentCity={currentCity} />
        {!isLoading && isResponseStatusOk && (
          <>
            <CurrentWeather weatherInfo={weatherInfo} />
            <DailyForecast
              handleClick={handleClick}
              weatherInfo={weatherInfo}
              indexOfClicked={indexOfClicked}
            />
          </>
        )}

        {indexOfClicked !== -1 && (
          <HourlyForecast
            weatherInfo={weatherInfo}
            indexOfClicked={indexOfClicked}
          />
        )}
      </div>
    </>
  );
}

export default App;
