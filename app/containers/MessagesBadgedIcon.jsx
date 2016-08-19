import { connect } from 'react-redux'
import BadgedIcon from '../components/BadgedIcon.jsx'

const mapStateToProps = () => {
    return {
        counter: 6
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