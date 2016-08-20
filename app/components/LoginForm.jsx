import React, {Component, PropTypes} from 'react';
/*eslint-disable*/
import style from './LoginForm.scss';
/*eslint-enable*/

class LoginForm extends Component {
    componentDidMount() {
        this.state = {
            email: 'email@test.com',
            password: 'test_pass'
        };
        this.props.handleLoaded();
    }

    handleMailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        let defaultButtonClass = 'btn btn-primary btn-lg gp-login-submit-btn';
        this.props.logging ? defaultButtonClass += ' disabled' : '';
        let defaultLogin = !this.props.logging ? 'Login' : (<i className="fa fa-refresh fa-spin"></i>);
        let error = this.props.error ? (<p className="text-danger">{this.props.error}</p>) : '';
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!this.props.logging) {
                    this.props.handleSubmit({email: this.state.email, password: this.state.password});
                }
            }}>
                <div className="row gp-input">
                    <input type="text" placeholder="E-mail" onKeyUp={this.handleMailChange.bind(this)} defaultValue="email@test.com"/>
                </div>
                <div className="row gp-input">
                    <input type="password" placeholder="Password" onKeyUp={this.handlePasswordChange.bind(this)} defaultValue="test_pass"/>
                </div>
                <div className="row text-center">
                    {error}
                    <button type="submit" className={defaultButtonClass}>
                        {defaultLogin}
                    </button>
                </div>

            </form>
        );
    }
}

LoginForm.propTypes = {
    handleLoaded: PropTypes.func.isRequired,
    logging: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default LoginForm;