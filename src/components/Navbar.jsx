import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { LogOut, decodedTokenAndSetState } from "../redux/actions/actionsUser";

import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";

const useStyles = theme => ({
  ...theme.spreadtThis,
  menuButton: {
    marginRight: 2
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
});

function OwnButton(props) {
  const { route, where, classes } = props;
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

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      auth: this.props.auth
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.checkinTokenIfExists = this.checkinTokenIfExists.bind(this);
    this.LogOutAction = this.LogOutAction.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleClickAway() {
    this.setState({ open: false });
  }

  LogOutAction() {
    this.props.LogOut();
    this.checkinTokenIfExists();
  }

  checkinTokenIfExists() {
    const tokenId = localStorage.getItem("FBIdToken");
    if (tokenId) {
      this.setState({ auth: true });
      this.props.decodedTokenAndSetState();
    } else {
      this.setState({ auth: false });
    }
  }

  componentDidMount() {
    this.checkinTokenIfExists();
    console.log(this.props);
  }

  render() {
    const { classes, auth } = this.props;
    return (
      <div>
        {auth ? ( // Logged
          <AppBar position="sticky" color="primary" className={classes.root}>
            <Toolbar>
              <Hidden mdUp>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                  {this.state.open ? (
                    <div>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={this.handleClick}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Paper className={classes.paper}>
                        <OwnButton
                          route="/account"
                          where="Account"
                          classes={classes}
                        />
                        <OwnButton
                          route="/feed"
                          where="Feed"
                          classes={classes}
                        />
                        <Button
                          className={classes.ownButton}
                          raised="true"
                          color="inherit"
                          onClick={this.LogOutAction}
                        >
                          Log Out
                        </Button>
                      </Paper>
                    </div>
                  ) : (
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="Menu"
                      onClick={this.handleClick}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </ClickAwayListener>
              </Hidden>

              <Typography
                className={classes.brandStyles}
                variant="h6"
                component={Link}
                to="/"
              >
                UnderEvents
              </Typography>

              <Hidden mdDown>
                <div className={classes.button}>
                  <OwnButton
                    route="/account"
                    where="Account"
                    classes={classes}
                  />
                  <Button
                    className={classes.ownButton}
                    raised="true"
                    color="inherit"
                    onClick={this.LogOutAction}
                  >
                    Log Out
                  </Button>
                </div>
              </Hidden>
            </Toolbar>
          </AppBar>
        ) : (
          // Logged
          <AppBar position="sticky" color="primary" className={classes.root}>
            <Toolbar>
              {/* Dropdown */}

              <Hidden mdUp>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                  {this.state.open ? (
                    <div>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={this.handleClick}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Paper className={classes.paper}>
                        <OwnButton
                          route="/login"
                          where="Login"
                          classes={classes}
                        />
                        <OwnButton
                          route="/register"
                          where="Register"
                          classes={classes}
                        />
                      </Paper>
                    </div>
                  ) : (
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="Menu"
                      onClick={this.handleClick}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </ClickAwayListener>
              </Hidden>

              <Typography
                className={classes.brandStyles}
                variant="h6"
                component={Link}
                to="/"
              >
                UnderEvents
              </Typography>

              <Hidden mdDown>
                <div className={classes.button}>
                  <OwnButton route="/login" where="Login" classes={classes} />
                </div>
              </Hidden>
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
  LogOut: PropTypes.func.isRequired,
  decodedTokenAndSetState: PropTypes.func.isRequired
};

const mapActionsToProps = { LogOut, decodedTokenAndSetState };
const mapStateToProps = state => ({
  auth: state.user.auth
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(useStyles)(Navbar));
