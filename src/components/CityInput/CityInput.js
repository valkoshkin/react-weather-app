import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
    marginTop: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    minWidth: "300px",
    width: "50%",
    "&:hover": {
      boxShadow: "0 1px 6px 2px #00000040",
      transition: "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
  input: {
    fontFamily: "Montserrat, sans-serif",
    marginLeft: theme.spacing(2),
    flex: 1,
    fontSize: "24px",
  },
  iconButton: {
    padding: 10,
  },
}));

export const CityInput = (props) => {
  const styles = useStyles();
  const [city, setCity] = useState();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const onSubmit = () => {
    props.onSubmit(city);
  };

  return (
    <Paper className={styles.root}>
      <InputBase
        className={styles.input}
        placeholder="Enter city..."
        onChange={(event) => {
          handleChange(event);
        }}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <IconButton
        className={styles.iconButton}
        onClick={() => {
          onSubmit();
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
