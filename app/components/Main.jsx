import React from 'react';
import {Link} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
    componentDidMount() {
        this.props.handleMount();
    }

    render() {
        return (
            <div className="gp-main container">
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

                <div className="container gp-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object,
    handleMount: React.PropTypes.func
};

export default Main;