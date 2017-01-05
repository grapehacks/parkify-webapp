import React from 'react';
/*eslint-disable*/
import style from './MessageItem.scss';
/*eslint-enable*/

class Message extends React.Component {
    mapTypeToClass(type) {
        switch (type) {
            case 1: return 'panel-danger';
            case 2:
            case 3: return 'panel-success';
            default: return 'panel-default'
        }
    }

    render() {
        const { topic, text } = this.props;
        const isReadClass = this.props.read ? 'read' : 'unread';
        const typeClass = 'panel ' + this.mapTypeToClass(this.props.type) + ' ' + isReadClass;
        const date = new Date(this.props.date).toLocaleDateString() + ' ' + new Date(this.props.date).toLocaleTimeString();

        return (
            <div className={typeClass} onClick={() => {this.props.handleClick()}}>
                <div className="panel-heading">{topic}</div>
                <div className="panel-body">
                    {text}
                </div>
                <div className="panel-footer">
                    {date}
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
    read: React.PropTypes.bool,
    date: React.PropTypes.string
};

export default Message;