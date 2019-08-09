import React, { Component } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Axios from "axios";

const useStyles = theme => ({
  ...theme.spreadtThis,
  GridStyles: {
    justifyContent: "center"
  },
  CardStyles: {
    padding: 5
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.getEvents = this.getEvents.bind(this);
  }

  async getEvents() {
    const res = await Axios.get("/events");
    const { data } = res;
    this.setState({
      events: data
    });
    // console.log(this.state.events);
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    const { classes } = this.props;
    const { events } = this.state;

    return (
      <div>
        <div>
          <Header />
        </div>

        <section className={classes.CardStyles}>
          <Grid container className={classes.GridStyles}>
            {events.map(event => {
              return (
                <EventCard
                  key={event.id}
                  title={event.title}
                  body={event.body}
                  imageUrl={event.imageUrl}
                  id={event.id}
                  user={event.creator}
                />
              );
            })}
          </Grid>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Home);
