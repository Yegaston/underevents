import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  root: {
    flex: 1,
    flexGrow: 1
  },
  button: {
    marginLeft: "auto"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="primary" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">UnderEvents</Typography>
        <div className={classes.button}>
          <Button raised='true' color="inherit" component={Link} to="/login">
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
