import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class LatestNews extends Component {
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Latest News</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="single-blog-post mb-0">
                                <div className="post-image">
                                    <a href="/blog-details"> {/* Ganti dengan URL yang sesuai */}
                                        <img src="../images/blog/blog1.jpg" alt="image" />
                                    </a>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>
                                            <i className="icofont-ui-user"></i> 
                                            <a href="/blog">Admin</a> {/* Ganti dengan URL yang sesuai */}
                                        </li>
                                        <li>
                                            <i className="icofont-tags"></i> 
                                            <a href="/blog-details">Web Development</a> {/* Ganti dengan URL yang sesuai */}
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i> 
                                            Feb 15, 2020
                                        </li>
                                    </ul>

                                    <h3 className="mb-0">
                                        <a href="/blog-details">How to Become a Successful Entry Level UX Designer</a> {/* Ganti dengan URL yang sesuai */}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Sisanya juga diubah serupa dengan yang di atas */}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestNews;
