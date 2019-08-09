import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/actionsUser";
const useStyles = theme => ({
  //   ...theme,
  formStyles: {
    padding: 5,
    width: "80vw"
  },
  root: {
    justifyContent: "center"
  },
  textField: {
    // width: '100%'
  },
  buttonStyle: {
    margin: "2 2 2 2"
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.LoginAction = this.LoginAction.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async LoginAction(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const userToLogin = {
      email,
      password
    };
    console.log(this.props.history);
    await this.props.loginUser(userToLogin, this.props.history);
    const { errors } = this.props.user;
    console.log(errors);
  }

  componentDidMount() {
    console.log(this.props.user.auth);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.props.user;
    return (
      <div>
        <Card className={classes.formStyles}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Login
            </Typography>
            <br />
            {errors ? (
              <Typography
                variant="subtitle1"
                component="h4"
                gutterBottom
                align="center"
              >
                {errors}
              </Typography>
            ) : null}
            <form noValidate onSubmit={this.LoginAction}>
              <TextField
                label="Email"
                type="email"
                name="email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleInput}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleInput}
                margin="normal"
                fullWidth
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                onClick={this.LoginAction}
                className={classes.buttonStyle}
                component="span"
              >
                Login
              </Button>
              <br />
              <Typography variant="caption">
                You are not register? <Link to="/register">Register here.</Link>
              </Typography>
            </form>
          </Grid>
        </Card>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapActionsToProps = {
  loginUser
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(useStyles)(LoginForm));
