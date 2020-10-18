import React from "react";
import "./CurrentWeather.css";
import { LocationOnTwoTone } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: "10px",
    color: "#162635",
  },
}));

export const CurrentWeather = (props) => {
  const styles = useStyles();

  return (
    <div className="current-weather">
      <div className="current-weather-location">
        <LocationOnTwoTone className={styles.icon} fontSize="large" />
        {props.weatherInfo.location.name}, {props.weatherInfo.location.country}
      </div>

      <div className="current-weather-info">
        <img
          className="current-weather-info-icon"
          src={props.weatherInfo.current.condition.icon}
          alt={props.weatherInfo.current.condition.text}
        />
        <div className="current-weather-info-text">
          <span className="current-weather-info-temperature">
            {props.weatherInfo.current.temp_c}°C
          </span>
          <span className="current-weather-info-description">
            {props.weatherInfo.current.condition.text}
          </span>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weatherInfo: PropTypes.any,
};
