import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"AdvisoryServices";
const url1 =
  GLOBAL.BASE_URL+"AdvisoryServicesCompleted";
const assetUrl = GLOBAL.assetUrl;
function AdvisoryServices() {
  const [getAdvisory, setAdvisory] = React.useState(null);
  const [getAdvisory1, setAdvisory1] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setAdvisory(response.data);
    });
    axios.get(url1).then((response) => {
      setAdvisory1(response.data);
    });
  }, []);
  if (!getAdvisory) return null;
  if (!getAdvisory1) return null;
  return (
    <>
      <section
        className="isgf-breadcum isgf_advisory_services_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/advisory-services/advisory-services-banner.png"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>ISGF Advisory Services</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} ISGF Advisory Services
            </p>
          </div>
        </div>
      </section>
      <section className="advisory_services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
				<div className="heading mb-3">
					<h2>ISGF Advisory Services</h2>
				</div>
              <div className="benefits_membership">
                <div className="mb-3">
                  <div className="isgf_accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header bg-green" id="heading1">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/images/advisory-services/icon-1.png`}
                              className="icon"
                            />{" "}
                            Projects – Ongoing
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className={`accordion-collapse collapse`}
                          aria-expanded="false"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <table className="table blue-table mt-2">
                              <tbody>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Projects</th>
                                  <th></th>
                                </tr>
                                {getAdvisory &&
                                  getAdvisory.map((data, index) => (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{data.project} </td>
                                      <td>
                                        <a
                                          href="#"
                                          className="btn btn-orange"
                                          data-bs-toggle="modal"
                                          data-bs-target={`#collapseOne${index}`}
                                        >
                                          Read Details
                                        </a>
                                        {data.report != null ? (
                                          <>
                                            <a
                                              target="_blank"
                                              href={
                                                assetUrl +
                                                "/public/AdvisoryService_img/" +
                                                data.report
                                              }
                                              className="btn btn-dark-orange"
                                              download
                                            >
                                              {" "}
                                              Download Report
                                            </a>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <div className="row advisory_services_model">
                                        <div className="col-md-12">
                                          <div
                                            className="modal fade"
                                            id={`collapseOne${index}`}
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div className="modal-dialog">
                                              <div className="modal-content">
                                                <div className="modal-body">
                                                  <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                  <div className="advisory_services_model_box">
                                                    <h3>
                                                      <img
                                                        src={`${process.env.PUBLIC_URL}/images/advisory-services/icon-1.png`}
                                                        className="icon"
                                                      />{" "}
                                                      Projects – Ongoing
                                                    </h3>

                                                    <p className="title">
                                                      {data.project}{" "}
                                                    </p>

                                                    <p className="description">
                                                      {parse(
                                                        `${data.description}`
                                                      )}{" "}
                                                    </p>

                                                    <div className="text-center">
                                                      {data.report != null ? (
                                                        <>
                                                          <a
                                                            target="_blank"
                                                            download
                                                            href={
                                                              assetUrl +
                                                              "/public/AdvisoryService_img/" +
                                                              data.report
                                                            }
                                                            className="btn btn-dark-orange"
                                                          >
                                                            {" "}
                                                            Download Report
                                                          </a>
                                                        </>
                                                      ) : (
                                                        <> </>
                                                      )}
                                                      
                                                      {data.category &&
                                                        data.category.map(
                                                          (data1, index) => (
                                                            <a
                                                              href="#"
                                                              className="btn btn-gray"
                                                            >
                                                              {data1.title}{" "}
                                                            </a>
                                                          )
                                                        )}
                                                      <p className="mt-4 link">
                                                        {" "}
                                                        <a href="#">
                                                          {" "}
                                                          Link:
                                                        </a>{" "}
                                                        To be Published
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
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
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header bg-green" id="heading2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <img
                              src={`${process.env.PUBLIC_URL}/images/advisory-services/icon-2.png`}
                              className="icon"
                            />{" "}
                            Projects – Completed
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <table className="table blue-table mt-2">
                              <tbody>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Projects</th>
                                  <th>Action</th>
                                </tr>

                                {getAdvisory1 &&
                                  getAdvisory1.map((data, index) => (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{data.project}</td>

                                      <td>
                                        <a
                                          href="#"
                                          className="btn btn-orange-sm my-1 w-100"
                                          data-bs-toggle="modal"
                                          data-bs-target={`#collapseFive${index}`}
                                        >
                                          Read Details
                                        </a>
                                        {data.report != null ? (
                                          <>
                                            <a
                                              target="_blank"
                                              href={
                                                assetUrl +
                                                "/public/AdvisoryService_img/" +
                                                data.report
                                              }
                                              className="btn btn-green-sm my-1 w-100"
                                              download
                                            >
                                              {" "}
                                              Download Report
                                            </a>
                                          </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <div className="row advisory_services_model">
                                        <div className="col-md-12">
                                          <div
                                            className="modal fade"
                                            id={`collapseFive${index}`}
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div className="modal-dialog">
                                              <div className="modal-content">
                                                <div className="modal-body">
                                                  <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                  ></button>
                                                  <div className="advisory_services_model_box">
                                                    <h3>
                                                      <img
                                                        src={`${process.env.PUBLIC_URL}/images/advisory-services/icon-1.png`}
                                                        className="icon"
                                                      />{" "}
                                                      Projects – Ongoing
                                                    </h3>

                                                    <p className="title">
                                                      {data.project}{" "}
                                                    </p>

                                                    <p className="description">
                                                      {parse(
                                                        `${data.description}`
                                                      )}
                                                    </p>

                                                    <div className="text-center">
                                                      {data.report != null ? (
                                                        <>
                                                          <div>
                                                            <a
                                                            target="_blank"
                                                            download
                                                            href={
                                                              assetUrl +
                                                              "/public/AdvisoryService_img/" +
                                                              data.report
                                                            }
                                                            className="btn btn-orange mb-4"
                                                          >
                                                            {" "}
                                                            Download Report
                                                          </a>
                                                          </div>
                                                        </>
                                                      ) : (
                                                        <> </>
                                                      )}
                                                      
                                                      {data.category &&
                                                        data.category.map(
                                                          (data1, index) => (
                                                            <a
                                                              href="#"
                                                              className="btn btn-gray"
                                                            >
                                                              {data1.title}
                                                            </a>
                                                          )
                                                        )}
                                                      <p className="mt-4 link text-center">
                                                        {" "}
                                                        <a href="#">
                                                          {" "}
                                                          Link:
                                                        </a>{" "}
                                                        Report to be Published
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
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

export default AdvisoryServices;
