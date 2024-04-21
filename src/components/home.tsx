import React from 'react';
import backpc from '../assets/img/bg-masthead.jpg'
import { NavBar } from './navbar/NavBar';
import { FooTer } from './footer/footer';
import PricingSection from './precios/PricingComponent';
const Home = () => {
  return (
    
    <div className="1">
         <NavBar />
      <div className="row">
        {/* Sección con imagen de fondo */}
        <div className="col-12 p-3 bg-primary text-white position-relative" style={{
          backgroundImage: `url(${backpc})`,
          backgroundRepeat: 'no-repeat',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          margin: '0 auto',
        }}>
          <div className="overlay"></div>
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase font-weight-bold" style={{
                  zIndex: 2,
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}>¿Qué es +IVO XML?</h1>
                <hr className="divider my-4"></hr>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="font-weight-light mb-5" style={{
                  zIndex: 2,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                }}>+IVO XML es un programa contable que te permite tener el control de las facturas emitidas y recibidas en tu negocio, lo cual facilita la administración y el cumplimiento de tus obligaciones fiscales.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de requisitos de instalación */}
        <div className="col-12 p-3 text-white position-relative d-flex align-items-center justify-content-center" style={{
          backgroundColor: 'rgba(208, 152, 11, 0.821)',
          height: '600px',
          overflow: 'hidden',
          width: '100%',
          margin: '0 auto',
        }}>
          <div className='col-lg-8 text-center'>
            <h1 className="text-white mt-0">Requisitos de Instalación</h1>
            <hr className="divider light my-4 h2"></hr>
            <p className="text-white-30 mb-4 h2">Sistema Operativo Windows 7, 8, 8.1, 10</p>
            <p className="text-white-30 mb-4 h2">Internet Explorer 10 u 11</p>
            <p className="text-white-30 mb-4 h2">Meter en excepción de antivirus para poder realizar las actualizaciones.</p>
          </div>
        </div>

        {/* Sección de precios (Agregada aquí) */}
        {/* ... Tu código de precios aquí ... */}
        <PricingSection/>
      </div>
      <FooTer />
    </div>
  );
};

export default Home;
