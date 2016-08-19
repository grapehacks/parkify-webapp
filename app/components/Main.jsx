import React from 'react';
import {Link} from 'react-router';
import Header from './Header';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <ul>
                        <li >
                            <Link to='/app/home' activeClassName='active'>
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link to='/app/messages' activeClassName='active'>
                                Messages
                            </Link>
                        </li>
                        <li >
                            <Link to='/app/settings' activeClassName='active'>
                                Settings
                            </Link>
                        </li>
                        <li >
                            <Link to='/login' activeClassName='active'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </Header>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object
};

export default Main;