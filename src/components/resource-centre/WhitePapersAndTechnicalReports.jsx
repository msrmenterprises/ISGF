import React from "react";
import { NavLink, Link } from "react-router-dom";
import Media from "../reusable/Media";
import axios from "axios";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import parse from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const whitepapers =
  GLOBAL.BASE_URL+"white-paper-tech-report";
const Category =
  GLOBAL.BASE_URL+"whitePaperCategory";

function WhitePapersAndTechnicalReports() {
  const [getValue, setValue] = React.useState(null);
  const [getWhitePapers, setWhitePapers] = React.useState(null);
  const new_url = whitepapers + "?id=" + getValue;

  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [documents, setDocument] = React.useState("");
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
        window.open(assetUrl+ "/public/banner_img/" +documents);
        // console.log(response);
        navigate("/thankyou");
        // history.push("thankyou");
      })
      .catch(function (response) {
        // toast("Thanks for visiting !");
 
      });
  }
  const onSubmit = (data) => {
    saveData();
  };
  var url = "";
  React.useEffect(() => {
    if (getValue && getValue != null) {
      url = whitepapers + "?id=" + getValue;
    } else {
      const getValue1 = 1;
      url = whitepapers + "?id=" + getValue1;
    }

    axios.get(url).then((response) => {
      setWhitePapers(response.data);
    });
    axios.get(Category).then((response) => {
      setWhitePapersCategory(response.data);
    });
  }, [getValue]);
  if (!getWhitePapers) return null;
  if (!getWhitePapersCategory) return null;
  // console.log(getWhitePapersCategory);

  // console.log(getWhitePapers);
  return (
    <>
      <section
        className="isgf-breadcum white_paper_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/white-papers/white-paper-banner.jpg"
          })`,
        }}
      >
        <div className="container">

              <div className="isgf-breadcum-box">
                <h1>White Papers and Technical Reports</h1>
                <p>
                  Home {">"} Resource Centre {">"} White Papers and Technical
                  Reports
                </p>
              </div>
        </div>
      </section>
      <section className="white-paper">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="white-paper-tab sticky-top me-0 me-md-5">
                <h2>Page Content</h2>
                <div
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                  className="nav d-block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <a

                    onClick={(event) => setValue("1")}
                    id="v-pills-technical-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-technical"
                    role="tab"
                    aria-controls="v-pills-technical"
                    aria-selected="true"
                    className="nav-link active"
                  >
                    <i className="fa fa-angle-right"></i> ISGF Technical Reports
                  </a>
                  <a
                    onClick={(event) => setValue("2")}
                    className="nav-link"
                    id="v-pills-technical-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-technical"
                    role="tab"
                    aria-controls="v-pills-technical"
                    aria-selected="false"
                  >
                    <i className="fa fa-angle-right"></i> ISGF Whitepapers
                  </a>
                  <a
                    onClick={(event) => setValue("3")}
                    className="nav-link"
                    id="v-pills-technical-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-technical"
                    role="tab"
                    aria-controls="v-pills-technical"
                    aria-selected="false"
                  >
                    <i className="fa fa-angle-right"></i> ISGF Annual Reports
                  </a>
                  <a
                    onClick={(event) => setValue("4")}
                    className="nav-link"
                    id="v-pills-technical-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-technical"
                    role="tab"
                    aria-controls="v-pills-technical"
                    aria-selected="false"
                  >
                    <i className="fa fa-angle-right"></i> ISGF Other Reports
                  </a>
                  <a
                    onClick={(event) => setValue("5")}
                    className="nav-link"
                    id="v-pills-technical-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-technical"
                    role="tab"
                    aria-controls="v-pills-technical"
                    aria-selected="false"
                  >
                    <i className="fa fa-angle-right"></i> Other Reports
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>
                        {getValue == 1
                          ? "ISGF Technical Reports"
                          : getValue == 2
                          ? "ISGF Whitepapers"
                          : getValue == 3
                          ? "ISGF Annual Reports"
                          : getValue == 4
                          ? "ISGF Other Reports"
                          : getValue == 5
                          ? "Other Reports"
                          : "ISGF Technical Reports"}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-technical"
                      role="tabpanel"
                      aria-labelledby="v-pills-technical-tab"
                    >
                      <div className="row g-5">
                        {getWhitePapers &&
                          getWhitePapers.map((data, index) => (
                            <div className="col-sm-6 col-md-5 col-lg-4">
                              <div className="technical-paper">
                                <div className="top">
                                  <Moment className="time" format="DD MMMM YYYY">
                                    {data.added_date}
                                  </Moment>
                                  <div className="title">{data.title}</div>
                                </div>
                                <div className="image">
                                  <img alt="pic"
                                    src={assetUrl + "/public/banner_img/" + data.image}/>
                                  </div>
                                  <div className="action">
                                    <div
                                      className="btn btn-green mb-2"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseOne${index}`}
                                    >
                                      Report Abstract
                                    </div>
                                    {((data.document != null))  ? <>
                                    <div
                                      className="btn btn-orange"
                                      data-bs-toggle="modal"
                                      data-bs-target={`#collapseTwo${index}`}
                                      onClick={(e) =>
                                                  setDocument(data.document)
                                                }
                                    >
                                      View and Download Report
                                    </div>
                                     </>: <> </>}

                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
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
                                                  className="img-fluid text-center mb-3 white-paper-model-img"
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
                                              onSubmit={handleSubmit(onSubmit)}
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
                                                  setDesignation(e.target.value)
                                                }
                                                required
                                              />
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="checkRemember"
                                                  onChange={(e) =>
                                                    setCheckbox(e.target.value)
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
                                              {/* <ToastContainer /> */}
                                            </form>
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
                    <div
                      className="tab-pane fade"
                      id="v-pills-whitepapers"
                      role="tabpanel"
                      aria-labelledby="v-pills-whitepapers-tab"
                    >
                      2
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-annual"
                      role="tabpanel"
                      aria-labelledby="v-pills-annual-tab"
                    >
                      3
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-other-reports"
                      role="tabpanel"
                      aria-labelledby="v-pills-other-reports-tab"
                    >
                      4
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-other"
                      role="tabpanel"
                      aria-labelledby="v-pills-other-tab"
                    >
                      5
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="white-paper-report">
                    <p className="mt-4">Read More Reports On</p>
                    {getWhitePapersCategory &&
                      getWhitePapersCategory.map((data, index) => (
                        <NavLink className="btn btn-gray mb-2" to={data.slug}>
                          {" "}
                          {data.title}{" "}
                        </NavLink>
                      ))}
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

export default WhitePapersAndTechnicalReports;
