import React, { useEffect, useState } from "react";
import "./DailyForecastItem.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as ChanceOfRain } from "../../../assets/chance-of-rain.svg";
import { ReactComponent as WindSpeed } from "../../../assets/wind-speed.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "19%",
    minWidth: "250px",
    padding: "20px",
    margin: "0 30px 30px 30px",
    borderRadius: "20px",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      boxShadow: "0 1px 6px 2px #00000040",
      transition: "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  active: {
    backgroundColor: "#d1eaff",
    boxShadow: "0 1px 6px 2px #00000040",
  },
  icon: {
    marginTop: "10px",
    color: "#162635",
  },
}));

export const DailyForecastItem = (props) => {
  const styles = useStyles();
  const [isClicked, setClicked] = useState(props.isClicked);

  useEffect(() => {
    setClicked(props.isClicked);
  }, [props.isClicked]);

  const setStyles = () => {
    if (!isClicked) {
      return styles.root;
    } else {
      return `${styles.root} ${styles.active}`;
    }
  };

  const handleClick = () => {
    if (!isClicked) {
      setClicked(true);
      props.handleClick(props.index);
    } else {
      setClicked(false);
      props.handleClick(-1);
    }
  };

  const parseDate = (date) => {
    const dateArray = date.split("-");
    const day = dateArray[2];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[parseInt(dateArray[1]) - 1];
    return month + " " + day;
  };

  const parseTemperature = (temperature) => {
    temperature += "";
    const temperatureArray = temperature.split("");
    if (temperatureArray[0] !== "-") {
      temperatureArray.unshift("+");
    }
    return temperatureArray.join("");
  };

  const getDayOfWeek = (date) => {
    const today = new Date().getDate();
    let day;
    if (new Date(date).getDate() === today) {
      day = "Today";
    } else {
      day = new Date(date).toLocaleDateString("en-us", { weekday: "long" });
    }
    return day;
  };

  return (
    <Paper className={setStyles()} onClick={() => handleClick()}>
      <div className="daily-forecast-date">
        {parseDate(props.forecastDay.date)}
      </div>
      <div className="daily-forecast-dayofweek">
        {getDayOfWeek(props.forecastDay.date)}
      </div>
      <img
        src={props.forecastDay.day.condition.icon}
        alt={props.forecastDay.day.condition.description}
      />
      <div className="daily-forecast-temperature">
        <span className="daily-forecast-temperature-max">
          {parseTemperature(props.forecastDay.day.maxtemp_c)}°C
        </span>
        <span className="daily-forecast-temperature-min">
          {parseTemperature(props.forecastDay.day.mintemp_c)}°C
        </span>
      </div>
      <div className="daily-forecast-weather">
        <div className="daily-forecast-chance-of-rain">
          <ChanceOfRain className="daily-forecast-chance-of-rain-icon" />
          {props.forecastDay.day.daily_chance_of_rain}%
        </div>
        <div className="daily-forecast-wind-speed">
          <WindSpeed className="daily-forecast-wind-speed-icon" />
          {props.forecastDay.day.maxwind_kph} km/h
        </div>
      </div>
    </Paper>
  );
};
