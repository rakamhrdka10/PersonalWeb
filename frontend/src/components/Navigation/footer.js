import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/logo.png" alt="image" />
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="linkedin.com" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4 pl-5">
                                <h3>Explore</h3>

                                <ul className="list">
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/portfolio">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/team">
                                            Team
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    <li>
                                        <a href="/contact">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/pricing">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/faq">
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/terms-conditions">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <ul className="get-in-touch">
                                    <li><i className="icofont-home"></i> 2750 Quadra Street Victoria, Canada.</li>
                                    <li>
                                        <i className="icofont-live-support"></i> 
                                        <a href="tel:+324-9442-515">+324-9442-515</a>
                                    </li>
                                    <li>
                                        <i className="icofont-envelope"></i> 
                                        <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <p>Copyright &copy; {currentYear} Pungent. All Rights Reserved By <a href="https://envytheme.com" target="_blank">EnvyTheme</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
