import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "5vh 2vh 5vh 2vh"
  }
}));

export default function Login(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <LoginForm history={props.history} />
      </Grid>
    </div>
  );
}
