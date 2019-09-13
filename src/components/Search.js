import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: ""
    };
  }

  onChangeSearch = event => {
    var target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyWord);
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={this.onChangeSearch}
          name="keyWord"
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-info"
            onClick={this.onSearch}
          >
            Search
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
