import React from 'react';
/* eslint-disable */
import styles from './Header.scss';
/* eslint-enable */

class Header extends React.Component {
    render() {
        return (
            <div className='gp-header'>
                Header
                {this.props.children}
            </div>
        )
    }
}

Header.propTypes = {
    children: React.PropTypes.object
};

export default Header;