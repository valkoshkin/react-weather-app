import React from "react";
import { CityInput } from "./components/CityInput/CityInput";
import { CurrentForecast } from "./components/CurrentForecast/CurrentForecast";

function App() {
  return (
    <div className="wrapper">
      <CityInput />
      <CurrentForecast />
    </div>
  );
}

export default App;
