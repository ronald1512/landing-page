import React, { Component } from 'react';


class Services extends Component {
    render() {
        return (

            <section className="page-section" id="services">
                <div className="container">
                    <h2 className="text-center mt-0">Debido a la emergencia sanitaria causada por COVID-19, hemos tomado las siguientes medidas</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-head-side-mask text-primary mb-4" />
                                <h3 className="h4 mb-2">Pilotos Profesionales</h3>
                                <p className="text-muted mb-0">Todos nuestros pilotos son experimentados y portan protector facial, mascarilla, guantes y uniforme completo. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fas fa-people-arrows text-primary mb-4" />
                                <h3 className="h4 mb-2">Sin aglomeraciones</h3>
                                <p className="text-muted mb-0">Las unidades transitan con el 50% de su capacidad, según su tarjeta de circulación. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-hands-wash text-primary mb-4" />
                                <h3 className="h4 mb-2">Cuidamos tu camino</h3>
                                <p className="text-muted mb-0">Dispensadores de alcohol en gel para el ingreso y egreso. Todas las unidades cuentan con seguro de pasajeros.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fas fa-4x fa-hand-sparkles text-primary mb-4" />
                                <h3 className="h4 mb-2">Limpieza constante</h3>
                                <p className="text-muted mb-0">Las unidades son sanitizadas por dentro y por fuera antes del abordaje de pasajeros. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Services;