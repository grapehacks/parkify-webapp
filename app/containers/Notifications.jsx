import { connect } from 'react-redux'
import ActionableMessages from '../components/ActionableMessages.jsx'
import {getMessages, markAsRead} from '../redux/actions/messagesActions'

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
        }
    }
};

const Notifications = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionableMessages);


export default Notifications;