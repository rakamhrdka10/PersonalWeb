import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted By</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="../images/partners/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="../images/partners/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        {/* Sisanya juga diubah serupa dengan yang di atas */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
