import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

class FormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      level: 0
    };
  }

  // test props.itemUpdating & if exist asign to state
  componentWillMount() {
    var { itemUpdating } = this.props;
    if (itemUpdating) {
      this.setState({
        id: itemUpdating.id,
        name: itemUpdating.name,
        level: itemUpdating.level
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    var { itemUpdating } = nextProps;
    if (itemUpdating) {
      this.setState({
        id: itemUpdating.id,
        name: itemUpdating.name,
        level: itemUpdating.level
      });
    } else {
      this.onResetForm();
    }
  }

  onSubmit = fields => {
    this.props.onSubmit(fields);
 
  };

  // Reset form to default
  onResetForm = () => {
    this.setState({
      id: "",
      name: "",
      level: 0
    });
  };

  render() {
    var { id } = this.state;
    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div
            className={id === "" ? "panel panel-info" : "panel panel-warning"}
          >
            <div className="panel-heading">
              <h3 className="panel-title">
                {id === "" ? "Add Item" : "Edit Item"}
                <i
                  className="fa fa-times iconCloseAddItem"
                  aria-hidden="true"
                  onClick={this.props.onCloseForm}
                />
              </h3>
            </div>
            <div className="panel-body">
              <Formik
                enableReinitialize
                initialValues={this.state}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .required(" Name is required") 
                    .min(4, "Name must be at least 4 characters")
                })}
                onSubmit={this.onSubmit}
                render={({  errors, touched  }) => (
                  <Form>
                    {touched.name && errors.name ? (
                      <div className="alert alert-danger">
                        <strong>Error!</strong> {errors.name}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="form-group">
                    
                      <label>Name: </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="name"
                      />
                    </div>

                    <label>Level: </label>
                    <Field
                      component="select"
                      className="form-control"
                      name="level"
                    >
                      <option value={-1}>Small</option>
                      <option value={0}>Medium</option>
                      <option value={1}>Hight</option>
                    </Field>
                    <br />

                    <div className="text-center">
                      <button type="submit" className="btn btn-success mr-5">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onResetForm}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                )}
              />

              {/* end div panel-body */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormAddItem;