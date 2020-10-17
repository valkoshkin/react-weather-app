import React from "react";
import "./DailyForecastItem.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { WbSunnyOutlined } from "@material-ui/icons";
import { ReactComponent as ChanceOfRain } from "../../../images/chance-of-rain.svg";
import { ReactComponent as WindSpeed } from "../../../images/wind-speed.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "20%",
    minWidth: "250px",
    padding: "20px",
    margin: "0 30px 30px 30px",
    borderRadius: "20px",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      boxShadow: "0 1px 6px 2px #5c6bc0",
      transition: "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  icon: {
    marginTop: "10px",
    color: "#162635",
  },
}));

export const DailyForecastItem = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <div className="daily-forecast-date">October 15</div>
      <div className="daily-forecast-dayofweek">Thursday</div>
      <WbSunnyOutlined className={styles.icon} fontSize="large" />
      <div className="daily-forecast-temperature">
        <span className="daily-forecast-temperature-max">+15.2°C</span>
        <span className="daily-forecast-temperature-min">+7.4°C</span>
      </div>
      <div className="daily-forecast-weather">
        <div className="daily-forecast-chance-of-rain">
          <ChanceOfRain className="daily-forecast-chance-of-rain-icon" />
          44%
        </div>
        <div className="daily-forecast-wind-speed">
          <WindSpeed className="daily-forecast-wind-speed-icon" />
          15.5 km/h
        </div>
      </div>
    </Paper>
  );
};
