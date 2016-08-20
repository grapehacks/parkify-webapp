import React from 'react';
/* eslint-disable */
import styles from './DrawDate.scss';
/* eslint-enable */

class DrawDate extends React.Component {
    render() {
        return (
            <div className="next-draw">
                <div className="">Next draw date</div>
                <div className="date"><i className="fa fa-calendar-times-o" aria-hidden="true"></i> {this.props.date}</div>
            </div>
        )
    }
}

DrawDate.propTypes = {
    date: React.PropTypes.string
};

export default DrawDate;
