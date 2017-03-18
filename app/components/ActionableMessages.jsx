import React, {Component, PropTypes} from 'react';
/*eslint-disable*/
import Message from './Message';
class ActionableMessages extends Component {
    componentDidMount() {
        this.props.handleMount();
    }

    markAsRead(message) {
        const self = this;
        return function(event) {
            event.preventDefault();
            self.props.markAsRead(message);
        };
    }

    render() {
        const messages = this.props.messages && this.props.messages.length > 0 ? this.props.messages.map(m => {
            return (
                <Message
                    text={m.text}
                    topic={m.topic}
                    key={m._id}
                    type={m.type}
                    isRead={m.read}
                    handleClick={this.markAsRead(messages)}
                    date={m.date}/>
            );
        }) : (<p className="text-center" >No messages found...</p>);
        return (
            <div style={{paddingTop: '40px'}}>
                {messages}
            </div>
        );
    }
}

ActionableMessages.propTypes = {
    markAsRead: PropTypes.func,
    messages: PropTypes.array,
    handleMount: PropTypes.func
};

export default ActionableMessages;