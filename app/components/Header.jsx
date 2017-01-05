import React from 'react';
import {Link} from 'react-router';
import MessagesBadgedIcon from './../containers/MessagesBadgedIcon';
import LogoutButton from './../containers/LogoutButton';
/*eslint-disable*/
import style from './Header.scss';
/*eslint-enable*/

class Header extends React.Component {
    render() {
        let name = this.props.user.name ? this.props.user.name.split(' ')[1] : 'user';
        // TODO find out what is going on with undefined string
        return (
            <div className='gp-header'>
                <div className="menu">
                    <Link to='/app/home' activeClassName='active'>
                        <div className="logo pull-left"></div>
                    </Link>
                    <div className="icons pull-right">
                        {/*<Link to='/app/settings' activeClassName='active'>*/}
                            {/*<i className="fa fa-cog" aria-hidden="true"></i>*/}
                        {/*</Link>*/}
                        <Link to='/app/messages' activeClassName='active'>
                            <MessagesBadgedIcon />
                        </Link>
                        <LogoutButton/>
                    </div>
                    <span className="fname pull-right">Hi {name}!</span>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    user: React.PropTypes.object,
    children: React.PropTypes.object
};

export default Header;