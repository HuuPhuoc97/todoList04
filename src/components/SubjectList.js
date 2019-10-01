import React, { Component } from "react";
import SubjectItem from "./SubjectItem";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from './../actions/index';

class SubjectList extends Component {

  componentDidMount(){
    this.props.getListItemRequest();
  }
  render() {
    var { items, keyword, sortBy } = this.props;

    // search by name
    if (keyword !== "") {
      items = items.filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    //-- use lodash to sort--
    if (sortBy === -1) {
      items = _.orderBy(items, ["name"], ["asc"]);
    } else if (sortBy === 1) {
      items = _.orderBy(items, ["name"], ["desc"]);
    }

    var elementItem = items.map((item, index) => {
      return <SubjectItem key={index} item={item} index={index} />;
    });

    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <p className="panel-title">List item</p>
        </div>
        <div className="panel-body">
          <table className="table table-bordered">
            <thead>
              <tr className="active">
                <th className="col-lg-1">#</th>
                <th className="col-lg-7">Name</th>
                <th className="col-lg-2">Level</th>
                <th className="col-lg-2">action</th>
              </tr>
            </thead>
            <tbody>{elementItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.subject.items,
    keyword: state.subject.keyword,
    sortBy: state.subject.sortBy
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getListItemRequest: () => {
      dispatch(actions.getListItemRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectList);
