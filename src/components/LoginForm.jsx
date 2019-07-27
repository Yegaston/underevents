import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = theme => ({
  //   ...theme,
  formStyles: {
    padding: 5
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
              variant="contained"
              color="secondary"
              className={classes.buttonStyle}
              component="span"
            >
              Login
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(LoginForm);
