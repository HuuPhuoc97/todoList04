import React, { Component } from 'react';

class ButtonAddItem extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                </div>
                <button
                    type="button"
                    className="btn btn-info col-xs-10 col-sm-10 col-md-10 col-lg-10"
                    onClick={ this.props.onConvertFormAddItem }
                >
                    Add item
                </button>
            </div>
        );
    }
}

export default ButtonAddItem;