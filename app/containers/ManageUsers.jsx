/* eslint-disable */
import styles from './ManageUsers.scss';
import React/*, {PropTypes}*/ from 'react';

class ManageCards extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="manage-users">
                    <p className="hidden-print">Manage Users</p>
                    <div className="manage-users__form">
                        <span>Search user:</span>
                        <div className="select-editable">
                            <select> {/*this.nextElementSibling.value=this.value*/}
                                <option value=""></option>
                                <option value="115x175 mm">115x175 mm</option>
                                <option value="120x160 mm">120x160 mm</option>
                                <option value="120x287 mm">120x287 mm</option>
                            </select>
                            <input type="text" name="format" value="Skrzyszewski Krzysztof"/>
                        </div>
                        <span>User name:</span>
                        <input type="text" name="format" value="Skrzyszewski Krzysztof"/>
                        <span>Email:</span>
                        <input type="text" name="format" value="Skrzyszewski Krzysztof"/>
                        <span>Licence number:</span>
                        <input type="text" name="format" value="Skrzyszewski Krzysztof"/>
                        <span>Removed:</span>
                        <div className="checkbox">
                            <input type="checkbox" id="cb" name="cb" />
                            <label htmlFor="cb"></label>
                        </div>
                        <button className="subscribe-btn">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageCards;