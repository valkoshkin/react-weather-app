import React from "react";
import "./CurrentWeather.css";
import { LocationOnOutlined } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    marginTop: "30px",
    marginBottom: "30px",
    borderRadius: "10px",
    minWidth: "300px",
    maxWidth: "50%",
    cursor: "default",
    userSelect: "none",
    "&:hover": {
      boxShadow: "0 1px 6px 2px rgba(0, 0, 0, 0.25)",
      transition: "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  icon: {
    marginRight: "10px",
    color: "#162635",
  },
}));

export const CurrentWeather = (props) => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <div className="current-weather-location">
        <LocationOnOutlined className={styles.icon} fontSize="large" />
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
    </Paper>
  );
};
