// import React from 'react';
import {connect} from 'react-redux'
import {login} from '../redux/actions/authActions.jsx'
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
            dispatch(login(credentials));
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