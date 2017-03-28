import React, {Component, PropTypes} from 'react';
import Notifications from './../containers/Notifications'

class Messages extends Component {
    render() {
        return (
            <div className="messages-container">
                <p className="messages-title">Messages</p>
                <Notifications />
            </div>
        );
    }
}

Messages.propTypes = {
    children: PropTypes.node
};

export default Messages;