import React, {Component, PropTypes} from 'react';
import Notifications from './../containers/Notifications'

class Messages extends Component {
    render() {
        return (
            <div className="messages-container">
                <Notifications />
            </div>
        );
    }
}

Messages.propTypes = {
    children: PropTypes.node
};

export default Messages;