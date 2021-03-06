import React, {Component, PropTypes} from 'react';
import ParkifyLogin from '../containers/ParkifyLogin';

class Login extends Component {
    componentDidMount(){
        // if user is redirected to this component than he needs to login again
        localStorage.removeItem('authenticated');
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    <div className="logo"></div>
                    <ParkifyLogin/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    children: PropTypes.node
};

export default Login;