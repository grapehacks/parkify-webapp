import React, { Component, PropTypes } from 'react';

class StatefulButton extends Component {
    render() {
        let processing = '';
        if (this.props.processing){
            processing = '...';
        }

        return (
            <a onClick={() => {this.props.handleClick(this.props.active, this.props.processing)}} className={this.props.className}>
                {this.props.text} {processing}
            </a>
        );
    }
}

StatefulButton.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string,
    processing: PropTypes.bool
};

module.exports = StatefulButton;