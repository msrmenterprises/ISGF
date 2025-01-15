import React from "react";
import Media from "../reusable/Media";
import axios from "axios";
import parse from "html-react-parser";
import { NavLink, Link } from "react-router-dom";
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"domainExpert_new";
const assetUrl = GLOBAL.assetUrl;
function DomainOfExpertise() {
  const [getDomain, setDomain] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setDomain(response.data);
    });
  }, []);
  if (!getDomain) return null;

  return (
    <>
      <section
        className="isgf-breadcum domain_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/domain-of-expertise/doe-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Domain Of Expertise</h1>
            <p>
              Home {">"} Resource Centre {">"} Domain Of Expertise
            </p>
          </div>
        </div>
      </section>
      <section className="domain-of-expertise">
        <div className="container">
          <div className="heading mb-3">
            <h2>Domain Of Expertise</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <div className="mb-3">
                  <div className="isgf_accordion">
                    <div className="accordion" id="accordionExample">
                      {getDomain &&
                        getDomain.map((data, index) => (
                          <div className="accordion-item">
                            <h2
                              className="accordion-header bg-green"
                              id="heading1"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseOne${index}`}
                                aria-expanded="false"
                                aria-controls={`collapseOne${index}`}
                              >
                                <img
                                  alt="pic"
                                  src={
                                    assetUrl +
                                    "/public/domain-expertise-category/" +
                                    data.icon
                                  }
                                  className="logo-icon"
                                />
                                {data.title}
                              </button>
                            </h2>
                            <div
                              id={`collapseOne${index}`}
                              className={`accordion-collapse collapse`}
                              aria-expanded="false"
                              aria-labelledby="heading1"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body p-3">
                                <img
                                  src={
                                    assetUrl +
                                    "/public/domain-expertise-category/" +
                                    data.images
                                  }
                                  className="mb-4"
                                  width="100%"
                                  alt="pic"
                                />
                                <div className="row g-4">
                                  <div className="col-md-3">
                                    <div className="domain-box">
                                      <div className="icon">
                                        <img
                                          src={`${process.env.PUBLIC_URL}/images/domain-of-expertise/bg-icon.png`}
                                          alt="pic"
                                        />
                                      </div>
                                      <div className="name">Background</div>

                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#background${index}`}
                                      >
                                        <span>View </span>
                                      </a>
                                    </div>
                                  </div>

                                  <div
                                    className="modal fade"
                                    id={`background${index}`}
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog modal-lg">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h1
                                            className="modal-title fs-5"
                                            id="exampleModalLabel"
                                          >
                                            {data.background_heading != null ? (
                                              <>{data.background_heading} </>
                                            ) : (
                                              <> </>
                                            )}
                                          </h1>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div className="modal-body">
                                          {data.background_description !=
                                          null ? (
                                            <>
                                              {parse(
                                                `${data.background_description}`
                                              )}{" "}
                                            </>
                                          ) : (
                                            <> </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {data.domain_expert &&
                                    data.domain_expert.map((data1, index) => (
                                      <div className="col-md-3">
                                        <div className="domain-box">
                                          <div className="icon">
                                            <img
                                              src={
                                                assetUrl +
                                                "/public/domain-expertise/" +
                                                data1.icon
                                              }
                                              alt="pic"
                                            />
                                          </div>
                                          <div className="name">
                                            {data1.title}
                                          </div>
                                          {index == 0 ? (

                                          <Link onClick={() => window.scrollTo(0, 0)} to={"../news-tag/" + data.slug}><span>View {data1.title}</span></Link>

                                          ) : index == 1 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)}
                                              to={"../advisory-tag/" + data.slug}
                                            >
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : index == 2 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)}
                                              to={
                                                "../trainings-tag/" + data.slug
                                              }
                                            >
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : index == 3 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)}
                                              to={"../reports-tag/" + data.slug}
                                            >
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : index == 4 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)}
                                              to={
                                                "../whitepapers-tag/" + data.slug
                                              }
                                            >
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : index == 5 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)} to={"../events-tag/" + data.slug}>
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : index == 6 ? (
                                            <Link onClick={() => window.scrollTo(0, 0)}
                                              to={
                                                "../standards-tag/" + data.slug
                                              }
                                            >
                                              <span>View {data1.title}</span>
                                            </Link>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                </div>

                                {/* <div className="text-center mt-4">
                                  {data.tag &&
                                    data.tag.map((data1, index) => (
                                      <a href="#" className="btn btn-gray mt-2">
                                        {data1.title}
                                      </a>
                                    ))}
                                </div> */}
                              </div>
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
      </section>
    </>
  );
}

export default DomainOfExpertise;
