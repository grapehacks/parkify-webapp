import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import AvatarMenu from './AvatarMenu';
import {logout} from '../redux/actions/authActions';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpened: false,
            isLogoutClicked: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.onLogoutClicked = this.onLogoutClicked.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    toggleMenu(event) {
        event.stopPropagation();
        this.setState({isOpened: !this.state.isOpened});
    }

    hideMenu(event) {
        event.stopPropagation();
        const isOpened = false;
        this.setState({isOpened: isOpened});
    }

    onLogoutClicked() {
        this.setState({isLogoutClicked: true});
    }

    onLogout(event) {
        event.preventDefault();
        this.setState({isLogoutClicked: false});
        this.props.handleLogoutClick();
    }

    onCancel(event) {
        event.preventDefault();
        this.setState({isLogoutClicked: false});
    }

    renderModalDialog() {
        return (
            <div className="">
                <div className="container">
                    TODO TODO TODO
                </div>
            </div>
        );
    }

    render() {
        const user = this.props.auth.user;
        return (
            <div className='gp-header' onClick={this.hideMenu}>
                <div className="menu">
                    <Link to='/app/home' activeClassName='active'>
                        <div className="logo pull-left"></div>
                    </Link>
                    <div className="icons pull-right flex-container">
                        <p>{user.name}</p>
                        <AvatarMenu
                            isOpened={this.state.isOpened}
                            toggleMenu={this.toggleMenu}
                            counter={this.props.counter ? this.props.counter: 0}
                            onLogoutClicked={this.onLogoutClicked} />
                    </div>
                </div>
                {this.state.isLogoutClicked && this.renderModalDialog()}
            </div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.object,
    counter: PropTypes.number,
    auth: PropTypes.object.isRequired,
    handleLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        counter: state.auth.user ? state.auth.user.unreadMsgCounter : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogoutClick: () => {
            dispatch(logout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);