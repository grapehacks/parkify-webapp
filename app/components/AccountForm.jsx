/* eslint-disable */
import style from './AccountForm.scss';
import React, {PropTypes} from 'react';

const AccountForm = (props) => {
    return (
        <div className="account">
            <div className="account__avatar"></div>
            <div className="account__form">
                <div className="account-info">
                    <p>{props.user.name}</p>
                    <p className="account-email">{props.user.email}</p>
                </div>
                <div className="account-licence">
                    <input type="text" onChange={props.onChange} name="licenceNumber" placeholder="Enter licence number" value={props.licenceNumber}/>
                    <button className="subscribe-btn" onClick={props.onSave}>Save</button>
                    <span className="account-licence-error">{props.error}</span>
                </div>
            </div>
        </div>
    );
};

AccountForm.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string,
    licenceNumber: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AccountForm;