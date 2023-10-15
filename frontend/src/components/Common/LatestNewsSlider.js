import React, { Component } from 'react';
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
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i className='pe-7s-angle-left'></i>",
    "<i className='icofont-thin-double-right'></i>"
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

class LatestNewsSlider extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className="blog-slides owl-carousel owl-theme"
              {...options}
            >
              {/* Render your carousel items here */}
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>
      </section>
    );
  }
}

export default LatestNewsSlider;
