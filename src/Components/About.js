import React, { Component } from 'react';


class About extends Component {

    render() {
        return (

            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">Tenemos lo que necesitas!</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">No somos intermediarios. Por ello garantizamos los mejores precios.</p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#contact">quiero cotizar!</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;