import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <select name="filterName" className="form-control" >
                <option >Sort by</option>
                <option value={0}>ASC</option>
                <option value={1}>DESC</option>
            </select>
        );
    }
}

export default Sort;