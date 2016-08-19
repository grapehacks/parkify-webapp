import React from 'react';
/* eslint-disable */
import styles from './SubscriptionStatusLabel.scss';
/* eslint-enable */

class SubscriptionStatusLabel extends React.Component {
    render() {
        let participateClass;
        let participateLabel;

        switch (this.props.participate) {
            case 0:
                participateClass = 'status off';
                participateLabel = 'Not subscribed';
                break;
            case 1:
                participateClass = 'status on';
                participateLabel = 'Subscribed';
                break;
            default:
                participateClass = 'status off';
                participateLabel = 'Not decided yet';
        }

        return (
            <div className={participateClass}>
                {participateLabel}
            </div>
        )
    }
}

SubscriptionStatusLabel.propTypes = {
    participate: React.PropTypes.number
};

export default SubscriptionStatusLabel;