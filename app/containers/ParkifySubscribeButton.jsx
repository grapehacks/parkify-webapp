import { connect } from 'react-redux'
import SubscriptionButton from '../components/SubscriptionButton'
import { subscribe, unsubscribe } from '../redux/actions/subscribeActions'

const mapStateToProps = (state) => {
    return {
        subscribe: state.auth.user.participate === 1,
        rememberLastChoice: state.auth.user.rememberLastChoice
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (register, remember) => {
            if (register) {
                dispatch(unsubscribe({rememberLastChoice: remember}));
            } else {
                dispatch(subscribe({rememberLastChoice: remember}));
            }

        }
    }
};

const ParkifySubscribeButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionButton);

export default ParkifySubscribeButton;