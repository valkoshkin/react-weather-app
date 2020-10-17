import React from "react";
import "./CurrentWeather.css";
import { LocationOnOutlined, WbSunnyOutlined } from "@material-ui/icons";
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
    lineBreak: "anywhere",
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

export const CurrentWeather = ({ ...props }) => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <div className="current-weather-location">
        <LocationOnOutlined className={styles.icon} fontSize="large" />
        Los Angeles, USA
      </div>

      <div className="current-weather-info">
        <WbSunnyOutlined className={styles.icon} fontSize="large" />
        <div className="current-weather-info-text">
          <span className="current-weather-info-temperature">+13.7°C</span>
          <span className="current-weather-info-description">
            Partly cloudly
          </span>
        </div>
      </div>
    </Paper>
  );
};
