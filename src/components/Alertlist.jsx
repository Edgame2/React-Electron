import React, { Component } from "react";
import Alertevent from "./Alertevent";
import axios from "axios";
import { getalldata } from "../services/storage";

class Alertlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=R6L4R81FRGNNP6PU
        `
      )
      .then(res => {
        const stocks = res.data;
        console.log(getalldata("alerts"));
        this.setState({ stocks });
      });
  }

  render() {
    return (
      <div className="row">
        <Alertevent />
        <Alertevent />
        <Alertevent />
        <Alertevent />
        <Alertevent />
      </div>
    );
  }
}

export default Alertlist;
