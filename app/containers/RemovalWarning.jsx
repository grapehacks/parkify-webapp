import React from 'react';
import {connect} from 'react-redux'

class Warning extends React.Component {
    render() {
        return this.props.isRemoved ? (<div className="alert alert-danger">
            You are marked as removed from draw. Contact Admin if you want to change this setting.
        </div>) : null;
    }
}

Warning.propTypes = {
    isRemoved: React.PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        isRemoved: state.auth.user.removed
    }
};

const mapDispatchToProps = () => {
    return {    }
};

const RemovalWarning = connect(
    mapStateToProps,
    mapDispatchToProps
)(Warning);


export default RemovalWarning;