/* eslint-disable */
import style from './AccountForm.scss';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AccountForm = (props) => {
    const changePassword = props.isPasswordForm;
    return (
        <div className="account">
            {!changePassword && <p className="hidden-print account_header">Change licence number</p>}
            {changePassword && <p className="hidden-print account_header">Change password</p>}
            <div className="account__avatar">
                {!changePassword && <div><Link className="account-change-password" to="/app/account?change-password=true" onClick={props.onChangeView}>Change password?</Link></div>}
                {changePassword && <div><Link className="account-change-password" to="/app/account" onClick={props.onChangeView}>Change licence?</Link></div>}
            </div>
            <div className="account__form">
                <div className="account-info">
                    <p>{props.user.name}</p>
                    <p className="account-email">{props.user.email}</p>
                </div>
                {!changePassword && drawChangeLicenceNumber(changePassword)}
                {changePassword && drawChangePassword(changePassword)}
            </div>
        </div>
    );

    function drawChangeLicenceNumber() {
        return (
            <div className="account-licence">
                <label>Car licence numbers</label>
                <input type="text" onChange={props.onChange} name="licenceNumber" placeholder="Each license number should be separated by comma" value={props.licenceNumber}/>
                <button className="ui-btn" onClick={props.onSave}>Save</button>
                {props.error && <span className="account-licence-error">{props.error}</span>}
                {props.success && <span className="account-licence-success">{props.success}</span>}
            </div>
        );
    }

    function drawChangePassword() {
        return (
            <div className="account-change-password">
                <label>Old password</label>
                <input type="password" onChange={props.onChange} name="oldPassword" placeholder="Old password" />
                <label>New password</label>
                <input type="password" onChange={props.onChange} name="newPassword" placeholder="New password, 4-16 digits" />
                <label>Confirm new password</label>
                <input type="password" onChange={props.onChange} name="confirmPassword" placeholder="Confirm new password" />
                <button className="ui-btn" onClick={props.onPasswordSave}>Save</button>
                {props.error && <span className="account-change-password-error">{props.error}</span>}
                {props.success && <span className="account-change-password-success">{props.success}</span>}
            </div>
        );
    }
};

AccountForm.propTypes = {
    user: PropTypes.object.isRequired,
    success: PropTypes.string,
    error: PropTypes.string,
    licenceNumber: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChangeView: PropTypes.func,
    onPasswordSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isPasswordForm: PropTypes.bool.isRequired
};

export default AccountForm;