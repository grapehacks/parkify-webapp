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
        const date = new Date(this.props.date).toLocaleDateString() + ' ' + new Date(this.props.date).toLocaleTimeString();

        return (
            <div className={typeClass} onClick={() => {this.props.handleClick()}}>
                <div className="messageTopic">
                    {topic}
                    <span className="messageDate">
                        {date}
                    </span>
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
    isRead: React.PropTypes.bool,
    date: React.PropTypes.string
};

export default Message;