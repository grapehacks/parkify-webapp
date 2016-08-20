import { connect } from 'react-redux'
import BadgedIcon from '../components/BadgedIcon.jsx'

const mapStateToProps = (state) => {
    return {
        counter: state.auth.user ? state.auth.user.unreadMsgCounter : 0
    }
};

const mapDispatchToProps = () => {
    return {
    }
};

const MessagesBadgedIcon = connect(
    mapStateToProps,
    mapDispatchToProps
)(BadgedIcon);


export default MessagesBadgedIcon;