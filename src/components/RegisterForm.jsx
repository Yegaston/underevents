import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = theme => ({
  //   ...theme,
  textField: {},
  formStyles: {
    padding: 5
  },
  root: {
    justifyContent: "center"
  },
  buttonStyle: {
    margin: "2 2 2 2"
  }
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.formStyles}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Login
            </Typography>
            <TextField
              label="Full Name"
              name="fullname"
              className={classes.textField}
              value={this.state.fullname}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <Button variant="contained" color="secondary" component="span">
              Register
            </Button>
            <br />
            <Typography variant="caption">
              You are not register? <Link to="/register">Register here.</Link>{" "}
            </Typography>
          </Grid>
        </Card>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(RegisterForm);
