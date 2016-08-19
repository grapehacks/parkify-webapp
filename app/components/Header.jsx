import React from 'react';
import {Link} from 'react-router';
import MessagesBadgedIcon from './../containers/MessagesBadgedIcon';

class Header extends React.Component {
    render() {
        return (
            <div className='gp-header'>
                <div className="menu">
                    <Link to='/app/home' activeClassName='active'>
                        <div className="logo pull-left"></div>
                    </Link>
                    <div className="icons pull-right">
                        <Link to='/login' activeClassName='active'>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
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