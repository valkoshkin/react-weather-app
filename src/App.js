import React from "react";
import { CityInput } from "./components/CityInput/CityInput";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { DailyForecast } from "./components/DailyForecast/DailyForecast";

function App() {
  return (
    <div className="wrapper">
      <CityInput />
      <CurrentWeather />
      <DailyForecast />
    </div>
  );
}

export default App;
