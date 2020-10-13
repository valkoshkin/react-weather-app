import React from "react";
import { CityInput } from "./components/CityInput";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "50px",
  },
}));

function App() {
  const styles = useStyles();

  return <CityInput className={styles.input} />;
}

export default App;
