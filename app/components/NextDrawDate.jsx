import React from 'react';
/* eslint-disable */
import styles from './NextDrawDate.scss';
/* eslint-enable */

class NextDrawDate extends React.Component {
    render() {
        return (
            <div className="next-draw">
                <div className="">Next draw date</div>
                <div className="date"><i className="fa fa-calendar-times-o" aria-hidden="true"></i> 23-08-2016</div>
            </div>
        )
    }
}

export default NextDrawDate;
