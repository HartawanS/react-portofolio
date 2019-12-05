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

    // buttonClick(value) {
    //     this.setState({ signin: value });
    // }

    render() {
        const { signin } = this.state;
        return (
            <div className="hero">
                <div className="card">
                    <div className="button-box row">
                        <div id="btn-toggle"></div>
                        <button type="button" className="toggle-btn">Log In</button>
                        <button type="button" className="toggle-btn">Register</button>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="social-icons-space"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>

                    {/* {signin ? <Login /> : <Register /> } */}
                    <Register />

                
                </div>
            </div>
        );
    }
}

export { Auth };