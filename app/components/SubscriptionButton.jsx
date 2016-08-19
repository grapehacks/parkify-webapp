import React from 'react';
/* eslint-disable */
import styles from './SubscriptionButton.scss';
/* eslint-enable */

class SubscriptionButton extends React.Component {
    render() {
        return (
            <div className="turn-button on">
                <div className="icon"></div>
                <div className="always on">
                    <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default SubscriptionButton;