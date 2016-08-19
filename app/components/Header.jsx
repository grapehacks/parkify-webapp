import React from 'react';
import {Link} from 'react-router';
import MessagesBadgedIcon from './../containers/MessagesBadgedIcon';
import LogoutButton from './../containers/LogoutButton';

class Header extends React.Component {
    render() {
        return (
            <div className='gp-header'>
                <div className="container menu">
                    <Link to='/app/home' activeClassName='active'>
                        <div className="logo pull-left"></div>
                    </Link>
                    <div className="icons pull-right">
                        <LogoutButton/>
                        <Link to='/app/settings' activeClassName='active'>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </Link>
                        <Link to='/app/messages' activeClassName='active'>
                            <MessagesBadgedIcon />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    children: React.PropTypes.object
};

export default Header;