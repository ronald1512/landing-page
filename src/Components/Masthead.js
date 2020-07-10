import React, { Component } from 'react';


class Masthead extends Component {
    render() {
        return (
            <div id="page-top">
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Líderes en el trasporte turístico y empresarial</h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Somos una empresa guatemalteca con mas de 20 años de experiencia en el mercado. Todas nuestras unidades cuentan con seguro de pasajeros y se encuentran en constante revisión de estado. </p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#contact">Quiero cotizar</a>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        );
    }

}

export default Masthead;