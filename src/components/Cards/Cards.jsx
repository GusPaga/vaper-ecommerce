export const Cards = () => {
  const icons = [
    {
      gallery: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-images"
          viewBox="0 0 16 16"
        >
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
        </svg>
      ),
    },
    {
      youtube: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-youtube"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
      ),
    },
  ];

  let data = [
    {
      title: "Cattle Management v6",
      dataTarget: "#modalCm",
      id: "modalCm",
      // url: "https://cakes-and-bases.vercel.app/",
      youtube: "https://youtu.be/rzoZU0QtwvQ",
      paragraph:
        "En este proyecto, desarrolle la lógica necesaria para implementar un login con persistencia de datos de sesión, para lo que tuve que añadir usuarios a la DB, con sus modelo y rutas en Back y Front, para mostrar y validar la información de usuario, implementando localStorage y Sweet Alert 2 para mejorar la experiencia de usuario y junto con las validaciones en JS evitar enviar errores a la DB.  ",

      badges: [
        { name: "React" },
        { name: "Node" },
        { name: "Express" },
        { name: "React-testing-library" },
        { name: "Bootstrap" },
        { name: "SweetAlert 2" },
      ],
      images: [
        {
          name: "landing",
          img: "https://i.ibb.co/4jHfLyp/landing.png",
        },
        {
          name: "login",
          img: "https://i.ibb.co/Q6fqFb3/login.png",
        },
        {
          name: "register",
          img: "https://i.ibb.co/b62b2ZY/register.png",
        },
        {
          name: "table",
          img: "https://i.ibb.co/3CqY2Pr/table.png",
        },
        {
          name: "SweetAlert",
          img: "https://i.ibb.co/NS217ZB/sweet-Alert.png",
        },
        {
          name: "modal create",
          img: "https://i.ibb.co/ThRRB5b/modal-create.png",
        },
        {
          name: "modal delete",
          img: "https://i.ibb.co/XFnLtBv/modal-delete.png",
        },
        {
          name: "modal Modify",
          img: "https://i.ibb.co/4tzCrJL/modal-modify.png",
        },
      ],
    },
    {
      title: "Cake & Bases",
      dataTarget: "#modalCb",
      id: "modalCb",
      url: "https://cakes-and-bases.vercel.app/",
      youtube:
        "https://www.youtube.com/watch?v=eyvWmnxu6-8&ab_channel=GustavoPagano",
      paragraph:
        "Este fue el proyecto final (PF) para Soy Henry, en donde aplicamos metodologías ágiles (SCRUM) para coordinar los esfuerzos de los integrantes del equipo a través del software “Trello”, además aplicamos distintas nuevas tecnologías como “Mercado Pago”, “FireBase”, “Cloudinary”, “NodeMailer”,“ React Admin”, entre otras.",

      badges: [
        { name: "FireBase" },
        { name: "NodeMailer" },
        { name: "Mercado Pago" },
        { name: "Cloudinary" },
      ],
      images: [
        {
          name: "portada",
          img: "https://i.ibb.co/0D3bH1Y/C-B.png",
        },
        {
          name: "landing",
          img: "https://i.ibb.co/7tfqBWZ/C-B1.png",
        },
        {
          name: "home",
          img: "https://i.ibb.co/d4pPNYc/C-B-home.png",
        },
        {
          name: "detail",
          img: "https://i.ibb.co/MVjPhJh/C-B-Detail.png",
        },
        {
          name: "admin",
          img: "https://i.ibb.co/hmq3pXj/C-B-Admin.png",
        },
      ],
    },
    {
      title: "Dogs",
      dataTarget: "#modalDogs",
      id: "modalDogs",
      url: "https://pi-dog-guspaga.vercel.app",
      youtube: "https://www.youtube.com/watch?v=OLm4yT3UddE",
      paragraph:
        " Este proyecto esta hecho con React, Redux, Sequelize, Express, Css-Modules. Ademas, me permitió mejorar la componentización, ganar experiencia en el uso de Git y el orden del código y         sobre todo consolidar los conocimientes de las tecnologías anteriormente mencionadas.",

      badges: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "Redux" },
        { name: "Expess" },
        { name: "Postgres" },
      ],
      images: [
        {
          name: "landing",
          img: "https://i.ibb.co/bvNygyn/dogs.png",
        },
        {
          name: "home",
          img: "https://i.ibb.co/jZcyrGC/dogs2.png",
        },
        {
          name: "about",
          img: "https://i.ibb.co/cyHVQzB/dogs4.png",
        },
        {
          name: "form",
          img: "https://i.ibb.co/HNFTbCn/dogs3.png",
        },
      ],
    },
    {
      title: "Foods",
      dataTarget: "#modalFoods",
      id: "modalFoods",
      paragraph:
        "Este proyecto esta hecho con React, Redux, Sequelize, Express, Vanilla Css. Ademas, me permitió aprender a componentizar, ganar experiencia en el uso de Git y el orden del código y sobre todo consolidar los conocimientes de las tecnologías anteriormente mencionadas.",

      badges: [
        { name: "React" },
        { name: "Redux" },
        { name: "JavaScript" },
        { name: "Express" },
        { name: "Postgres" },
      ],
      images: [
        { name: "portada", img: "https://i.ibb.co/HPB4Cqn/Foods.png" },
        { name: "landing", img: "https://i.ibb.co/bFgJffP/landing.png" },
        {
          name: "FoodLanding",
          img: "https://i.ibb.co/gFgy9mJ/Foods-landing.png",
        },
        { name: "form", img: "https://i.ibb.co/w49wkRn/form.png" },
        { name: "home", img: "https://i.ibb.co/XjDfGby/home.png" },
      ],
    },
    {
      title: "Bootstrap",
      dataTarget: "#modalBootstrap",
      id: "modalBootstrap",
      paragraph:
        "Este proyecto, contituye la práctica del curso de Bootstrap de platzi, en donde pude aplicar los conocimientos aprendidos, NavBar, Carousel, Modal, Buttons, Cards",
      badges: [
        { name: "Bootstrap" },
        { name: "React" },
        { name: "Imgbb" },
        { name: "Sass" },
      ],
      images: [
        { name: "landing", img: "https://i.ibb.co/1Ryh31K/bootstrap1.png" },
        { name: "Cards", img: "https://i.ibb.co/VBLntMN/bootstrap2.png" },
        { name: "form", img: "https://i.ibb.co/fdRFvTk/bootstrap3.png" },
      ],
    },
    {
      title: "Virtual CV",
      dataTarget: "#modalVirtualCv",
      id: "modalVirtualCv",
      url: "http://gap-portfolio.vercel.app",
      paragraph:
        "En este proyecto despliego distintas nuevas herramientas, Imgbb, para el manejo de imágenes, distintos componentes de Bootstrap, como carousel, modals, badges, navbar, cards, además de multiples estilos",
      badges: [
        { name: "React" },
        { name: "Bootstrap" },
        { name: "Imgbb" },
        { name: "Sass" },
      ],
      images: [
        {
          name: "landing",
          img: "https://i.ibb.co/Yf4FGdR/virtual-Cv1.png",
        },
        {
          name: "tech",
          img: "https://i.ibb.co/GJZ1MFt/virtual-Cv2.png",
        },
        {
          name: "cards",
          img: "https://i.ibb.co/MsB981s/virtual-Cv3.png",
        },
        {
          name: "formation",
          img: "https://i.ibb.co/K9m4Nz5/virtual-Cv4.png",
        },
      ],
    },
  ];

  return (
    <div id="cards" className="mx-auto my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="title col text-center text-uppercase mb-4 mt-3">
            <h2 className="mt-2">Proyectos</h2>
            <small>Personales y Grupales</small>
          </div>
        </div>
        <div className="row mx-auto mt-5">
          {/* TARJETAs */}

          {data?.length > 0 &&
            data.map((e) => {
              return (
                <div className="col-12 col-md-6 col-lg-4  cardsAnimation">
                  <div className="card p-3 mb-5 bg-body rounded">
                    <img
                      src={e.images[0].img}
                      className="card-img-top"
                      alt={e.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title fst-italic text-center mt-3 fs-30">
                        "{e.title}"
                      </h5>

                      <div className="badges ">
                        {e.badges?.map((b) => {
                          return (
                            <span className="badge rounded-pill bg-primary  fst-italic flex-wrap px-2 py-1 m-2">
                              {b.name}
                            </span>
                          );
                        })}
                        <p className="card-text mt-4">{e.paragraph}</p>
                      </div>
                      <div>
                        {e.url && (
                          <span className="badge text-dark">
                            <a href={e.url} target="_blank" rel="noreferrer">
                              Web
                            </a>
                          </span>
                        )}
                        {e.dataTarget && (
                          <span className="badge text-dark">
                            <a
                              href="*"
                              data-bs-toggle="modal"
                              data-bs-target={e.dataTarget}
                            >
                              Galería {icons.gallery}
                            </a>
                          </span>
                        )}
                        {e.youtube && (
                          <span className="badge text-dark">
                            <a
                              href={e.youtube}
                              target="_blank"
                              rel="noreferrer"
                            >
                              YouTube{icons.youtube}
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* MODAL */}
      {data?.length > 0 &&
        data.map((e) => {
          return (
            <div className="modal" id={e.id} tabindex="-1">
              <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">"{e.title}"</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row mx-auto">
                      {e.images?.length > 0 &&
                        e.images.map((b) => {
                          return (
                            <div className="col-12 col-md-6 col-lg-6">
                              <img
                                src={b.img}
                                alt={b.name}
                                className="w-100 mb-4 rounded"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {/* MODAL */}
    </div>
  );
};
