import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Handling extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 padding-0">
          <Search onSearch={this.props.onSearch} />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Sort onSort={this.props.onSort} />
        </div>
      </div>
    );
  }
}

export default Handling;
