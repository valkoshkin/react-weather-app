import React from "react";
import "./HourlyForecastItem.css";
import PropTypes from "prop-types";

export const HourlyForecastItem = (props) => {
  const parseTemperature = (temperature) => {
    temperature += "";
    const temperatureArray = temperature.split("");
    if (temperatureArray[0] !== "-") {
      temperatureArray.unshift("+");
    }
    return temperatureArray.join("");
  };

  const parseDateTime = (dateTime) => {
    return dateTime.split(" ")[1];
  };

  return (
    <div className="hourly-forecast-item">
      <span>{parseDateTime(props.hourlyForecast.time)}</span>
      <img
        className="hourly-forecast-item-icon"
        src={props.hourlyForecast.condition.icon}
        alt={props.hourlyForecast.condition.text}
      />
      <span className="hourly-forecast-item-temperature">
        {parseTemperature(props.hourlyForecast.temp_c)}°
      </span>
      <span>{props.hourlyForecast.wind_kph} km/h</span>
    </div>
  );
};

HourlyForecastItem.propTypes = {
  hourlyForecast: PropTypes.any,
};
