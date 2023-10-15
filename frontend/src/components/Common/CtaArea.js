import React from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

const CtaArea = () => {
    return (
        <div className="cta-area bg-gradient">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="cta-content">
                            <h3>Have a project in mind?</h3>
                            <p>Let's get to work</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-4">
                        <div className="cta-btn-box">
                            <a href="/contact" className="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaArea;
