import React from 'react';
/* eslint-disable */
import styles from './SubscriptionButton.scss';
/* eslint-enable */

class SubscriptionButton extends React.Component {
    render() {
        const subscribeClass = this.props.subscribe ? 'on turn-button' : 'off turn-button';
        const rememberLastChoice = this.props.subscribe ? 'on always' : 'off always';
        const rememberLastChoiceClass = this.props.rememberLastChoice ? rememberLastChoice : rememberLastChoice + ' dn';
        return (
            <div onClick={() => {this.props.handleClick()}} className={subscribeClass}>
                <div className="icon"></div>
                <div className={rememberLastChoiceClass}>
                    <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

SubscriptionButton.propTypes = {
    handleClick: React.PropTypes.func,
    subscribe: React.PropTypes.bool,
    rememberLastChoice: React.PropTypes.bool
};

export default SubscriptionButton;