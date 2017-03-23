import React from 'react';
/* eslint-disable */
import styles from './Footer.scss';
/* eslint-enable */

class Footer extends React.Component {
    render() {
        return (
            <div className='gp-footer text-center hidden-print'>
                Powered by <img src="img/grape-logo.png"/>
            </div>
        )
    }
}


export default Footer;