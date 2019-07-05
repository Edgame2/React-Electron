import React, { Component } from "react";
import Alertevent from "./Alertevent";
import axios from "axios";
import { getalldata } from "../services/storage";
import { getEvents } from "../services/alertService";
class Alertlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    events: []
  };

  async componentDidMount() {
    const { data: events } = await getEvents();
    this.setState({ events });
  }

  render() {
    return (
      <div className="row">
        {this.state.events(item => (
          <Alertevent />
        ))}
      </div>
    );
  }
}

export default Alertlist;
