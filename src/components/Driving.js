import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Driving extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 padding-0">
                    <Search/>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort/>
                </div>
            </div>
                );
            }
        }
        
export default Driving;