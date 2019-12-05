import React, { Component } from "react";
import '../assets/css/style.css';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';

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
                <div className="form-box">
                    <div className="button-box row">
                        <div id="btn-toggle"></div>
                        <button type="button" className="toggle-btn">Log In</button>
                        <button type="button" className="toggle-btn">Register</button>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>

                    {signin ? <Login /> : <Register />}

                
                </div>
              </div>
        );
    }
}

export { Auth };