import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import parse from "html-react-parser";
const GLOBAL = require("../../commonConstants.js");
const standard = GLOBAL.BASE_URL + "StandardMappings";
const standardWork = GLOBAL.BASE_URL + "StandardMappingsWork";
const assetUrl = GLOBAL.assetUrl;

function Standards() {
  const [getStandard, setStandard] = React.useState(null);
  const [getStandardWork, setStandardWork] = React.useState(null);
  React.useEffect(() => {
    axios.get(standard).then((response) => {
      setStandard(response.data);
    });
    axios.get(standardWork).then((response) => {
      setStandardWork(response.data);
    });
  }, []);
  if (!getStandard) return null;
  if (!getStandardWork) return null;
  return (
    <>
      <section
        className="isgf-breadcum isgf_membership_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/membership/membership-bg.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Standards</h1>
            <p>
              Home {">"} Resource Centre {">"} Standards
            </p>
          </div>
        </div>
      </section>
      <section className="standards">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading mb-3">
                <h2>Standards</h2>
              </div>
              <div className="benefits_membership">
                <div className="isgf_accordion mb-3">
                  <div className="accordion" id="accordionExample">
                    {getStandard &&
                      getStandard.map((data, index) => (
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
                              {data.title}
                            </button>
                          </h2>
                          <div
                            id={`collapseOne${index}`}
                            className={`accordion-collapse collapse`}
                            aria-expanded="false"
                            aria-labelledby={`headingOne${index}`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <table className="table blue-table mt-2 standards-table">
                                <thead>
                                  <tr>
                                    <th>S.N</th>
                                    <th>Standard Body</th>
                                    <th>Reference</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Publishing Year</th>
                                    <th>Purchase Link</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.standard_mapping.map((data1, index) => (
                                    <tr>
                                      <td>{++index} </td>
                                      <td>
                                        {data1.standard != null ? (
                                          <>{data1.standard} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        {data1.reference != null ? (
                                          <>{data1.reference} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        {data1.title != null ? (
                                          <>{parse(`${data1.title}`)} </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <td>
                                        {data1.description != null ? (
                                          <>{parse(`${data1.description}`)} </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <td>
                                        {data1.publishing_year != null ? (
                                          <>{data1.publishing_year} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        <a
                                          href={data1.purchase_link}
                                          target="_blank"
                                          className="btn btn-orange-sm"
                                        >
                                          {" "}
                                          Click Here
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="heading mb-3 mt-5">
                      <h2>ISGF Work on Standards</h2>
                    </div>
                    {getStandardWork &&
                      getStandardWork.map((data, index) => (
                        <div className="accordion-item orange-table">
                          <h2
                            className="accordion-header bg-green"
                            id="heading4"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapseTwo${index}`}
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              {data.title}
                            </button>
                          </h2>
                          <div
                            id={`collapseTwo${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby="heading4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              {data.description != null ? (
                                <>{parse(`${data.description}`)} </>
                              ) : (
                                <> </>
                              )}
                              <table className="table standards-table mt-2">
                                <tbody>
                                  <tr>
                                    <th>S.N</th>
                                    <th>Indian Standards</th>
                                    <th>Reference</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Publishing Year</th>
                                    <th>Purchase Link</th>
                                  </tr>
                                  {data.standard_mapping.map((data1, index) => (
                                    <tr>
                                      <td>{++index} </td>
                                      <td>
                                        {data1.standard != null ? (
                                          <>{data1.standard} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        {data1.reference != null ? (
                                          <>{data1.reference} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        {data1.title != null ? (
                                          <>{parse(`${data1.title}`)} </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <td>
                                        {data1.description != null ? (
                                          <>{parse(`${data1.description}`)} </>
                                        ) : (
                                          <> </>
                                        )}
                                      </td>
                                      <td>
                                        {data1.publishing_year != null ? (
                                          <>{data1.publishing_year} </>
                                        ) : (
                                          <> </>
                                        )}{" "}
                                      </td>
                                      <td>
                                        <a
                                          href={data1.purchase_link}
                                          className="btn btn-orange-sm"
                                          target="_blank"
                                        >
                                          {" "}
                                          Click Here
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default Standards;
