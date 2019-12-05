import React, { Component } from "react";
import '../../assets/css/style.css';
import { Link } from "react-router-dom";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signin: true,

        };
    }

    render() {
        return (
            <div className="container hero">
                <div className="row">
                  <div className="form-box">
                    <div className="button-box">
                        <div id="btn"></div>
                        <button type="button" className="toggle-btn" onClick={this.state.signin = true}>Log In</button>
                        <button type="button" className="toggle-btn" onClick={this.state.signin = false}>Register</button>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>

                    {this.state.signin  ? <Login /> : <Register />}

                    
                </div>
                </div>
              </div>
        );
    }
}

export { Auth };