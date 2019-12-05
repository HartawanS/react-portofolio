import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="pull-left">
                        <ul>
                            <li><a href="#pablo">Home</a></li>
                            <li><a href="#pablo">Company</a></li>
                            <li><a href="#pablo">Portfolio</a></li>
                            <li><a href="#pablo">Blog</a></li>
                        </ul>
                    </nav>
                    <p class="copyright pull-right">© 2019 <a href="#">Creative Tim</a>, made with love for a better web</p>
                </div>
            </footer>
        );
    }
}

export default Footer;