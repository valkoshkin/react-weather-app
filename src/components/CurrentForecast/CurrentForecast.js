import React from "react";
import { Typography } from "@material-ui/core";
import "./CurrentForecast.css";
import { LocationOnOutlined, WbSunnyOutlined } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  typography: {
    marginLeft: "10px",
    color: "#162635",
  },
  temperature: {
    marginLeft: "10px",
    color: "#162635",
    fontWeight: "bold",
  },
  icon: {
    color: "#162635",
  },
}));

export const CurrentForecast = ({ ...props }) => {
  const styles = useStyles();

  return (
    <div className="current-forecast">
      <div className="current-forecast-location">
        <LocationOnOutlined className={styles.icon} fontSize="large" />
        <Typography className={styles.typography} variant="h4">
          Los Angeles, USA
        </Typography>
      </div>
      <div className="current-forecast-weather">
        <WbSunnyOutlined fontSize="large" />
        <Typography className={`${styles.temperature}`} variant="h4">
          +13.7°C
        </Typography>
        <Typography className={styles.typography} variant="h4">
          Partly Cloudly
        </Typography>
      </div>
    </div>
  );
};
