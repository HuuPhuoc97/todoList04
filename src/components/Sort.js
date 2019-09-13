import React, { Component } from "react";

class Sort extends Component {
  onChange = event => {
    var target = event.target;
    this.props.onSort(target.value);
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

export default Sort;
