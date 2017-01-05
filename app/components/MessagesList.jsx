import React, {Component, PropTypes} from 'react';
import Message from './MessageItem';
/*eslint-disable*/
import style from './MessagesList.scss';
/*eslint-enable*/

class MessagesList extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.props.handleMount();
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.messages !== nextProps.messages) {
            this.setMessages(nextProps);
        }
    }

    setMessages(props) {
        const messages = props.messages.length > 0 ? props.messages.map(m => {
            return (
                <Message {...m} key={m._id} handleClick={() => {this.props.markAsRead(m)}} date={m.date}/>
            );
        }) : (<p className="text-center" >No messages found...</p>);
        this.setState({
            messages
        });
    }

    render() {
        return (
            <div className="messages">
                {this.props.loading ? 'Loading...' : this.state.messages}
            </div>
        );
    }
}

MessagesList.propTypes = {
    loading: PropTypes.bool,
    markAsRead: PropTypes.func,
    messages: PropTypes.array,
    handleMount: PropTypes.func
};

export default MessagesList;