import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
const GLOBAL = require("../../commonConstants");
const news = GLOBAL.BASE_URL + "news_home";
const assetUrl = GLOBAL.assetUrl;
const whitepapers = GLOBAL.BASE_URL + "white-paper-tech-report-home";
const whiteUrl = GLOBAL.BASE_URL + "white-paper-tech-report?id=2";
const url = GLOBAL.BASE_URL + "bulletin";
const Achievements = () => {
  const [email, setEmail] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [getWhitePapers, setWhitePapers] = React.useState(null);
  const [getLatestWhitePapers, setLatestWhitePapers] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [getBulletin, setBulletin] = React.useState(null);
  function saveData() {
    axios({
      method: "post",
      url: GLOBAL.BASE_URL + "bulletin_form",
      data: { email },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response == "success") {
          swal(
            "Subscribed Successfully",
            "Congratulation your subscription is successfull",
            "success"
          );
        } else {
          swal("Subscription Failed", "You have already Subscribed.", "error");
        }
        setEmail("");
      })
      .catch(function (response) {
        //handle error
        swal(
          "Subscription Failed",
          "Plese check your details once again",
          "error"
        );
      });
  }
  const onSubmit = (data) => {
    saveData();
  };
  React.useEffect(() => {
    setLoading(true);
    axios.get(whiteUrl).then((response) => {
      setWhitePapers(response.data);
    });
    axios.get(whitepapers).then((response) => {
      setLatestWhitePapers(response.data);
    });
    axios.get(url).then((response) => {
      setBulletin(response.data);
    });
    setLoading(false);
  }, []);

  if (!getWhitePapers) return null;
  if (!getLatestWhitePapers) return null;
  if (!getBulletin) return null;

  return (
    <>
      {loading ? (
        <>
          <div className="site-loader">Loading...</div>
        </>
      ) : (
        <>
          <ToastContainer />
          <div className="latest">
            <div className="container">
              <div className="row gx-0 gy-3">
                <div className="col-md-8">
                  <div
                    className="box-main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/images/latest-bg-1.jpg"
                      })`,
                    }}
                  >
                    <div className="row gx-0 gy-3">
                      <div className="col-md-6">
                        <div className="box">
                          <div className="heading mb-3 home-card">
                            <h2>Latest ISGF Reports</h2>
                            <NavLink onClick={() => window.scrollTo(0, 0)}
                              to="/white-papers-technical-reports"
                              className="btn btn-white btn-s "
                            >
                              View All
                            </NavLink>
                          </div>
                          {getLatestWhitePapers &&
                            getLatestWhitePapers.map((data, index) => (
                              <div className="book">
                                {index <= 2 && data.page_content_type !== 2 ? (
                                  <>
                                    <div className="row">
                                      <div className="col-3">
                                        <img
                                          src={
                                            assetUrl +
                                            "/public/banner_img/" +
                                            data.image
                                          }
                                          alt=""
                                        />
                                      </div>
                                      <div className="col-9">
                                        <h5>
                                          <a onClick={() => window.scrollTo(0, 0)}
                                            className="latest-white-a"
                                            href={
                                              assetUrl +
                                              "/public/banner_img/" +
                                              data.document
                                            }
                                            target="_blank"
                                          >
                                            {data.title}
                                          </a>
                                        </h5>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <> </>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box">
                          <div className="heading mb-3 home-card">
                            <h2>ISGF Whitepapers</h2>
                            <NavLink  onClick={() => window.scrollTo(0, 0)}
                              to="/white-papers-technical-reports"
                              className="btn btn-white btn-s"
                            >
                              View All
                            </NavLink>
                          </div>
                          {getWhitePapers &&
                            getWhitePapers.map((data, index) => (
                              <div className="book">
                                {index <= 2 && data.page_content_type == 2 ? (
                                  <>
                                    <div className="row">
                                      <div className="col-3">
                                        <img
                                          src={
                                            assetUrl +
                                            "/public/banner_img/" +
                                            data.image
                                          }
                                          alt=""
                                        />
                                      </div>
                                      <div className="col-9">
                                        <h5>
                                          <a onClick={() => window.scrollTo(0, 0)}
                                            className="latest-white-a"
                                            href={
                                              assetUrl +
                                              "/public/banner_img/" +
                                              data.document
                                            }
                                            target="_blank"
                                          >
                                            {data.title}
                                          </a>
                                        </h5>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <> </>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="green-box"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/images/latest-bg-2.jpg"
                      })`,
                    }}
                  >
                    <div className="row gx-0 gy-3">
                      <div className="col-md-12">
                        <div className="box">
                          <div className="heading mb-3 d-flex home-card">
                            <h2>Smart Grid Bulletin</h2>
                            <NavLink onClick={() => window.scrollTo(0, 0)}
                              to="/smart-grid-bulletin"
                              className="btn btn-white view-all  btn-s"
                            >
                              View All
                            </NavLink>
                          </div>
                          <div className="book">
                            <div className="row">
                              <div className="col-4">
                                <img
                                  src={`${process.env.PUBLIC_URL}/images/book5.jpg`}
                                  alt=""
                                />
                              </div>
                              <div className="col-8">
                                <h5>
                                  {getBulletin ? getBulletin[0].title : ""}
                                </h5>
                                <a onClick={() => window.scrollTo(0, 0)}
                                  href={
                                    getBulletin
                                      ? getBulletin[0].list[
                                          getBulletin[0].list.length - 1
                                        ].link
                                      : ""
                                  }
                                  target="_blank"
                                  className="btn btn-white white-btn"
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="book">
                            <div className="heading">
                              <h2>ISGF Bulletin Subscription</h2>
                              <p>
                                Signup for your monthly copy of ISGF Smart Grid
                                Bulletin for all the latest news from ISGF and
                                special announcements!
                              </p>
                            </div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                              <div className="input-group mt-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email address"
                                  value={email}
                                  {...register("email", {
                                    required: "Email is Required",
                                    pattern:
                                      /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                  })}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="input-group-append">
                                  <button
                                    type="submit"
                                    className="email-btn btn-orange"
                                  >
                                    Subscribe
                                  </button>
                                </div>
                              </div>
                              {errors.email && (
                                <small className="text-white">
                                  Invalid Email Address*
                                </small>
                              )}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Achievements;
