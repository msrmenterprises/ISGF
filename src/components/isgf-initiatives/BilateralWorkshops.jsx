import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import parse from "html-react-parser";
import axios from "axios";
const GLOBAL = require('../../commonConstants.js');
const url =
  GLOBAL.BASE_URL+"BilateralEventMappings";
const assetUrl = GLOBAL.assetUrl;
function BilateralWorkshops() {
  const [getWork, setWork] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setWork(response.data);
    });
  }, []);
  // console.log(getWork);
  if (!getWork) return null;
  return (
    <>
      <section
        className="isgf-breadcum isgf_bilateral_workshops_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/bilateral-workshops/bilateral-workshops-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Bilateral Workshops</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} Bilateral Workshops
            </p>
          </div>
        </div>
      </section>
      <section className="bilateral-workshops">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading mb-3">
                    <h2>ISGF Bilateral Events</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership bilateral-events">
                    <div className="mb-3">
                      <div className="isgf_accordion">
                        <div className="accordion" id="accordionExample">
                          {getWork &&
                            getWork.map((data, index) => (
                              <div className="accordion-item">
                                <h2 className="accordion-header bg-green" id="heading1">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseOne${index}`}
                            aria-expanded="false"
                            aria-controls={`collapseOne${index}`}
                          ><img alt="pic"
                                      src={
                                        assetUrl +
                                        "/public/BilateralEvent_img/" +
                                        data.image
                                      }
                                    />{" "}
                                    {data.title}
                                  </button>
                                </h2>
                        <div id={`collapseOne${index}`} className="accordion-collapse collapse p-3" aria-expanded="false" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th scope="col">Events</th>
                                        <th scope="col">Details</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data.event_map.map((data1, index1) => (
                                        <tr>
                                          <td>{data1.title}</td>
                                          <td>
                                            <button
                                              className="btn btn-orange"
                                              type="button"
                                              data-bs-toggle="modal"
                                              data-bs-target={`#collapseTwo${index}`}
                                              aria-expanded="true"
                                            >
                                              Read Details
                                            </button>
                                          </td>
                                          <div
                                            className="modal fade bilatera-model"
                                            id={`collapseTwo${index}`}
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div className="modal-dialog modal-xl">
                                              <div className="modal-content">
                                                <a
                                                  type="button"
                                                  className="btn-close"
                                                  data-bs-dismiss="modal"
                                                  aria-label="Close"
                                                ></a>
                                                <div className="modal-body">
                                                  <h3>
                                                    <img alt="pic"
                                                      src={
                                                        assetUrl +
                                                        "/public/BilateralEvent_img/" +
                                                        data.image
                                                      }
                                                    />
                                                    {data.title}
                                                  </h3>
                                                  {parse(
                                                    `${data1.description}`
                                                  )}
                                                  <div className="row g-4">
                                                    {data1.agenda != null ? (
                                                      <>
                                                        <div className="col-md-3 col-lg">
                                                          <div className="agenda-box text-center">
                                                            <h4>Agenda</h4>
                                                            <img
                                                              src="images/woman-energy/agenda-icon-1.png"
                                                              className="img-fluid"
                                                              style={{
                                                                height: "45px",
                                                              }}
                                                            />
                                                            <a
                                                              target="_blank"
                                                              href={
                                                                assetUrl +
                                                                "/public/BilateralEventMapping_img/" +
                                                                data1.agenda
                                                              }
                                                              className="btn btn-orange mt-3 p-2 d-block"
                                                            >
                                                              More Details
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <> </>
                                                    )}

                                                    {data1.location != null ? (
                                                      <>
                                                        <div className="col-md-3 col-lg">
                                                          <div className="agenda-box text-center">
                                                            <h4>Location</h4>
                                                            <img
                                                              src="images/woman-energy/location.jpg"
                                                              className="img-fluid"
                                                              style={{
                                                                height: "45px",
                                                              }}
                                                            />
                                                            <div className="btn btn-orange mb-0 mt-3 p-2 d-block">
                                                              {data1.location}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <> </>
                                                    )}
                                                    {data1.view_recording !=
                                                    null ? (
                                                      <>
                                                        <div className="col-md-3 col-lg">
                                                          <div className="agenda-box text-center">
                                                            <h4>
                                                              View Reacording
                                                            </h4>
                                                            <img
                                                              src="images/woman-energy/agenda-icon-3.png"
                                                              className="img-fluid"
                                                              style={{
                                                                height: "45px",
                                                              }}
                                                            />
                                                            <a
                                                              target="_blank"
                                                              href={
                                                                data1.view_recording
                                                              }
                                                              className="btn btn-orange mt-3 p-2 d-block"
                                                            >
                                                              More Details
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <> </>
                                                    )}
                                                    {data1.view_photo !=
                                                    null ? (
                                                      <>
                                                        <div className="col-md-3 col-lg">
                                                          <div className="agenda-box text-center">
                                                            <h4>View Photos</h4>
                                                            <img
                                                              src="images/woman-energy/agenda-icon-4.png"
                                                              className="img-fluid"
                                                              style={{
                                                                height: "45px",
                                                              }}
                                                            />
                                                            <a
                                                              target="_blank"
                                                              href={
                                                                data1.view_photo
                                                              }
                                                              className="btn btn-orange mt-3 p-2 d-block"
                                                            >
                                                              More Details
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <> </>
                                                    )}
                                                    {data1.no_participants !=
                                                    null ? (
                                                      <>
                                                        <div className="col-md-3 col-lg">
                                                          <div className="agenda-box text-center">
                                                            <h4>Brochure</h4>
                                                            <img
                                                              src="images/woman-energy/agenda-icon-2.png"
                                                              className="img-fluid"
                                                              style={{
                                                                height: "45px",
                                                              }}
                                                            />
                                                            <a
                                                              target="_blank"
                                                              href={
                                                                assetUrl +
                                                                "/public/BilateralEventMapping_img/" +
                                                                data1.no_participants
                                                              }
                                                              className="btn btn-orange mt-3 p-2 d-block"
                                                            >
                                                              More Details
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <> </>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BilateralWorkshops;
