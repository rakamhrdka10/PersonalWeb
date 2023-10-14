import React, { Component } from 'react';

class FunFacts extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-like"></i>
                                <h3>799 <span>k</span></h3>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-diamond"></i>
                                <h3>499 <span>k</span></h3>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="funfact-card">
                                <i className="pe-7s-portfolio"></i>
                                <h3>990 <span>k</span></h3>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;