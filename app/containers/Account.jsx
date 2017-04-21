import React, {PropTypes} from 'react';
import AccountForm from '../components/AccountForm';
import {connect} from 'react-redux';
import {editLicenceNumber, changePassword} from '../redux/actions/accountActions';
import {clearMessages} from '../redux/actions/authActions';

class Account extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                licenceNumber: this.props.user.licenceNumber,
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            }
        };
        this.onSave = this.onSave.bind(this);
        this.onPasswordSave = this.onPasswordSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
    }

    onChange(event) {
        var field = event.target.name;
        var value = event.target.value;
        const temp = Object.assign({}, this.state.user);
        temp[field] = value;

        this.props.handleClearMessages();
        return this.setState({user: temp});
    }

    onSave() {
        this.props.handleOnSave(this.props.user._id, this.state.user.licenceNumber);
    }

    onPasswordSave() {
        this.props.handleOnPasswordSave(this.props.user._id, this.state.user.oldPassword, this.state.user.newPassword, this.state.user.confirmPassword);
    }

    componentWillUnmount() {
        this.props.handleClearMessages();
    }

    onChangeView() {
        this.props.handleClearMessages();
    }

    render() {
        const location = this.props.location;
        const changePasswordPath = !!(location.query && location.query['change-password']);
        return (
            <div className="content">
                <AccountForm
                    user={this.props.user}
                    licenceNumber={this.state.user.licenceNumber}
                    error={this.props.error}
                    success={this.props.success}
                    onSave={this.onSave}
                    onChangeView={this.onChangeView}
                    onPasswordSave={this.onPasswordSave}
                    onChange={this.onChange}
                    isPasswordForm={changePasswordPath}/>
            </div>
        )
    }
}

Account.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    handleOnSave: PropTypes.func.isRequired,
    handleOnPasswordSave: PropTypes.func.isRequired,
    handleClearMessages: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
    const props = {
        user: state.auth.user,
        error: state.auth.error,
        success: state.auth.success
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnSave: (userId, licenceNumber) => {
            dispatch(editLicenceNumber({userId, licenceNumber}));
        },
        handleClearMessages: () => {
            dispatch(clearMessages());
        },
        handleOnPasswordSave: (id, oldPassword, newPassword, confirmPassword) => {
            dispatch(changePassword({id, oldPassword, newPassword, confirmPassword}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);