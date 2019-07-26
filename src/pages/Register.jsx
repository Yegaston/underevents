import React from "react";
import LoginForm from "../components/RegisterForm";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "5vh 2vh 5vh 2vh"
  }
}));

export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <LoginForm />
      </Grid>
    </div>
  );
}
