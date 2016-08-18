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
                            <Link to='/' activeClassName='active'>
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link to='/users' activeClassName='active'>
                                Users
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

module.exports = Main;