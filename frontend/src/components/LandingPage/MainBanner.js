import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';

class MainBanner extends Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>MODERATE TEAM 1</span>
                                            <h1>Personal WEB CV Maker</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <a href="/contact" className="btn btn-primary">Get Started</a>

                                            <button
                                                onClick={this.openModal}
                                                className="btn btn-secondary"
                                            >
                                                <i className="icofont-ui-play"></i> How it works
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image">
                                            {/* Shape Images */}
                                            {/* Add your shape images here */}
                                            <img
                                                src="../images/banner-shapes/bn-shape1.png"
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s"
                                                alt="image"
                                            />
                                            {/* Add other shape images similarly */}
                                            {/* Main Image */}
                                            <img
                                                src="../images/banner-img1.png"
                                                className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s"
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='_ysd-zHamjk'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </>
        );
    }
}

export default MainBanner;
