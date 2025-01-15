import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const news = GLOBAL.BASE_URL+"newsDetail/";
let url = window.location.pathname;
let new_data = url.split("/");

function GridModernization() {
  const slug = useParams();

  const [getValue, setValue] = React.useState(null);

  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [checkbox, setCheckbox] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [getWhitePapersCategory, setWhitePapersCategory] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function saveData() {
    axios({
      method: "post",
      url: GLOBAL.BASE_URL+"white-paper-tech-report-form",
      data: { name, company, email, phone, designation },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        //handle success
        toast.success("🦄 Thanks for visiting!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // document.getElementById("whiteForm").reset();
        // console.log(response);
        navigate("/thankyou");
        // history.push("thankyou");
      })
      .catch(function (response) {
        // toast("Thanks for visiting !");

        //handle error
        console.log(response);
      });
  }
  const onSubmit = (data) => {
    saveData();
  };
  const [getNews, setNews] = React.useState(null);
  const new_url = news+(slug.id);
  React.useEffect(() => {
    axios.get(new_url).then((response) => {
      setNews(response.data);
    });
  }, [new_url]);
  if (!getNews) return null;
  //   console.log(getNews.events)
  return (
    <>
      <section
        className="isgf-breadcum isgf_grid_modernization_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/grid-modernization/grid-modernization-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>{getNews.title}</h1>
            <p>
              Home {">"} Industry News {">"} {getNews.title}
            </p>

          </div>
        </div>
      </section>
      <section className="grid_modernization grid-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading mb-3">
                <h2>{getNews.title} </h2>
              </div>
              <div className="grid_modernization_topbox mb-3">
                <div className="row g-4">
                  <div className="col-md-3">
                    <img
                      src={assetUrl + "/public/Category_img/" + getNews.image}
                      className=""
                      alt="pic"
                    />
                  </div>
                  <div className="col-md-9">
                    {getNews.description != null ? (
                      <>{parse(`${getNews.description}`)}</>
                    ) : (
                      <> </>
                    )}
                  </div>
                </div>
              </div>

              <div className="isgf_accordion">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                   <h2 className="accordion-header bg-green" id="flush-headingOne">
                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/grid-modernization/news-icon.png`}
                          className="logo-icon"
                          alt="pic"
                        />{" "}
                        News
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        {getNews.news_data &&
                          getNews.news_data.map((data, index) => (
                            <div className="gird_modernization_content mb-3">
                              <p className="p1">
                                {data.world}

                                {/* <Moment format="dddd, DD MMMM YYYY">
                                  {data.add_date}
                                </Moment> */}
                              </p>
                              <h5><a target="_blank" href={data.read_more}>{data.title}</a></h5>
                              <p>{parse(`${data.description}`)}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header bg-green" id="flush-headingTwo">
                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/grid-modernization/news-icon-1.png`}
                          className="logo-icon"
                          alt="pic"
                        />{" "}
                        Reports and Whitepapers
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body p-3">
                        <div className="row g-3">
                          {getNews.technical_report &&
                            getNews.technical_report.map((data, index) => (
                              <div className="col-sm-6 col-md-5 col-lg-4">
                                <div className="technical-paper">
                                <div className="top">
                                  <Moment className="time" format="DD MMMM YYYY">
                                    {data.added_date}
                                  </Moment>
                                  <div className="title">{data.title}</div>
                                </div>
                                <div className="image">
                                  <img src={assetUrl + "/public/banner_img/" + data.image}
                                      alt="pic"/>
                                </div>
                                <div className="action">
                                  <div
                                      className="btn btn-green mb-2"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseOne${index}`}
                                    >
                                      Report Abstract
                                    </div>
                                    <div
                                      className="btn btn-orange"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseTwo${index}`}
                                    >
                                      View and Download Report
                                    </div>
                                </div>
                                </div>


                                 <div
                                      className="modal fade white-paper-model"
                                      id={`collapseOne${index}`}
                                      tabindex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-body">
                                            <a
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></a>
                                            <div className="white-paper-right-item">
                                              <h3>Report Abstract</h3>
                                              <div className="white-paper-inner-box">
                                                <div className="model-left">
                                                  <img
                                                    src={
                                                      assetUrl +
                                                      "/public/banner_img/" +
                                                      data.image
                                                    }
                                                    className="img-fluid text-center mb-3"
                                                  />
                                                </div>
                                                <div className="model-right">
                                                  <p className="p-gray">
                                                    <Moment format="DD MMMM YYYY">
                                                      {data.added_date}
                                                    </Moment>
                                                  </p>
                                                  <p className="p-blue mb-3">
                                                    {data.title}
                                                  </p>
                                                </div>
                                              </div>
                                              {parse(`${data.description}`)}

                                              <a
                                                href="grid-modernization"
                                                className="btn btn-gray mb-2 inner-btn"
                                              >
                                                Grid Modernization
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="modal fade white-paper-model"
                                      id={`collapseTwo${index}`}
                                      tabindex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-body">
                                            <a
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></a>
                                            <div className="white-paper-right-item">
                                              <h3>Fill up a form</h3>
                                              <form
                                                id="whiteForm"
                                                action=""
                                                onSubmit={handleSubmit(
                                                  onSubmit
                                                )}
                                              >
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Name"
                                                  value={name}
                                                  onChange={(e) =>
                                                    setName(e.target.value)
                                                  }
                                                  required
                                                />
                                                <input
                                                  type="email"
                                                  className="form-control"
                                                  placeholder="Email Address"
                                                  onChange={(e) =>
                                                    setEmail(e.target.value)
                                                  }
                                                  required
                                                />{" "}
                                                {errors.email && (
                                                  <small className="text-danger">
                                                    Invalid Email Address*
                                                  </small>
                                                )}
                                                <input
                                                  type="tel"
                                                  className="form-control"
                                                  placeholder="Mobile Number"
                                                  onChange={(e) =>
                                                    setPhone(e.target.value)
                                                  }
                                                  required
                                                />
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Company"
                                                  onChange={(e) =>
                                                    setCompany(e.target.value)
                                                  }
                                                  required
                                                />
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Designation"
                                                  onChange={(e) =>
                                                    setDesignation(
                                                      e.target.value
                                                    )
                                                  }
                                                  required
                                                />
                                                <div className="form-check">
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="checkRemember"
                                                    onChange={(e) =>
                                                      setCheckbox(
                                                        e.target.value
                                                      )
                                                    }
                                                    required
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    for="checkRemember"
                                                  >
                                                    I agree to receive email
                                                    communication from ISGF and
                                                    its monthly newsletter
                                                  </label>
                                                </div>
                                                <button
                                                  type="submit"
                                                  className="btn bg-green mt-3"
                                                >
                                                  Submit
                                                </button>
                                                <ToastContainer />
                                              </form>
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
                  </div>
                  <div className="accordion-item ">
                    <h2 className="accordion-header bg-green" id="flush-headingThree">
                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/grid-modernization/news-icon-2.png`}
                          className="logo-icon"
                        />{" "}
                        Events and Training Programs
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        {getNews.events &&
                          getNews.events.map((data1, index) => (
                            <div className="calendar-box mb-3">
                              <div className="row">
                                <div className="col-md-2">
                                  <div className="green-box">
                                    <p>
                                      <Moment format="ddd">
                                        {data1.start_date}
                                      </Moment>
                                      <br />
                                      <Moment format="DD">
                                        {data1.start_date}
                                      </Moment>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-10">
                                  <p>
                                    <Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                      {data1.start_date}
                                    </Moment>
                                    -
                                    <Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                      {data1.end_date}
                                    </Moment>
                                  </p>
                                  <h5>{data1.title}</h5>
                                  <p>{data1.location}</p>
                                  {parse(`${data1.description}`)}
                                  <div className="mb-2">
                                    <a
                                      href={data1.url}
                                      className="btn btn-orange"
                                      target="_blank"
                                    >
                                      Read Details
                                    </a>
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
              <div className="row">
                <div className="col-md-12">
                  <a
                    onClick={() => navigate(-1)}
                    className="btn btn-blue btn-previous"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/grid-modernization/privew.png`}
                      className="previous-img"
                    />{" "}
                    Previous
                  </a>
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

export default GridModernization;
