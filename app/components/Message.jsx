import React from 'react';
/*eslint-disable*/
import style from './Message.scss';
/*eslint-enable*/
import DateUtils from '../common/DateUtils';

class Message extends React.Component {
    render() {

        const topic = this.props.topic;
        const text = this.props.text;
        const isReadClass = this.props.isRead ? 'read' : 'unread';
        let typeClass = '';
        if(this.props.type <= 1) {
            typeClass = 'subscribe';
        } else if(this.props.type <= 3) {
            typeClass = 'unsubscribe';
        } else {
            typeClass = 'info';
        }
        const date = new Date(this.props.date);
        const day = DateUtils.getDayString(date);
        const monthDay = DateUtils.getMonthDayString(date);
        return (
            <div className={isReadClass + ' message'} onClick={this.props.handleClick}>
                <div className={typeClass + ' message__date'}>
                    <span>{day}</span>
                    <span>{monthDay}</span>
                    <span>{date.getFullYear()}</span>
                </div>
                <div className="message__text">
                    <span>{topic}:</span>
                    <span>{text}</span>
                </div>
                <div className={typeClass + ' message__type'} >
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