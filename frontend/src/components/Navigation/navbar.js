import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import '../../styles/responsive.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Navbar extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <div id="navbar" className="navbar-area">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <img src="../../images/logo.png" alt="logo" />
                        </a>

                        {/* Toggle navigation */}
                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/about" className="nav-link">About Website</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/about" className="nav-link">Work Process</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/about" className="nav-link">Team</a>
                                </li>
                            </ul>

                            <div className="others-options">
                                <a href="/pricing" className="btn btn-primary">
                                    Login
                                </a>
                            </div>

                            <div className="others-options">
                                <a href="/pricing" className="btn btn-primary">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
