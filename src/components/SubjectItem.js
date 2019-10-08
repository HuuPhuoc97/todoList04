import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class SubjectItem extends Component {
  selectedItemEdit = () => {
    this.props.setUpdatingObjectRequest(this.props.item);
    this.props.onOpenForm();
  };

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.item);
  }

  render() {
    var { item, index } = this.props;
    var elementLevel = () => {
      if (item.level === -1) {
        return <span className="label label-default fontLevelName">Small</span>;
      } else if (item.level === 0) {
        return <span className="label label-info fontLevelName">Medium</span>;
      } else {
        return <span className="label label-success fontLevelName">Hight</span>;
      }
    };
    return (
      <tr>
        <th className="col-lg-1">{index + 1}</th>
        <td className="col-lg-7">{item.name}</td>
        <td className="col-lg-2">
          {elementLevel()}
        </td>
        <td className="col-lg-2">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.selectedItemEdit}
          >
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteItem}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteItem: item => {
      dispatch(actions.deleteItemRequest(item));
    },
    setUpdatingObjectRequest: item => {
      dispatch(actions.setUpdatingObjectRequest(item));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectItem);
