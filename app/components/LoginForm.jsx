import React, {Component, PropTypes} from 'react';
/*eslint-disable*/
import style from './LoginForm.scss';
/*eslint-enable*/

class LoginForm extends Component {
    constructor() {
        super();
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleFormSubmit(e) {
        e.preventDefault();
        if (!this.props.logging) {
            this.props.handleSubmit({email: this.state.email, password: this.state.password});
        }
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
        let error = this.props.error ? (<p className="alert alert-danger">{this.props.error}</p>) : '';
        return (
            <form onSubmit={this.handleFormSubmit}>
                {error}
                <div className="row gp-input">
                    <input type="text" placeholder="E-mail" onChange={this.handleMailChange}/>
                </div>
                <div className="row gp-input">
                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                </div>
                <div className="row text-center">
                    <button type="submit" className={defaultButtonClass}>
                        {defaultLogin}
                    </button>
                </div>

            </form>
        );
    }
}

LoginForm.propTypes = {
    logging: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default LoginForm;