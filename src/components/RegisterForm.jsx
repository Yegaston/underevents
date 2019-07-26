import React, { Component } from "react";
import PropTypes from "prop-types";
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
  }
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ndeah: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput() {
    console.log();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.formStyles}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Register
            </Typography>
            <TextField
              label="Full Name"
              className={classes.textField}
              value={this.state.ndeah}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              className={classes.textField}
              value={this.state.ndeah}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Password"
              className={classes.textField}
              value={this.state.ndeah}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Confirm Password"
              className={classes.textField}
              value={this.state.ndeah}
              onChange={this.handleInput}
              margin="normal"
              fullWidth
            />
            <Button variant="contained" color="secondary" component="span">
              Login
            </Button>
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
