import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class Sort extends Component {
  onChange = event => {
    var target = event.target;
    var value = parseInt(target.value, 10);
    this.props.onSort(value);
  };
  render() {
    return (
      <select
        name="sortOrder"
        className="form-control"
        onChange={this.onChange}
      >
        <option value={0}>Sort by</option>
        <option value={-1}>ASC</option>
        <option value={1}>DESC</option>
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort : (sortBy) => {
      dispatch(actions.sortRequest(sortBy))
    }
  }
}
export default connect(null, mapDispatchToProps)(Sort)
