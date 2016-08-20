import React, {Component, PropTypes} from 'react';
import Message from './Message';
class ActionableMessages extends Component {
    componentDidMount() {
        this.props.handleMount();
    }
    render() {
        const messages = this.props.messages.map(m => {
            return (
                <Message text={m.text} topic={m.topic} key={m._id} type={m.type}/>
            );
        });
        return (
            <div>
                {messages}
            </div>
        );
    }
}

ActionableMessages.propTypes = {
    messages: PropTypes.array,
    handleMount: PropTypes.func
};

export default ActionableMessages;