import React from 'react';
import { connect } from 'react-redux'
import { subscribe, unsubscribe } from '../redux/actions/subscribeActions.jsx'
import StatefulButton from '../components/StatefulButton.jsx'

const mapStateToProps = (state) => {
    return {
        text: state.subscribeState.subscribed ? 'Unsubscribe' : 'Subscribe',
        active: state.subscribeState.subscribed,
        processing: state.subscribeState.processing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (active, processing) => {
            if(processing){
                return;
            }
            if (active) {
                dispatch(unsubscribe());
            } else {
                dispatch(subscribe());
            }
        }
    }
};

const SubscribeButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatefulButton);

SubscribeButton.propTypes = {
    className: React.PropTypes.string
};

export default SubscribeButton;