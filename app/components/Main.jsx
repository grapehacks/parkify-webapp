import React from 'react';
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
    render() {
        return (
            <div className="gp-main">
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

                <div className="gp-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object
};

export default Main;