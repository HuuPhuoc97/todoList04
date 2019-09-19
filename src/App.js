import React, { Component } from "react";
import "./App.css";
import SubjectHandle from "./components/SubjectHandle";
import SubjectButtonAdd from "./components/SubjectButtonAdd";
import SubjectList from "./components/SubjectList";
import SubjectForm from "./components/SubjectForm";
import {orderBy} from "lodash";
import {connect} from "react-redux";
// import * as actions from "./../actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemUpdating: null,
      keyWord: "",
      order: 0
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("items")) {
      var items = JSON.parse(localStorage.getItem("items"));
      this.setState({
        items
      });
    } 
  }
  
  //search by name
  onSearch = keyWord => {
    this.setState({
      keyWord
    });
  };
  //sort by name
  onSort = order => {
    order = parseInt(order);
    this.setState({
      order
    });
  };

  render() {

    // var { items, displayForm, keyWord, order } = this.state;
    // if (keyWord) {
    //   items = items.filter(item => {
    //     return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    //   });
    // }
    
    // //-- use lodash to sort--
    // if(order === -1){
    //   items = orderBy(items, ['name'], ['asc']);
    // }
    // else if(order === 1){
    //   items = orderBy(items, ['name'], ['desc']);
    // }
    

    return (
      <div className="container">
        <h1>
          Project04-ToDo List <span className="reactjs">React JS</span>
        </h1>
        <hr />
        <div className="row">
          {/* search & sort */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SubjectHandle onSearch={this.onSearch} onSort={this.onSort} />
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

          {/* end div row */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
