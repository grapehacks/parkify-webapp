import { connect } from 'react-redux'
import ActionableMessages from '../components/ActionableMessages.jsx'
import {getMessages, markAsRead} from '../redux/actions/messagesActions'
import {ping} from '../redux/actions/authActions'

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMount: () => {
            dispatch(getMessages());
        },
        markAsRead: (message) => {
            dispatch(markAsRead(message));
            setTimeout(() => {
                dispatch(ping(true));
            }, 200);
        }
    }
};

const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionableMessages);


export default Notifications;