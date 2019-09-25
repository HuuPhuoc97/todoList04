import React, { Component } from "react";
import "./App.css";
import SubjectHandle from "./components/SubjectHandle";
import SubjectButtonAdd from "./components/SubjectButtonAdd";
import SubjectList from "./components/SubjectList";
import SubjectForm from "./components/SubjectForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          Project04-ToDo List <span className="reactjs">React JS</span>
        </h1>
        <hr />
        <div className="row">

          {/* search & sort */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SubjectHandle />
          </div>

          {/* button add item */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SubjectButtonAdd />
          </div>

          {/* List item */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-40">
            <SubjectList />
          </div>

          {/* form add & edit  */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <SubjectForm />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
