// import React from 'react';
import {connect} from 'react-redux'
import {loggingIn} from '../redux/actions/authActions'
import LoginForm from '../components/LoginForm.jsx'

const mapStateToProps = (state) => {
    return {
        logging: state.auth.logging,
        error: state.auth.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (credentials) => {
            dispatch(loggingIn({credentials}));
        },
        handleLoaded: () => {

        }
    }
};

const ParkifyLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default ParkifyLogin;