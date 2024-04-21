import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './animacion.scss';

const PricingSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const descargar = () => {
    // Agrega la lógica de descarga aquí
    console.log('Descargando con el correo:', email);
    handleCloseModal(); // Cierra el modal después de descargar
  };

  return (
    <section className="pricing py-5 bg-secondary">
      <div className="container ">
        <div className="row ">
          {/* Free Tier */}
          <div className="col-lg-4">
            <Card className="mb-5 mb-lg-0 equal-height-card ">
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">GRATUITO (30 DIAS)</Card.Title>
                <Card.Subtitle className="text-center">$0<span className="period">/</span></Card.Subtitle>
                <hr />
                <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Descarga masiva de XML del SAT (12000 al día por RFC)</strong></li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Descarga masiva de XML del SAT (HASTA 100 XMLS)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Organización de XML</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar información a Excel (100 REGISTROS)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Filtrado de Información</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar a PDF la información (100 REGISTROS)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Actualizaciones gratuitas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnológicas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportación xml a PDF (Facturas y Nóminas) (uno X uno)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Complemento Servicios de Plataformas Tecnológicas exportación a PDF</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Descarga masiva XML por RFC</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)(100 registros)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de vigentes y cancelados(100 registros)</li>
                </ul>
                <Button onClick={handleShowModal} className="btn-block btn-primary text-uppercase btn-custom w-100" style={{ cursor: 'pointer' }}>
                  Descargar
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* Plus Tier */}
          <div className="col-lg-4">
            <Card className="mb-5 mb-lg-0 equal-height-card">
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">BÁSICO </Card.Title>
                <Card.Subtitle className="text-center">$1,199.00<span className="period">/ANUAL</span></Card.Subtitle>
                <hr />
                <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Descarga masiva de XML del SAT (12000 al dia por RFC)</strong></li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Organización de XML</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar información a Excel</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Filtrado de Información</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar a PDF la información</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnológicas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Actualizaciones gratuitas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportación xml a PDF (Facturas y Nóminas)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Complemento Servicios de Plataformas Tecnológicas exportación a PDF</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Descarga masiva XML por RFC y Fiel</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de vigentes y cancelados</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Generación de PDF con Logo</li>
                </ul>
                <Button href="xmlbasico.html" className="btn-block btn-primary text-uppercase btn-custom w-100">
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* Pro Tier */}
          <div className="col-lg-4">
            <Card className="mb-5 mb-lg-0 equal-height-card">
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">PREMIUM</Card.Title>
                <Card.Subtitle className="text-center">$1,799.00<span className="period">/ANUAL</span></Card.Subtitle>
                <hr />
                <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Descarga masiva de XML Podrás recuperar hasta 200 mil registros</strong></li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Organización de XML</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar información a Excel</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Filtrado de Información</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportar a PDF la información</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnológicas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Actualizaciones gratuitas</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Exportación xml a PDF (Facturas y Nóminas)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Complemento Servicios de Plataformas Tecnológicas exportacin a PDF</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Descarga masiva XML por RFC y Fiel</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Validación de vigentes y cancelados</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Generación de PDF con Logo</li>
                </ul>
                <Button href="xmlpremium.html" className="btn-block btn-primary text-uppercase btn-custom w-100">
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Introduce tu correo electrónico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary btn-custom " onClick={descargar}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default PricingSection;
