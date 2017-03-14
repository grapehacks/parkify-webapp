import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import AvatarMenu from './AvatarMenu';
import LogoutModal from './LogoutModal';
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
        this.removeModal();
        this.setState({isLogoutClicked: false});
        this.props.handleLogoutClick();
    }

    onCancel(event) {
        event.preventDefault();
        this.removeModal();
        this.setState({isLogoutClicked: false});
    }

    renderModal() {
        let container = document.querySelector('#modal-container');
        let app = document.querySelector('#app');
        app.classList.add('blur');

        {/* eslint-disable */}
        var node = ReactDom.findDOMNode(container);
        ReactDom.render((<LogoutModal auth={this.props.auth} onLogout={this.onLogout} onCancel={this.onCancel} />), node);
    }

    removeModal() {
        let app = document.querySelector('#app');
        app.classList.remove('blur');

        let container = document.querySelector('#modal-container');
        ReactDom.unmountComponentAtNode(container);
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
                {this.state.isLogoutClicked && this.renderModal()}
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