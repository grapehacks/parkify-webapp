import React from 'react';
/*eslint-disable*/
import style from './Message.scss';
/*eslint-enable*/

class Message extends React.Component {
    render() {

        const topic = this.props.topic;
        const text = this.props.text;
        const isReadClass = this.props.isRead ? 'read' : 'unread';
        const typeClass = 'gp-message messageType' + this.props.type + ' ' + isReadClass;

        return (
            <div className={typeClass} onClick={() => {this.props.handleClick()}}>
                <div className="messageTopic">
                    {topic}
                </div>
                <div className="messageText">
                    {text}
                </div>
            </div>
        )
    }
}

Message.propTypes = {
    handleClick: React.PropTypes.func,
    topic: React.PropTypes.string,
    text: React.PropTypes.string,
    type: React.PropTypes.number,
    isRead: React.PropTypes.bool
};

export default Message;