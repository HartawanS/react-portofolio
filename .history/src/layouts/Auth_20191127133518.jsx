import React, { Component } from "react";
import '../assets/css/style.css';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signin: true,

        };
    }

    changeLogin() {
        this.state.signin = true;
        // this.setState({ signin: value });
    }

    changeRegister() {
        this.state.signin === false;
        // this.setState({ signin: false });
    }

    render() {
        const { signin } = this.state;
        return (
            <div className="hero">
                <div className="card form-box">
                    <div className="button-box row">
                        {/* <div id="btn-toggle"></div> */}
                        <button className={'toggle-btn ' + (this.state.signin? 'btn-active': '')} onClick={this.changeLogin}>Log In</button>
                        <button className={'toggle-btn ' + (!this.state.signin? 'btn-active': '')} onClick={this.changeRegister}>Register</button>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>

                    {signin ? <Login /> : <Register /> }
                    {/* <Register /> */}

                
                </div>
            </div>
        );
    }
}

export { Auth };