import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class SubjectItem extends Component {
  // properties lable of <span>
  takeLable = () => {
    var { item } = this.props;
    if (item.level === -1) {
      return "label label-default";
    } else if (item.level === 0) {
      return "label label-info";
    } else {
      return "label label-success";
    }
  };
  takeLevelName = () => {
    var { item } = this.props;
    if (item.level === -1) {
      return "Small";
    } else if (item.level === 0) {
      return "Medium";
    } else {
      return "Hight";
    }
  };

  selectedItem = () => {
    this.props.onGetUpdating(this.props.item);
    this.props.onOpenForm();
  };

  render() {
    var { item, index } = this.props;
    return (
      <tr>
        <th className="col-lg-1">{index + 1}</th>
        <td className="col-lg-7">{item.name}</td>
        <td className="col-lg-2">
          <span className={this.takeLable() + " fontLevelName"}>
            {this.takeLevelName()}
          </span>
        </td>
        <td className="col-lg-2">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.selectedItem}
          >
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.props.onDeleteItem(item);
            }}
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
      dispatch(actions.deleteItem(item));
    },
    onGetUpdating: item => {
      dispatch(actions.getUpdating(item));
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
