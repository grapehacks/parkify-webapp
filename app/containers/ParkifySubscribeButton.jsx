import { connect } from 'react-redux'
import SubscriptionButton from '../components/SubscriptionButton'

const mapStateToProps = (state) => {
    return {
        subscribe: state.auth.user.participate === 1,
        rememberLastChoice: state.auth.user.rememberLastChoice
    }
};

const mapDispatchToProps = () => {
    return {
        handleClick: () => {
            console.log(arguments);
        }
    }
};

const ParkifySubscribeButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionButton);

export default ParkifySubscribeButton;