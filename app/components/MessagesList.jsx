import React, {Component, PropTypes} from 'react';
import Message from './MessageItem';
/*eslint-disable*/
import style from './MessagesList.scss';
/*eslint-enable*/

class MessagesList extends Component {

    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        const messages = this.props.messages.length > 0 ? this.props.messages.map(m => {
            return (
                <Message {...m} key={m._id} handleClick={() => {this.props.markAsRead(m)}} />
            );
        }) : (<p className="text-center" >No messages found...</p>);
        return (
            <div className={`messages${this.props.markingRead ? ' marking' : ''}`}>
                {this.props.loading ? (<p className="text-center" >Loading...</p>) : messages}
            </div>
        );
    }
}

MessagesList.propTypes = {
    markingRead: PropTypes.bool,
    loading: PropTypes.bool,
    markAsRead: PropTypes.func,
    messages: PropTypes.array,
    handleMount: PropTypes.func
};

export default MessagesList;