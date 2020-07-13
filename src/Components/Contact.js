import React, {Component} from 'react';

//                     <i className="fas fa-phone fa-3x mb-3 text-muted" />
class Contact extends Component{
    render(){
        return (

            <section className="page-section" id="contact">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="mt-0">Contáctenos!</h2>
                    <hr className="divider my-4" />
                    <p className="text-muted mb-5">¿Listo para cotizar con nosotros? ¡Llámanos, mándanos un mensaje o envíanos un email y nos comunicaremos contigo tan pronto como sea posible!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i className="fab fa-whatsapp fa-3x mb-3 text-muted" />
                    <a className="d-block" href="tel:30150785">+502 3015-0785</a>
                    {/*<div>+502 3015-0785</div>*/}
                  </div>
                  <div className="col-lg-4 mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                    {/* Make sure to change the email address in BOTH the anchor text and the link target below!*/}
                    <a className="d-block" href="mailto:ventas@transaylinmarilena.com">ventas@transaylinmarilena.com</a>
                  </div>
                </div>
              </div>
            </section>
          );
    }

}

export default Contact;