import React, {PropTypes} from 'react';
import AccountForm from '../components/AccountForm';
import {connect} from 'react-redux';
import {editLicenceNumber} from '../redux/actions/accountActions';
import {clearError} from '../redux/actions/authActions';

class Account extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                licenceNumber: this.props.user.licenceNumber
            }
        };
        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        var field = event.target.name;
        var value = event.target.value;
        const temp = {};
        temp[field] = value;

        this.props.handleClearError();
        return this.setState({user: temp});
    }

    onSave() {
        this.props.handleOnSave(this.props.user._id, this.state.user.licenceNumber);
    }

    componentWillUnmount() {
        this.props.handleClearError();
    }

    render() {
        return (
            <div className="content">
                <AccountForm
                    user={this.props.user}
                    licenceNumber={this.state.user.licenceNumber}
                    error={this.props.error}
                    onSave={this.onSave}
                    onChange={this.onChange}/>
            </div>
        )
    }
}

Account.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    handleOnSave: PropTypes.func.isRequired,
    handleClearError: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
    const props = {
        user: state.auth.user,
        error: state.auth.error
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnSave: (userId, licenceNumber) => {
            dispatch(editLicenceNumber({userId, licenceNumber}));
        },
        handleClearError: () => {
            dispatch(clearError());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);