import React from 'react';
import ModalSubscribe from './ModalSubscribe';
import ModalUnsubscribe from './ModalUnsubscribe';
/* eslint-disable */
import styles from './SubscriptionButton.scss';
/* eslint-enable */

class SubscriptionButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSubscribeModal: false,
            showUnsubscribeModal: false
        }
    }

    handleClick() {
        if (this.props.processing) {
            return;
        }
        if (this.props.subscribe) {
            this.setState({showUnsubscribeModal: true})
        } else {
            this.setState({showSubscribeModal: true})
        }

    }

    render() {
        const subscribeClass = this.props.subscribe ? 'on turn-button' : 'off turn-button';
        const rememberLastChoice = this.props.subscribe ? 'on always' : 'off always';
        const rememberLastChoiceClass = this.props.rememberLastChoice ? rememberLastChoice : rememberLastChoice + ' dn';
        return (
            <div onClick={() => {
                this.handleClick()
            }} className={subscribeClass}>
                <div className="icon"></div>
                <div className={rememberLastChoiceClass}>
                    <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                </div>
                <ModalSubscribe visible={this.state.showSubscribeModal} onClose={() => {
                    this.setState({showSubscribeModal: false})
                }} onConfirm={(remember) => {
                    this.props.handleClick(true, remember);
                    this.setState({showSubscribeModal: false})
                }}/>
                <ModalUnsubscribe visible={this.state.showUnsubscribeModal} onClose={() => {
                    this.setState({showUnsubscribeModal: false})
                }} onConfirm={(remember) => {
                    this.props.handleClick(false, remember);
                    this.setState({showUnsubscribeModal: false})
                }}/>
            </div>
        )
    }
}

SubscriptionButton.propTypes = {
    handleClick: React.PropTypes.func,
    subscribe: React.PropTypes.bool,
    rememberLastChoice: React.PropTypes.bool,
    processing: React.PropTypes.bool
};

export default SubscriptionButton;