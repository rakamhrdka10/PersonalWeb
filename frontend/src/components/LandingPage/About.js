import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';

class About extends Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img1.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={this.openModal}
                                            className="video-btn"
                                        >
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis eget ante, sed viverra nunc tincidunt nec eleifend et tincidunt.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our History</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video, update the videoId */}
                    <ModalVideo
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId='_ysd-zHamjk'
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </>
        );
    }
}

export default About;
