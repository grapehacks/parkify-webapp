import React from 'react';
/* eslint-disable */
import styles from './NextDrawDate.scss';
/* eslint-enable */

class NextDrawDate extends React.Component {
    render() {
        return (
            <div className="next-draw">
                <div className="">Next draw date</div>
                <div className="date"><i className="fa fa-calendar-times-o" aria-hidden="true"></i> {this.props.date}</div>
            </div>
        )
    }
}

NextDrawDate.propTypes = {
    date: React.PropTypes.string
};

export default NextDrawDate;
