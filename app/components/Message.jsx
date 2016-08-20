import React from 'react';
/*eslint-disable*/
import style from './Message.scss';
/*eslint-enable*/

class Message extends React.Component {
    render() {

        const topic = this.props.topic;
        const text = this.props.text;
        const typeClass = 'messageType' + this.props.type;

        return (
            <div className={typeClass}>
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
    topic: React.PropTypes.string,
    text: React.PropTypes.string,
    type: React.PropTypes.number,
};

export default Message;