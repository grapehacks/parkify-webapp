import React, {Component, PropTypes} from 'react';

class Messages extends Component {
    render() {
        return (
            <div>Messages</div>
        );
    }
}

Messages.propTypes = {
    children: PropTypes.node
};

export default Messages;