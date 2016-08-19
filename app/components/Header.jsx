import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className='gp-header'>
                <div className="menu">
                    <div className="logo pull-left"></div>
                    <div className="icons pull-right">
                        <Link to='/login' activeClassName='active'>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </Link>
                        <Link to='/app/settings' activeClassName='active'>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </Link>
                        <Link to='/app/messages' activeClassName='active'>
                            <i className="fa fa-commenting" aria-hidden="true">
                                <div className="notification off">12</div>
                            </i>
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