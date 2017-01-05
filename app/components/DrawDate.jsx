import React from 'react';
/* eslint-disable */
import styles from './DrawDate.scss';
/* eslint-enable */

class DrawDate extends React.Component {
    render() {
        return (
            <div className="next-draw">
                <div className=""><h4>Next draw date</h4></div>
                <div className="date"><i className="fa fa-calendar-times-o" aria-hidden="true"></i> {this.props.date}</div>
                <div className="date"><i className="fa fa-clock-o" aria-hidden="true"></i> {this.props.time}</div>
            </div>
        )
    }
}

DrawDate.propTypes = {
    date: React.PropTypes.string,
    time: React.PropTypes.string
};

export default DrawDate;
