import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
    margin: "50px auto",
    display: "flex",
    alignItems: "center",
    width: 700,
    backgroundColor: "#e5e5e5",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "Roboto",
    fontSize: "24px",
  },
  iconButton: {
    padding: 10,
  },
}));

export const CityInput = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <InputBase className={styles.input} placeholder="Enter city..." />
      <IconButton className={styles.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
