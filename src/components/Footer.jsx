

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#2980b9', color: '#fff'}}>
      <div className="container">
        <div className="row justify-content-between py-2">
          <div className="col-md-5">
            <h5>Contacto</h5>
            <div>
              <p className="m-1"><i className="bi bi-telephone-fill"></i> 387-4068698</p>
            </div>
            <div>
              <p className="m-1"><i className="bi bi-envelope"></i> solopedidoscaschy@gmail.com</p>
            </div>
            <div>
              <p className="m-1"><i className="bi bi-geo-alt"></i> Caseros 429 Salta-Capital</p>
            </div>
          </div>
         
          <div className="col-md-4 text-center">
            {/* Redes sociales */}
            <h5>Síguenos en redes sociales</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/caschysalta/"><i className="bi bi-facebook m-3"></i></a>
              <a href="https://instagram.com/caschysalta"><i className="bi bi-instagram m-3"></i></a>
              <a href="https://www.twitter.com/caschysalta"><i className="bi bi-twitter-x m-3"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
