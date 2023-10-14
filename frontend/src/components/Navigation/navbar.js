import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';

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
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Home <i className="icofont-thin-down"></i>
                                    </a>

                                    <ul className="dropdown-menu mega-dropdown-menu">
                                        <li className="nav-item">
                                            <a className="nav-link">Default Home</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Creative Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">IT Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Marketing Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Portfolio Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Studio Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Business Agency</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Startup Agency</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Services <i className="icofont-thin-down"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a className="nav-link">Services Style 1</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Services Style 2</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Services Style 3</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Services Style 4</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="/about" className="nav-link">About us</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Portfolio <i className="icofont-thin-down"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="/portfolio" className="nav-link">Portfolio</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/portfolio-details" className="nav-link">Portfolio Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Pages <i className="icofont-thin-down"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="/about" className="nav-link">About</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/services" className="nav-link">Services</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/service-details" className="nav-link">Services Details</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/portfolio" className="nav-link">Portfolio</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/portfolio-details" className="nav-link">Portfolio Details</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/team" className="nav-link">Team</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/pricing" className="nav-link">Pricing</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/faq" className="nav-link">FAQ</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/404" className="nav-link">404 error</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/contact" className="nav-link">Contact</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                        Blog <i className="icofont-thin-down"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="/blog" className="nav-link">Blog Grid</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/blog2" className="nav-link">Blog Right Sidebar</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/blog3" className="nav-link">Blog Left Sidebar</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="/blog-details" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact Us</a>
                                </li>
                            </ul>

                            <div className="others-options">
                                <a href="/pricing" className="btn btn-primary">
                                    Let's Begin
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

