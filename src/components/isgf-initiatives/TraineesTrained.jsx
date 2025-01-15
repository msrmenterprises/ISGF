import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import DataTable from "react-data-table-component";
import parse from "html-react-parser";
const GLOBAL = require('../../commonConstants.js');

const url = GLOBAL.BASE_URL+"trainee";
const assetUrl = GLOBAL.assetUrl;

function TraineesTrained() {
  const [getTrainee, setTrainee] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setTrainee(response.data);
    });
  }, []);
  if (!getTrainee) return null;

  return (
    <>
      <section
        className="isgf-breadcum trainees_trained_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/trainees-trained/trainees-trained-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Trainees Trained by ISGF</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} Trainings & Capacity Building
              Trainees Trained by ISGF
            </p>
          </div>
        </div>
      </section>
      <section className="competitions trainees-trained">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading mb-3">
                    <h2>Trainees Trained by ISGF</h2>
                  </div>
                  <p className="text-blue">
                    Training Programs Conducted and Certificates Issued by Till
                    Date
                  </p>
                </div>
              </div>

              <div className="isgf_accordion">
                <div className="accordion" id="accordionExample">
                  {getTrainee &&
                    getTrainee.map((data, index) => (
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
                          className={`accordion-collapse collapse`}
                          aria-expanded="false"
                          aria-labelledby={`headingOne${index}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="blue">Supported By</p>
                            <div className="row supported g-4">
                            {data.image &&
                              (data.image).map((data1, index1) => (
                              <div className="col-md-4">
                                <img
                                  src={
                                    assetUrl + "/public/forum_img/" + data1
                                  }
                                  alt="No Image"
                                />
                              </div>
                            ))}
                              {/* <div className="col-md-4">
                                <img
                                  src={
                                    assetUrl +
                                    "/public/forum_img/" +
                                    data.images
                                  }
                                  alt="No Image"
                                />
                              </div> */}
                            </div>
                            <div className="competitions-item my-5">
                              <div className="row g-4">
							  {((data.participants != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-2.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {" "}
                                      {data.participants}
                                    </h4>
                                    <p>Number of Participants</p>
                                  </div>
                                </div></>: <> </>}

								{((data.hours != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/training-programs-workshops/item-5.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2"> {data.hours}</h4>
                                    <p>Number of Hours</p>
                                  </div>
                                </div>
								</>: <> </>}

								{((data.participant_org != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/trainees-trained/80.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {" "}
                                      {data.participant_org}
                                    </h4>
                                    <p>Number of Participating Organizations</p>
                                  </div>
                                </div>
								</>: <> </>}

								{((data.training_platform != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/trainees-trained/digital.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">
                                      {" "}
                                      {data.training_platform}
                                    </h4>
                                    <p>Training Platform /Location</p>
                                  </div>
                                </div>
								</>: <> </>}

								{((data.program_link != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/trainees-trained/traning-manual.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2"> 44</h4>
                                    <a
                                      href={data.program_link}
                                      className="link-text"
                                    >
                                      <i className="fa fa-download"></i> More
                                      Details
                                    </a>
                                  </div>
                                </div>
								</>: <> </>}

								{((data.program_brochure != null))  ? <>
                                <div className="col-md-4">
                                  <div className="item-box mb-3">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/trainees-trained/traning-brocher.png`}
                                      className="mb-3"
                                    />
                                    <h4 className="mb-2">Training Brochure</h4>
                                    <a
                                      href={data.program_brochure}
                                      className="link-text"
                                    >
                                      <i className="fa fa-download"></i> More
                                      Details
                                    </a>
                                  </div>
                                </div>
								</>: <> </>}

                              </div>
                            </div>
                            <table className="table table-bordered border-primary">
                              <thead>
                                <tr>
                                  <th scope="col">S. No.</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Company</th>
                                  <th scope="col">Country </th>
                                  <th scope="col">Number </th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.important_links &&
                                  data.important_links.map((data2, index) => (
                                    <tr>
                                      <td scope="row">{index + 1}</td>
                                      <td>{data2.name}</td>
                                      <td>{data2.company}</td>
                                      <td>{data2.country}</td>
                                      <td>{data2.number}</td>
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
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TraineesTrained;
