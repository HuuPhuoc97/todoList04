import React, { Component } from "react";
import "./App.css";
import Handling from "./components/Handling";
import ButtonAddItem from "./components/ButtonAddItem";
import ListItem from "./components/ListItem";
import FormAddItem from "./components/FormAddItem";
import {orderBy} from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      displayForm: false,
      itemUpdating: null,
      keyWord: "",
      order: 0
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("items")) {
      var items = JSON.parse(localStorage.getItem("items"));
      this.setState({
        items
      });
    } 
  }
  
  // use library randomstring to create random strings, then assign random string to id
  generateID = () => {
    var randomstring = require("randomstring");
    var id = randomstring.generate();
    return id;
  };

  // show or close form add item
  onToggleFormAddItem = () => {
    var { displayForm, itemUpdating } = this.state;
    if (displayForm === true && itemUpdating !== null) {
      this.setState({
        itemUpdating: null
      });
    } else {
      this.setState({
        displayForm: !this.state.displayForm,
        itemUpdating: null
      });
    }
  };
  onShowFormAddItem = () => {
    this.setState({
      displayForm: true
    });
  };
  onCloseFormAddItem = () => {
    this.setState({
      displayForm: false
    });
  };

  //submit on form add item
  onSubmit = newItem => {
    var items = this.state.items;

    // add item
    if (newItem.id === "") {
      newItem.id = this.generateID();
      items.push(newItem);
    }
    // edit item
    else {
      var index = items.findIndex(item => {
        return item.id === newItem.id;
      });
      items[index] = newItem;
    }

    this.setState({
      items
    });
    localStorage.setItem("items", JSON.stringify(items));
    this.onCloseFormAddItem();
  };

  // delete item
  onDeleteItem = id => {
    var { items } = this.state;
    // method of array help find index
    var index = items.findIndex(item => {
      return item.id === id;
    });
    items.splice(index, 1);
    this.setState({
      items
    });
    localStorage.setItem("items", JSON.stringify(items));
  };

  // update item
  onUpdateItem = id => {
    var { items } = this.state;
    var index = items.findIndex(item => {
      return item.id === id;
    });
    this.setState({
      itemUpdating: items[index]
    });

    this.onShowFormAddItem();
  };
  //search by name
  onSearch = keyWord => {
    this.setState({
      keyWord: keyWord.toLowerCase()
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
    var { items, displayForm, keyWord, order } = this.state;
    if (keyWord) {
      items = items.filter(item => {
        return item.name.toLowerCase().indexOf(keyWord) !== -1;
      });
    }

    //--use methods javascript to sort--
    // if (order !== 0) {
    //   items.sort((firstItem, secondItem) => {
    //     var firstName = firstItem.name.toUpperCase();
    //     var secondName = secondItem.name.toUpperCase();
    //     if (firstName < secondName) { return order;}
    //     if (firstName > secondName) { return -order;}
    //     return 0;
    //   });
    // }
    
    //-- use lodash to sort--
    if(order === -1){
      items = orderBy(items, ['name'], ['asc']);
    }
    else if(order === 1){
      items = orderBy(items, ['name'], ['desc']);
    }
    

    return (
      <div className="container">
        <h1>
          Project04-ToDo List <span className="reactjs">React JS</span>
        </h1>
        <hr />
        <div className="row">
          {/* search & sort */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Handling onSearch={this.onSearch} onSort={this.onSort} />
          </div>

          {/* add item */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ButtonAddItem onToggleFormAddItem={this.onToggleFormAddItem} />
          </div>

          {/* List item */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-40">
            <ListItem
              items={items}
              onDeleteItem={this.onDeleteItem}
              onUpdateItem={this.onUpdateItem}
            />
          </div>

          {/* form add & edit item */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {displayForm ? (
              <FormAddItem
                onCloseForm={this.onCloseFormAddItem}
                onSubmit={this.onSubmit}
                itemUpdating={this.state.itemUpdating}
              />) : ""
            }
          </div>

          {/* end div row */}
        </div>
      </div>
    );
  }
}

export default App;
