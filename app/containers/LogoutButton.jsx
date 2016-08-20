import React from 'react';
import {connect} from 'react-redux'
import {logout} from '../redux/actions/authActions.jsx'

class Icon extends React.Component {
    render() {
        return (<a onClick={(e) => {
            e.preventDefault();
            this.props.handleClick()
        }} href="#">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
        </a>);
    }
}

Icon.propTypes = {
    handleClick: React.PropTypes.func
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(logout());
        }
    }
};

const LogoutButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);


export default LogoutButton;