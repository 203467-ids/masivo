import './footer.scss'
export const FooTer = () => {
return <>
<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> Nuestras Redes Sociales</span> 
    </p>
    <div className="icons">
      <a href="#"><i className="bi bi-facebook"></i></a>
      <a href="#"><i className="bi bi-twitter"></i></a>
      <a href="#"><i className="bi bi-whatsapp"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="bi bi-geo-alt"></i>
      <p><span> Dirección: Av. Platino No. 173, Fraccionamiento, Valle Dorado, Col. Rosario Poniente</span> Tuxtla Gutiérrez, Chiapas C.P. 29014</p>
    </div>
    <div>
      <i className="bi bi-telephone"></i>
      <p> <span>Tel. Cel.: 961 612 6245 ext. 3</span> Oficina.: (961) 225 9998</p>
    </div>
    <div>
      <i className="bi bi-envelope"></i>
      <p><a href="mailto:contact@yourwebsite.com"> contacto@masivoxml.com</a></p>
    </div>
  </div>
  
</footer>

</>
}