import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" id="exampleInputAmount" placeholder="Search" />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-info">Search</button>
                </span>
            </div>
        );
    }
}

export default Search;