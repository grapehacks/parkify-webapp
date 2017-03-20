/* eslint-disable */
import style from './Account.scss';
import React from 'react';

class Account extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="account">
                    <div className="account__avatar"></div>
                    <div className="account__form">
                        <p>Pawe³ Tymczuk</p>
                        <p className="account__form-email">paty@grapeup.com</p>
                        <div className="">
                            <p>Licence Number</p>
                            <input type="email" className="form-control" placeholder="Enter licence number" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;