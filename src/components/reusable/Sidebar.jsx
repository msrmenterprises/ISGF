import React from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import parse from "html-react-parser";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require("../../commonConstants.js");
// const WhatsNew = GLOBAL.BASE_URL+"WhatsNew";
const WhatsNew_program = GLOBAL.BASE_URL + "events_home";
const WhatsNew_member = GLOBAL.BASE_URL + "members_home";
const WhatsNew_focus = GLOBAL.BASE_URL + "focus-areas-home";
const url = GLOBAL.BASE_URL + "bulletin";

const assetUrl = GLOBAL.assetUrl;

function Sidebar() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = React.useState("");
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

  // const [getWhatsNew, setWhatsNew] = React.useState(null);
  const [getWhatsNewMember, setWhatsNew_member] = React.useState(null);
  const [getWhatsWhatsNew_focus, setWhatsWhatsNew_focus] = React.useState(null);
  const [getWhatsWhatsNew_program, setWhatsWhatsNew_program] =
    React.useState(null);

  React.useEffect(() => {
    axios.get(WhatsNew_member).then((response) => {
      setWhatsNew_member(response.data);
    });
    axios.get(WhatsNew_focus).then((response) => {
      setWhatsWhatsNew_focus(response.data);
    });
    axios.get(WhatsNew_program).then((response) => {
      setWhatsWhatsNew_program(response.data);
    });
    axios.get(url).then((response) => {
      setBulletin(response.data);
    });
  }, []);
  if (!getWhatsNewMember) return null;
  if (!getWhatsWhatsNew_focus) return null;
  if (!getWhatsWhatsNew_program) return null;
  if (!getBulletin) return null;
  
  return (
    <>
      <ToastContainer />
      <div className="isgf_about_sliderbar">
        <div className="heading mb-3">
          <h2>What’s New</h2>
          {/* <a href="#" className="btn btn-white">
                    View All
                  </a> */}
        </div>
        <div className="isgf_bluebox mb-3">
          <h4 className="heading mb-3 isgf_blue_heading">ISGF Programs</h4>
          {getWhatsWhatsNew_program &&
            getWhatsWhatsNew_program.map((data, index) => (
              <div className="isgf_about_point">
                <p>
                  <i className="fa fa-check"></i> {data.title}
                </p>
              </div>
            ))}
        </div>

        <div className="isgf_bluebox mb-3 first_two_member_none">
          <h4 className="heading mb-3 isgf_blue_heading greentitle">
            ISGF Member Updates
          </h4>
          {getWhatsNewMember &&
            getWhatsNewMember.map((data, index) => (
              <div className="isgf_about_point">
                <p>
                  <i className="fa fa-check"></i> {data.title}
                </p>
              </div>
            ))}
        </div>
        <div className="isgf_bluebox mb-3 ">
          <h4 className="heading mb-3 isgf_blue_heading ">
            ISGF New Focus Areas{" "}
          </h4>
          {getWhatsWhatsNew_focus &&
            getWhatsWhatsNew_focus.map((data, index) => (
              <div className="isgf_about_point">
                <p>
                  <i className="fa fa-check"></i> {data.title}
                </p>
              </div>
            ))}
        </div>

        <div className="green-box">
          <div className="row mt-4">
            <div className="col-md-12">
              <div
                className="isgf_about_greenbox"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/about/green-bg.jpg"
                  })`,
                }}
              >
                <div className="heading mb-3 d-flex pb-2">
                  <h3 className="mb-0">Smart Grid Bulletin</h3>
                  <NavLink
                    to="/smart-grid-bulletin"
                    className="btn btn-white px-3 py-1"
                  >
                    View All
                  </NavLink>
                </div>
                <div className="book">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/about/slide-img.png`}
                        alt="pic"
                      />
                    </div>
                    <div className="col-8 text-start">
                      <h5>{getBulletin ? getBulletin[0].title : ""}</h5>
                      <a
                        href={
                          getBulletin
                            ? getBulletin[0].list[
                                getBulletin[0].list.length - 1
                              ].link
                            : ""
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn read-more"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="heading mt-3 mb-3">
                  <div className="bulletin-sub">
                    <h4>ISGF Bulletin Subscription</h4>
                    <p>
                      Signup for your monthly copy of ISGF Smart Grid Bulletin
                      for all the latest news from ISGF and special
                      announcements!
                    </p>
                  </div>
                </div>
                <div className="row">
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
                        required
                      />
                      <div className="input-group-append">
                        <button type="submit" className="email-btn btn-orange">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
