import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChangeSearch = event => {
    var target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={this.onChangeSearch}
          name="keyword"
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


const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch : (keyword) => {
      dispatch(actions.searchRequest(keyword))
    }
  }
}
export default connect(null, mapDispatchToProps)(Search)
