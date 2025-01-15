import React from "react";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const GLOBAL = require("../../commonConstants.js");
const baseURL = GLOBAL.BASE_URL + "show_user_data/";
const assetUrl = GLOBAL.assetUrl;
const FoundationCourse = () => {
  const slug = useParams();
  const newUrl = baseURL + slug.id;
  // console.log(newUrl);
  const navigate = useNavigate();
  const [getData, setData] = React.useState(null);
  const cookies = new Cookies();
  var email = cookies.get("data");

  React.useEffect(() => {
    const data = { email: email };
    axios.post(newUrl, data).then((response) => setData(response.data));
  }, []);
  if (!email) return navigate("/");
  if (!getData) return null;
 
  return (
    <>
      <section className="foundation-coruse m-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>{getData.courses_name}</h2>
                    </div>
                    <div className="mb-3">
                      <p>
                        Registered Participants of ISGF Online Training Program
                        have the of access all the presentations by tutors,
                        recorded videos of each session, training manual, other
                        reference material curated by ISGF for your learning in
                        the page below. This page will be valid for maximum four
                        months after your registration. In case of queries,
                        please write to us at team@indiasmartgrid.org
                      </p>
                      <div className="isgf_accordion">
                        <div className="accordion" id="accordionExample">
                          {getData.list &&
                            getData.list.map((data1, index) => (
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header bg-green"
                                  id="heading1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapseOne${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapseOne${index}`}
                                  >
                                    <span>{data1.module_name}</span>
                                    {data1.title}
                                  </button>
                                </h2>
                                <div
                                  id={`collapseOne${index}`}
                                  aria-expanded="false"
                                  className="accordion-collapse collapse "
                                  aria-labelledby="heading1"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="foundation-course-item">
                                          <div className="foundation-video">
                                            <div className="">
                                              <iframe
                                                src={data1.video_link}
                                                width="100%"
                                                height="250"
                                                frameborder="0"
                                                allow="autoplay; fullscreen"
                                                allowfullscreen
                                              ></iframe>
                                              {/* <a href={data1.video_link} className="btn">View Video</a> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {data1.teacher &&
                                        data1.teacher.map((data2, index) => (
                                          <div className="col-md-4">
                                            <div className="foun-green-box text-center">
                                              <h4>{data2.name}</h4>
                                              <p className="b">
                                                {data2.company}
                                              </p>
                                              <p>{data2.description}</p>
                                              <a
                                                target="_blank"
                                                href={
                                                  assetUrl +
                                                  "/public/Teacher_img/" +
                                                  data2.pdf
                                                }
                                                className="btn btn-orange"
                                              >
                                                View/Download Presentation
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                    </div>
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

              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>Other Session Material For Participants</h2>
                    </div>
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="progtram-manual text-centar">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/course/program-icon.png`}
                            />
                            <h4>PROGRAM MANUAL</h4>
                            <a
                              target="_blank"
                              href={
                                assetUrl +
                                "/public/CourseList/" +
                                getData.program_manual
                              }
                              className="btn btn-orange"
                            >
                              View/Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>Other Reference Material</h2>
                    </div>
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-12">
                          {getData.refrence_material &&
                            getData.refrence_material.map((data, index) => (
                              <div className="refrance-box custom-refrance">
                                <div className="r-l">
                                  <span>
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/course/arrow-icon.png`}
                                    />
                                  </span>
                                  {data.title}
                                </div>
                                <div className="r-r">
                                  <a
                                    target="_blank"
                                    href={
                                      assetUrl +
                                      "/public/CourseList/" +
                                      data.pdf
                                    }
                                    className="btn btn-orange"
                                  >
                                    View/Download
                                  </a>
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
            <div className="col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundationCourse;
