import React from "react";
import "./DailyForecast.css";
import { DailyForecastItem } from "./DailyForecastItem/DailyForecastItem";

export const DailyForecast = (props) => {
  const forecastDayArray = props.weatherInfo.forecast.forecastday;

  return (
    <div className="daily-forecast">
      {forecastDayArray.map((value, index) => {
        return (
          <DailyForecastItem
            key={index}
            index={index}
            handleClick={props.handleClick}
            forecastDay={value}
            isClicked={props.indexOfClicked === index}
          />
        );
      })}
    </div>
  );
};
