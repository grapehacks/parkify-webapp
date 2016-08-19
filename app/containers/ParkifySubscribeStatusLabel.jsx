import { connect } from 'react-redux'
import SubscriptionStatusLabel from '../components/SubscriptionStatusLabel'

const mapStateToProps = (state) => {
    return {
        participate: state.auth.user.participate
    }
};

const ParkifySubscribeStatusLabel = connect(
    mapStateToProps
)(SubscriptionStatusLabel);

export default ParkifySubscribeStatusLabel;