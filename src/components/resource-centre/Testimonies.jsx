import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const url = GLOBAL.BASE_URL+"testimonials";
const url1 =
  GLOBAL.BASE_URL+"coffeTabletestimonials";
function Testimonies() {
  const [getTestimoney, setTestimoney] = React.useState(null);
  const [getTestimoney1, setTestimoney1] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setTestimoney(response.data);
    });
    axios.get(url1).then((response) => {
      setTestimoney1(response.data);
    });
  }, []);
  if (!getTestimoney) return null;
  if (!getTestimoney1) return null;
  return (
    <>
      <section
        className="isgf-breadcum testimonies_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/testimonial/testimonial-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Testimonials</h1>
            <p>
              Home {">"} Resource Centre {">"} Testimonials
            </p>
          </div>
        </div>
      </section>
      <section className="testimonies">
        <div className="container">
          <div className="heading mb-3">
            <h2>TESTIMONIALS</h2>
          </div>

          <div className="isgf_accordion">
            <div className="accordion" id="accordionExample">
              {getTestimoney &&
                getTestimoney.map((data, index) => (
                  <div className="accordion-item">
                    <h2 className="accordion-header bg-green" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded="false"
                        aria-controls={`collapseOne${index}`}
                      >
                        {data.heading}
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className="accordion-collapse collapse p-4"
                      aria-expanded="false"
                      aria-labelledby={`headingOne${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="row g-4">
                        {data.testimonies &&
                          data.testimonies.map((data1, index1) => (
                            <div className="col-sm-6 col-md-3">
                              <div className="testi-box">
                                <div className="pic">
									<img alt="pic" src={
                                    assetUrl +
                                    "/public/coffee_table_testimonials/" +
                                    data1.image
                                  }/>
								</div>
                                <div className="name">{data1.name}</div>
                                <div className="des">
									{data1.profile}
								</div>
                                <a href="#" data-bs-toggle="modal" data-bs-target={`#collapseThree${index}${index1}`}>View Testimony</a>
                              </div>
                              <div className="row advisory_services_model testimonial">
                                <div className="col-md-12">
                                  <div
                                    className="modal fade"
                                    id={`collapseThree${index}${index1}`}
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
                                            <h3>Testimonial</h3>

                                            <div className="text-center">
                                              <p className="title">
                                                {data1.title}{" "}
                                              </p>
                                              <img
                                                src={
                                                  assetUrl +
                                                  "/public/coffee_table_testimonials/" +
                                                  data1.image
                                                }
                                                className="img-fluid mt-4"
                                              />
                                              <p className="name">
                                                {data1.name}
                                              </p>
                                              <p>{data1.profile}</p>
                                            </div>
                                            {parse(`${data1.descriptions}`)}
                                            <div className="text-center">
                                            {((data1.document != null))  ? <>
                                            <a target="_blank"
                                                href={
                                      assetUrl +
                                      "/public/coffee_table_testimonials/" +
                                      data1.document
                                    }
                                                className="btn btn-green"
                                              >
                                                {" "}
                                                Read Report
                                              </a>
                                               </>: <> </>}
                                              
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="heading mb-3 mt-5">
            <h2>Coffee Table Book Testimonials</h2>
          </div>

          <div className="row g-4">
            {getTestimoney1 &&
              getTestimoney1.map((data, index) => (
                <div className="col-sm-6 col-md-3">
					<div className="testi-box">
						<div className="pic">
							<img src={assetUrl + "/public/coffee_table_testimonials/" + data.image}/>
						</div>
                    <div className="name mb-4">{data.name} </div>

                    <a href="#" data-bs-toggle="modal" data-bs-target={`#collapseTwo${index}`}>
                        View Testimony
					</a>
                  </div>
                  <div className="row advisory_services_model testimonial">
                    <div className="col-md-12">
                      <div
                        className="modal fade"
                        id={`collapseTwo${index}`}
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
                                <h3>Testimonial</h3>

                                <div className="text-center">
                                  <p className="title">{data.title} </p>
                                  <img
                                    src={
                                      assetUrl +
                                      "/public/coffee_table_testimonials/" +
                                      data.image
                                    }
                                    className="img-fluid mt-4"
                                  />
                                  <p className="name">{data.name}</p>
                                  <p> {data.profile} </p>
                                </div>
                                {parse(`${data.descriptions}`)}

                                <div className="text-center">
                                {((data.document != null))  ? <>
                                <a target="_blank" href={
                                      assetUrl +
                                      "/public/coffee_table_testimonials/" +
                                      data.document
                                    } className="btn btn-green">
                                    {" "}
                                    Read Report
                                  </a>
                                   </>: <> </>}
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonies;
