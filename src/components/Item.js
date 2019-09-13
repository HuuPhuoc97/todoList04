import React, { Component } from "react";

class Item extends Component {
  // properties lable of <span>
  takeLable = () => {
    var { item } = this.props;
    if (item.level === -1) {
      return "label label-default";
    }
    if (item.level === 0) {
      return "label label-info";
    } else {
      return "label label-success";
    }
  };
  takeLevelName = () => {
    var { item } = this.props;
    if (item.level === -1) {
      return "Small";
    }
    if (item.level === 0) {
      return "Medium";
    } else {
      return "Hight";
    }
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
            onClick={() => {
              this.props.onUpdateItem(item.id);
            }}
          >
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.props.onDeleteItem(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
