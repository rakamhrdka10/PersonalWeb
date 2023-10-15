import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class PageBanner extends Component {
    render() {

        let { pageTitle, BGImage } = this.props;

        return (
            // <div className="page-title-area bg-one">
            <div className={`page-title-area ${BGImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>{pageTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;