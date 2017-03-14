import React, {Component, PropTypes} from 'react';
/*eslint-disable*/
import style from './LoginForm.scss';
/*eslint-enable*/

class LoginForm extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        };
        this.handleMailChange = this.handleMailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
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

    submitForm(event){
        event.preventDefault();
        if (!this.props.logging) {
            this.props.handleSubmit({email: this.state.email, password: this.state.password});
        }
    }

    render() {
        let defaultButtonClass = 'btn btn-primary btn-lg gp-login-submit-btn';
        this.props.logging ? defaultButtonClass += ' disabled' : '';
        let defaultLogin = !this.props.logging ? 'Login' : (<i className="fa fa-refresh fa-spin"></i>);
        let error = this.props.error ? (<p className="text-danger">{this.props.error}</p>) : '';
        return (
            <form onSubmit={this.submitForm}>
                <div className="row gp-input">
                    <input type="text"
                           name="email"
                           placeholder="E-mail"
                           onKeyUp={this.handleMailChange}
                           onBlur={this.handleMailChange}
                           onChange={this.handleMailChange}/>
                </div>
                <div className="row gp-input">
                    <input type="password"
                           name="password"
                           placeholder="Password"
                           onKeyUp={this.handlePasswordChange}
                           onBlur={this.handlePasswordChange}
                           onChange={this.handlePasswordChange}/>
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