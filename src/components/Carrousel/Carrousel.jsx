import "./carrousel.scss";

import car1 from "../../assets/ancha1.jpg";
import car2 from "../../assets/ancha2.jpg";
import car3 from "../../assets/ancha1.jpg";
import car4 from "../../assets/ancha2.jpg";

export const Carrousel = () => {
  return (
    <section id="carrousel">
      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-keyboard="true"
        data-bs-wrap="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={car1} className="d-block w-100" alt="carrousel1" />
          </div>
          <div className="carousel-item">
            <img src={car2} className="d-block w-100" alt="carrousel2" />
          </div>
          <div className="carousel-item">
            <img src={car3} className="d-block w-100" alt="carrousel3" />
          </div>
          <div className="carousel-item">
            <img src={car4} className="d-block w-100" alt="carrousel3" />
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 offset-md-3 text-center text-md-right position-absolute top-50 start-50 translate-middle">
                  <h2>Style & Vaping</h2>
                  <small>Productos y sabores de mundo</small>
                  {/* <p>
                    Soy un entusiasta de la tecnología,
                    <br />
                    me gusta aprender, enseñar y compartir.
                    <br />
                    Hace poco descubrí un mundo nuevo programando.
                    <br />
                    Ahora quiero aplicar todo lo que he aprendido
                    <br />
                    en estos años de trabajo, para convertirme
                    <br />
                    <b>FullStack Developer!</b>
                  </p>
                  <p>Puedes contactarme en mis redes sociales.</p> */}

                  <div className="col col-md-6 offset-md-3">
                    <a
                      href="#cards"
                      className="cardsButtons btn btn-outline-warning mx-2 mt-3 p-1"
                      data-toggle="modal"
                    >
                      Productos
                    </a>
                    <a
                      href="#footer"
                      className="cardsButtons btn btn-outline-warning mx-2 mt-3 p-1"
                      data-toggle="modal"
                    >
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
