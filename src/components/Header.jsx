import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    // background: "#d81b60",
    // width: "100%",
    // height: "50vh",
    flex: 1
  },
  bgHead: {
    background: "#d81b60",
    width: "100%",
    height: "50vh"
  },
  titleText: {
    // margin: "auto"
  },
  hardCodedCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        spacing={0}
        className={classes.bgHead}
        justify="center"
        align="center"
      >
        <Typography variant="h2" fontWeight="fontWeightBold" color="primary">
          UnderEvents
        </Typography>
        <Typography
          className={classes.titleText}
          variant="h2"
          fontWeight="fontWeightBold"
          color="primary"
        >
          El lugar justo para tus tickets
        </Typography>
      </Grid>
    </div>
  );
}
