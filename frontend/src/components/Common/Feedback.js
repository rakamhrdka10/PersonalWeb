import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
};

const Feedback = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <section className="feedback-area ptb-100">
            <div className="container">
                <div className="feedback-list">
                    <div className="quotes-icon">
                        <img src="../images/left-quote-white.png" alt="icon" />
                    </div>

                    {display ? (
                        <OwlCarousel
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>

                                <div className="bar"></div>

                                <h3>John Smith</h3>
                                <span>CEO & Founder, Envato</span>
                            </div>

                            <div className="single-feedback">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>

                                <div className="bar"></div>

                                <h3>Oliver Smith</h3>
                                <span>React JS Specialist</span>
                            </div>

                            <div className="single-feedback">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>

                                <div className="bar"></div>

                                <h3>Thomas John</h3>
                                <span>Angular JS Specialist</span>
                            </div>
                        </OwlCarousel>
                    ) : null}
                </div>
            </div>

            {/* Client image */}
            <div className="client-image-box">
                <img src="../images/clients/client1.png" className="client1" alt="client" />
                <img src="../images/clients/client2.png" className="client2" alt="client" />
                <img src="../images/clients/client3.png" className="client3" alt="client" />
                <img src="../images/clients/client4.png" className="client4" alt="client" />
                <img src="../images/clients/client5.png" className="client5" alt="client" />
                <img src="../images/clients/client6.png" className="client6" alt="client" />
                <img src="../images/clients/client7.png" className="client7" alt="client" />
                <img src="../images/clients/client8.png" className="client8" alt="client" />
            </div>
        </section>
    );
};

export default Feedback;
