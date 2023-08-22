import { useState } from "react";
import { useEffect } from "react";

export const Cards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);
  // URL to send petition to the backend
  const URL = "http://localhost:3002";

  // this function get all objects in the DB
  const getData = async () => {
    const petition = await fetch(`${URL}/products`);
    const data = await petition.json();
    setData(data);
  };

  console.log(data);

  return (
    <div id="cards" className="mx-auto my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="title col text-center text-uppercase mb-4 mt-3">
            <h2 className="mt-2">Productos</h2>
            <small>Las mejores Marcas y Sabores</small>
          </div>
        </div>
        <div className="row mx-auto mt-5">
          {/* TARJETAs */}

          {data?.length > 0 &&
            data.map((e, index) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3  cardsAnimation"
                  key={index}
                >
                  <div className="card p-3 mb-5 bg-body rounded">
                    <div className="card-body text-center">
                      {e.img && (
                        <img src={e.img} className="card-img-top" alt={e.img} />
                      )}

                      <h5 className="card-title ">{e.marca}</h5>
                      <p className="card-text">
                        Un texto de ejemplo rápido para colocal cerca del título
                        de la tarjeta y componer la mayor parte del contenido de
                        la tarjeta.
                      </p>
                      <div>
                        {e.oferta && (
                          <span className="badge rounded-pill bg-dark  fst-italic flex-wrap px-2 py-1 m-2">
                            Oferta!
                          </span>
                        )}
                      </div>
                      <a href="*" className="btn btn-primary">
                        Comprar
                      </a>

                      {/* <h5 className="card-title fst-italic text-center mt-3 fs-30">
                        "{e.marca}"
                      </h5> */}

                      {/* <div className="badges ">
                        {e.badges?.map((b) => {
                          return (
                            <span className="badge rounded-pill bg-primary  fst-italic flex-wrap px-2 py-1 m-2">
                              {b.name}
                            </span>
                          );
                        })}
                        <p className="card-text mt-4">{e.paragraph}</p>
                      </div> */}
                      <div>
                        {/* {e.url && (
                          <span className="badge text-dark">
                            <a href={e.url} target="_blank" rel="noreferrer">
                              Web
                            </a>
                          </span>
                        )} */}
                        {/* {e.dataTarget && (
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
                        )} */}
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
        data.map((e, i) => {
          return (
            <div className="modal" id={e.id} tabIndex="-1" key={i}>
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
