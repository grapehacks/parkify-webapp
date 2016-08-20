import React from 'react';

class Message extends React.Component {
    render() {

        const topic = this.props.topic;
        const text = this.props.text;

        return (
            <div className='messageContainer'>
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
    text: React.PropTypes.string
};

export default Message;