import React, { Component } from 'react';
import './App.css'
import Driving from './components/Driving';
import ButtonAddItem from './components/ButtonAddItem';
import ListItem from './components/ListItem';
import FormAddItem from './components/FormAddItem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            displayForm: true,
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('items')){
            var items = JSON.parse(localStorage.getItem('items'));
            this.setState({
                items: items
            })
        }
        
    }
    
    // use library randomstring to create random strings, then random string assigned to id
    generateID = () => {
        var randomstring = require("randomstring");
        var id = randomstring.generate();
        return id;
    }

    onGenerateData = () => {
        var items = [
            {
                id: this.generateID(),
                name: 'Hoc react js',
                level: -1
            },
            {
                id: this.generateID(),
                name: 'Javascript',
                level: 0
            },
            {
                id: this.generateID(),
                name: 'Node js',
                level: 1
            }
        ];
        localStorage.setItem('items', JSON.stringify(items));  
    }


    // show or close form add item
    onConvertFormAddItem = () => {
        this.setState({
            displayForm: !this.state.displayForm
        });
    }

    //submit on form add item
    onSubmit = (newItem) => {
        var items = this.state.items;

        newItem.id = this.generateID();
        items.push(newItem);
        this.setState({
            items
        });
    }

    // delete item
    onDeleteItem = (id) => {
        var {items} = this.state;

        // method of array help find index
        var index = items.findIndex((item) => {
            return item.id === id;
        });
        items.splice(index, 1);
        this.setState({
            items
        });
        localStorage.setItem('items', JSON.stringify(items));  
    }

    render() {
        var { items, displayForm } = this.state;
        return (
            <div className="container">
                <h1>Project04-ToDo List <span className="reactjs">React JS</span></h1>
                <hr/>
                <button onClick={this.onGenerateData}>data</button>
                <div className="row">

                    {/* search & sort */}
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Driving />
                    </div>

                    {/* add item */}
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ButtonAddItem onConvertFormAddItem={this.onConvertFormAddItem}/>
                    </div>
                    
                    {/* List item */}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-40">
                        <ListItem
                            items={ items }
                            onDeleteItem={ this.onDeleteItem }
                        />
                    </div>
                    
                    {/* form add & edit item */}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        { displayForm ? 
                            <FormAddItem
                                onCloseForm={ this.onConvertFormAddItem }
                                onSubmit={ this.onSubmit }
                            /> : '' 
                        } 
                    </div>

                {/* end row */}
                </div>
                
                
            </div>
        );
    }
}

export default App;