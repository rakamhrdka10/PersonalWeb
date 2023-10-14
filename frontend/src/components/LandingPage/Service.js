import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';

class Services extends Component {
    render() {
        return (
            <div className="bg-fcfbfb ptb-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-comment bg-13c4a1"></i>
                                <h3>
                                    <a href="/service-details">Business Consultancy</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-display2 bg-6610f2"></i>
                                <h3>
                                    <a href="/service-details">Web Development</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-light bg-ffb700"></i>
                                <h3>
                                    <a href="/service-details">Digital Marketing</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-phone bg-fc3549"></i>
                                <h3>
                                    <a href="/service-details">Mobile App Development</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-cart bg-00d280"></i>
                                <h3>
                                    <a href="/service-details">eCommerce Development</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-users bg-ff612f"></i>
                                <h3>
                                    <a href="/service-details">Marketing & Reporting</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
