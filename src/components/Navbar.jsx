import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";

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
  },
  brandStyles: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#d81b60"
    }
  },
  paper: {
    position: "absolute",
    top: 55,
    right: 0,
    left: 0,
    background: "#6000b7"
  },
  ownButton: {
    color: "#fff"
  }
}));

function OwnButton(props) {
  const classes = useStyles();
  const { route, where } = props;
  return (
    <Button
      raised="true"
      color="inherit"
      component={Link}
      to={route}
      className={classes.ownButton}
    >
      {where}
    </Button>
  );
}

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" color="primary" className={classes.root}>
      <Toolbar>
        <Hidden mdUp>
          <ClickAwayListener onClickAway={handleClickAway}>
            {open ? (
              <div>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Paper className={classes.paper}>
                  <div>
                    <OwnButton route="/login" where="Login" />
                  </div>
                  <OwnButton route="/login" where="Register" />
                </Paper>
              </div>
            ) : (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            )}
          </ClickAwayListener>
        </Hidden>

        <Hidden mdDown>
          <Typography
            className={classes.brandStyles}
            variant="h6"
            component={Link}
            to="/"
          >
            UnderEvents
          </Typography>
        </Hidden>

        <Hidden mdUp>
          <Typography
            className={classes.brandStyles}
            variant="h6"
            component={Link}
            to="/"
          >
            UnderEvents
          </Typography>
        </Hidden>

        <Hidden mdDown>
          <div className={classes.button}>
            <OwnButton route="/login" where="Login" />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
