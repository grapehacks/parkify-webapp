/* eslint-disable */
import styles from './AvatarMenu.scss';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AvatarMenu = (props) => {
    return (
        <div>
            <button className="avatar-button"
                    onClick={props.toggleMenu}>
                {props.counter > 0 && renderBadge(props)}
                <div className="avatar-button__image-container">
                    <img className="avatar-img"
                         src="/img/no_user_photo.svg"
                         alt="profile image"/>
                </div>
            </button>
            {props.isOpened && renderMenu(props)}

        </div>
    );

    function renderMenu(props) {
        return (
            <div className="avatar-menu">
                <div className="avatar-menu__inner">
                    <ul>
                        <li><Link to='/app/home' activeClassName='active'>Home</Link></li>
                        <li><Link to='/app/messages' activeClassName='active'>Messages</Link></li>
                        <li><Link to='/app/winners' activeClassName='active'>Winners</Link></li>
                        <li><Link to='/app/account' activeClassName='active'>Account</Link></li>
                        <li className="separator"></li>
                        {props.isAdmin && <li><Link to='/app/admin/manage-users' activeClassName='active'>Manage users</Link></li>}
                        {props.isAdmin && <li> <Link to='/app/admin/manage-cards' activeClassName='active'>Manage cards</Link></li>}
                        {props.isAdmin && <li className="separator"></li>}

                        <li><a onClick={props.onLogoutClicked}>Logout</a></li>
                    </ul>
                </div>
                <div className="avatar-menu__arrow">
                </div>
            </div>
        );
    }

    function renderBadge(props) {
        return(
            <div className="avatar-messages-badge">{props.counter}</div>
        );
    }
};

AvatarMenu.propTypes = {
    counter: PropTypes.number.isRequired,
    isOpened: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    onLogoutClicked: PropTypes.func.isRequired
};

export default AvatarMenu;