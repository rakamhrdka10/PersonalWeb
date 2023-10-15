import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Newsletter extends Component {
    render() {
        return (
            <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-inner-area">
                        <div className="newsletter-content">
                            <span className="sub-title">Get Started Instantly!</span>
                            <h2>Get the only new update from this newsletter</h2>

                            <form className="newsletter-form">
                                <input type="email" className="form-control" placeholder="Enter your email" name="email" required />
                                <button type="submit">Subscribe!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newsletter;