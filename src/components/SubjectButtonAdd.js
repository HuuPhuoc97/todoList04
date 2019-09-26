import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";
class SubjectButtonAdd extends Component {
  onToggleForm = () => {
    var {isDisplayForm, itemUpdating} = this.props;
    if(isDisplayForm === true && itemUpdating !== null){
      this.props.setNullUpdating(null);
    }
    else{
      this.props.onToggleForm();
      this.props.setNullUpdating(null);
    }
  }
  render() {
    return (
      <div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
        <button
          type="button"
          className="btn btn-info col-xs-10 col-sm-10 col-md-10 col-lg-10"
          onClick={this.onToggleForm}
        >
          Add item
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.subject.isDisplayForm,
    itemUpdating: state.subject.itemUpdating
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    setNullUpdating : (item) => {
      dispatch(actions.setUpdatingObjectRequest(item))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubjectButtonAdd)
