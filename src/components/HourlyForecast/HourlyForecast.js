import React from "react";
import "./HourlyForecast.css";
import Paper from "@material-ui/core/Paper";
import { HourlyForecastItem } from "./HourlyForecastItem/HourlyForecastItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "30%",
    minWidth: "300px",
    margin: "0 70px 20px 70px",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "default",
    userSelect: "none",
    "&:hover": {
      boxShadow: "0 1px 6px 2px rgba(0, 0, 0, 0.25)",
      transition: "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
}));

export const HourlyForecast = (props) => {
  const styles = useStyles();
  const hourlyForecastArray =
    props.weatherInfo.forecast.forecastday[props.indexOfClicked].hour;

  return (
    <Paper className={styles.root}>
      {hourlyForecastArray.map((value, index) => {
        return <HourlyForecastItem key={index} hourlyForecast={value} />;
      })}
    </Paper>
  );
};
