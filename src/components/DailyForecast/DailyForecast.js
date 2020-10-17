import React from "react";
import "./DailyForecast.css";
import { DailyForecastItem } from "./DailyForecastItem/DailyForecastItem";

export const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <DailyForecastItem />
      <DailyForecastItem />
      <DailyForecastItem />
    </div>
  );
};
