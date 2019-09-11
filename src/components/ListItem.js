import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {
    render() {
        var elementItem = this.props.items.map((item, index) => {
            return <Item key={index}  item={ item } index={ index } 
                        onDeleteItem={ this.props.onDeleteItem }           
                    />
        });
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <p className="panel-title">List item</p>
                </div>
                <div className="panel-body" >

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-lg-1">#</th>
                                <th className="col-lg-7">Name</th>
                                <th className="col-lg-2">Level</th>
                                <th className="col-lg-2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { elementItem }
                             
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListItem;