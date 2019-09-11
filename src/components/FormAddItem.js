import React, { Component } from 'react';

class FormAddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            level: 0
        };
    }

    onChangeDate = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'level'){
            if(value === '-1')
                value = -1;
            else if(value === '1')
                value = 1;
            else
                value = 0;
        }
        this.setState({
            [name]: value
        });
        console.log( this.state);
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        
        this.onResetForm();
    }

    // Reset form to default
    onResetForm = () => {
        this.setState({
            id: '',
            name: '',
            level: -1
        });
    }

    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                Add Item
                                <i 
                                    className="fa fa-times iconCloseAddItem" 
                                    aria-hidden="true" 
                                    onClick={ this.props.onCloseForm }
                                />
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={ this.onSubmit }>
                                <div className="form-group">
                                    <label >Name: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={ this.state.name }
                                        onChange={ this.onChangeDate }
                                    />
                                </div>

                                <label >Level: </label>
                                <select 
                                    className="form-control" 
                                    name="level" 
                                    value={ this.state.level }
                                    onChange={ this.onChangeDate }
                                >
                                    
                                    <option value={-1}>Small</option>
                                    <option value={0}>Medium</option>
                                    <option value={1}>Hight</option>
                                </select><br />

                                <div className="text-center">
                                    <button type="submit" className="btn btn-success mr-5">Submit</button>
                                    <button type="button" className="btn btn-warning" onClick={ this.onResetForm }>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FormAddItem;