import React from "react";
import Media from "../reusable/Media";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import parse from "html-react-parser";
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const methodology = GLOBAL.BASE_URL+"methodology";
const course =
  GLOBAL.BASE_URL+"course" +
  "?model=" +
  "onsite-training";
function TrainingsOnsiteTrainings() {
  const cookies = new Cookies();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {register,handleSubmit,formState:{errors}} = useForm();

    function saveData() {

    axios({
      method: "post",
      url: GLOBAL.BASE_URL+"login",
      data: { email,password },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

    })
      .then(function (response) {
       
        if(response.data.status === 'success'){
           cookies.set('data', email , { path: '/' });
          // toast('Login Successfully');
          return navigate("/course");

        }
        // setSuccess(response);
        // setEmail("");
      })
      .catch(function (response) {
        //handle error
          toast('Invalid Creadendtials');
        // console.log(response);
      });

  }
  const onSubmit = (data) => {
    saveData();
  }
  const [getMethodology, setMethodology] = React.useState(null);
  const [getCourse, setCourse] = React.useState(null);
  const [getselect, setselect] = React.useState("");
  const handlechange = (data) => {
    setselect(data);
  };
  React.useEffect(() => {
    axios.get(methodology).then((response) => {
      setMethodology(response.data);
    });
    axios.get(course).then((response) => {
      setCourse(response.data);
    });
  }, []);
  if (!getMethodology) return null;
  if (!getCourse) return null;
  if (!getCourse[0]) return null;
  // console.log(getCourse[0].objectives);
  return (
    <>
      <section
        className="isgf-breadcum trainings-onsite_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/trainings-onsite-trainings/banner.png"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>Onsite Trainings</h1>
            <p>
              Home {">"} ISGF Initiatives {">"} ISGF Trainings Onsite Trainings
            </p>
          </div>
        </div>
      </section>
      <section className="smart_grid_handbook online-training-registration">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="white-paper-center">
                    <div className="benefits_membership">
                      <h2 className="training-v-tab-heading">
                        Training Programs
                      </h2>
                      <div
                        className="nav flex-column nav-pills training-v-tab"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        {getCourse &&
                          getCourse.map((data, index) => (
                            <a
                              onClick={() => {
                                handlechange(data);
                              }}
                              className={index == 0 ? "" : "active"}
                              id="v-pills-annual-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-annual"
                              role="tab"
                              aria-controls="v-pills-annual"
                              aria-selected="true"
                            >
                              {data.program}
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className={`tab-pane fade ${
                            getselect ? "" : "show active"
                          }`}
                          id="v-pills-annual"
                          role="tabpanel"
                          aria-labelledby="v-pills-annual-tab"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="benefits_membership">
                                <div className="heading mb-3">
                                  <h2>
                                    {getselect.program
                                      ? getselect.program
                                      : getCourse[0].program}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              {getselect.description
                                ? parse(`${getselect.description}`)
                                : parse(`${getCourse[0].description}`)}

                              <div className="isgf_accordion">
                                <div
                                  className="accordion"
                                  id="accordionExample"
                                >
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading1"
                                    >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">


                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon1.png`}
                                        />
                                        {/* <img
                                          src="images/trainings-online-trainings-live-training/icon1.png"
                                          className="logo-icon"
                                        /> */}
                                        Objectives and Benefits
                                      </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">

                                      <div className="accordion-body p-3">
                                        <div className="row">
                                          <div className="col-md-12">
                                            {getselect.objectives
                                              ? parse(`${getselect.objectives}`)
                                              : parse(
                                                  `${getCourse[0].objectives}`
                                                )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item mt-3">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading2"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse2"
                                        aria-expanded="false"
                                        aria-controls="collapse2"
                                      >
                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon2.png`}
                                        />
                                        Target Audience
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse2"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="heading2"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body p-3">
                                        <div className="row">
                                          <div className="col-md-12">
                                            {getselect.target
                                              ? parse(`${getselect.target}`)
                                              : parse(`${getCourse[0].target}`)}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item ">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading3"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse3"
                                        aria-expanded="false"
                                        aria-controls="collapse3"
                                      >
                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon3.png`}
                                        />
                                        Topics Covered
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse3"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="heading3"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body competitions p-3">
                                        <div className="accordion-inner-blue mt-3">
                                          {getselect.topic_covered ? (
                                            <>
                                              <div
                                                className="accordion accordion-flush"
                                                id="accordionFlushExample"
                                              >
                                                {getselect.topic_covered &&
                                                  getselect.topic_covered.map(
                                                    (data1, index1) => (
                                                      <div className="accordion-item">
                                                        <h2
                                                          className="accordion-header"
                                                          id="flush-headingOne"
                                                        >
                                                          <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#flush-collapseOne${index1}`}
                                                            aria-expanded="false"
                                                            aria-controls={`flush-collapseOne${index1}`}
                                                          >
                                                            {data1.columnone}
                                                          </button>
                                                        </h2>
                                                        <div
                                                          id={`flush-collapseOne${index1}`}
                                                          className="accordion-collapse collapse"
                                                          aria-labelledby="flush-headingOne"
                                                          data-bs-parent="#accordionFlushExample"
                                                        >
                                                          <div className="accordion-body p-3">
                                                            <p className="blue-p">
                                                              <b>
                                                                {
                                                                  data1.columntwo
                                                                }
                                                              </b>
                                                            </p>
                                                            {parse(
                                                              `${data1.columnthree}`
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  )}
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div
                                                className="accordion accordion-flush"
                                                id="accordionFlushExample"
                                              >
                                                {getCourse[0].topic_covered &&
                                                  getCourse[0].topic_covered.map(
                                                    (data1, index1) => (
                                                      <div className="accordion-item">
                                                        <h2
                                                          className="accordion-header"
                                                          id="flush-headingOne"
                                                        >
                                                          <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#flush-collapseOne${index1}`}
                                                            aria-expanded="false"
                                                            aria-controls={`flush-collapseOne${index1}`}
                                                          >
                                                            {data1.columnone}
                                                          </button>
                                                        </h2>
                                                        <div
                                                          id={`flush-collapseOne${index1}`}
                                                          className="accordion-collapse collapse"
                                                          aria-labelledby="flush-headingOne"
                                                          data-bs-parent="#accordionFlushExample"
                                                        >
                                                          <div className="accordion-body p-3">
                                                            <p className="blue-p">
                                                              <b>
                                                                {
                                                                  data1.columntwo
                                                                }
                                                              </b>
                                                            </p>
                                                            {parse(
                                                              `${data1.columnthree}`
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  )}
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="isgf_register_green_btn text-center mt-4 mb-4">
                                    <a target="_blank"
                                      href={
                                        getselect.brochure
                                          ? getselect.brochure
                                          : getCourse[0].brochure
                                      }
                                      className="btn white-btn-blue"
                                    >
                                      <img
                                        src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon5.png`}
                                      />
                                      Download/View Brochure
                                    </a>
                                  </div>

                                  <div className="accordion-item ">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading4"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse4"
                                        aria-expanded="false"
                                        aria-controls="collapse4"
                                      >
                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon6.png`}
                                        />
                                        FEE AND REGISTRATION
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse4"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="heading4"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body p-3">
                                        <table className="table table-bordered blue-border mt-2">
                                          <thead className="bg_blue">
                                            <tr>
                                              <th scope="col">
                                                Model (Online Offline name)
                                              </th>
                                              <th scope="col">Program</th>
                                              <th scope="col">
                                                Fee + GST(18%)
                                              </th>
                                              <th scope="col">
                                                Amount with GST
                                              </th>
                                            </tr>
                                          </thead>
                                          {getselect.fee_and_regis ? (
                                            <>
                                              <tbody>
                                                {getselect.fee_and_regis &&
                                                  getselect.fee_and_regis.map(
                                                    (data2, index) => (
                                                      <tr className="accordion_border_bottom">
                                                        <th className="s_no">
                                                          {data2.columnone}
                                                        </th>
                                                        <td className="title">
                                                          {data2.columntwo}
                                                        </td>
                                                        <td className="font-bold">
                                                          {data2.columnthree}
                                                        </td>
                                                        <td className="font-bold">
                                                          {data2.columnfour}
                                                        </td>
                                                      </tr>
                                                    )
                                                  )}
                                              </tbody>
                                            </>
                                          ) : (
                                            <>
                                              <tbody>
                                                {getCourse[0].fee_and_regis &&
                                                  getCourse[0].fee_and_regis.map(
                                                    (data2, index) => (
                                                      <tr className="accordion_border_bottom">
                                                        <th className="s_no">
                                                          {data2.columnone}
                                                        </th>
                                                        <td className="title">
                                                          {data2.columntwo}
                                                        </td>
                                                        <td className="font-bold">
                                                          {data2.columnthree}
                                                        </td>
                                                        <td className="font-bold">
                                                          {data2.columnfour}
                                                        </td>
                                                      </tr>
                                                    )
                                                  )}
                                              </tbody>
                                            </>
                                          )}
                                        </table>
                                        <div className="competitions p-3">
                                          <div className="accordion-inner-blue mt-3">
                                            <div
                                              className="accordion accordion-flush"
                                              id="accordionFlushExample"
                                            >
                                              <div className="accordion-item">
                                                <h2
                                                  className="accordion-header"
                                                  id="flush-headingOne"
                                                >
                                                  <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                  >
                                                    Payment Options
                                                  </button>
                                                </h2>
                                                <div
                                                  id="flush-collapseOne"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="flush-headingOne"
                                                  data-bs-parent="#accordionFlushExample"
                                                >
                                                  <div className="accordion-body p-3">
                                                    {getselect.payment_option
                                                      ? parse(
                                                          `${getselect.payment_option}`
                                                        )
                                                      : parse(
                                                          `${getCourse[0].payment_option}`
                                                        )}
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="accordion-item">
                                                <h2
                                                  className="accordion-header"
                                                  id="flush-headingTwo"
                                                >
                                                  <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                  >
                                                    *Special Offers
                                                  </button>
                                                </h2>
                                                <div
                                                  id="flush-collapseTwo"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="flush-headingTwo"
                                                  data-bs-parent="#accordionFlushExample"
                                                >
                                                  <div className="accordion-body p-3">
                                                    {getselect.special_offer
                                                      ? parse(
                                                          `${getselect.special_offer}`
                                                        )
                                                      : parse(
                                                          `${getCourse[0].special_offer}`
                                                        )}
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="accordion-item">
                                                <h2
                                                  className="accordion-header"
                                                  id="flush-headingThree"
                                                >
                                                  <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                  >
                                                    Terms and Conditions
                                                  </button>
                                                </h2>
                                                <div
                                                  id="flush-collapseThree"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="flush-headingThree"
                                                  data-bs-parent="#accordionFlushExample"
                                                >
                                                  <div className="accordion-body p-3">
                                                    {getselect.term_and_cond
                                                      ? parse(
                                                          `${getselect.term_and_cond}`
                                                        )
                                                      : parse(
                                                          `${getCourse[0].term_and_cond}`
                                                        )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading5"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse5"
                                        aria-expanded="false"
                                        aria-controls="collapse5"
                                      >
                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon7.png`}
                                        />
                                        Course Schedule
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse5"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="heading5"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body competitions p-3">
                                        <p className="blue-p">
                                          <b>
                                            {getselect.course_schedule_description
                                              ? parse(
                                                  `${getselect.course_schedule_description}`
                                                )
                                              : parse(
                                                  `${getCourse[0].course_schedule_description}`
                                                )}
                                          </b>
                                        </p>
                                        <div className="accordion-inner-blue mt-3">
                                          {getselect.course_schedule ? (
                                            <>
                                              <div
                                                className="accordion accordion-flush"
                                                id="accordionFlushExample"
                                              >
                                                {getselect.course_schedule &&
                                                  getselect.course_schedule.map(
                                                    (data3, index) => (
                                                      <div className="accordion-item">
                                                        <h2
                                                          className="accordion-header"
                                                          id="flush-headingOne"
                                                        >
                                                          <button
                                                            className={`accordion-button ${
                                                              index == 0
                                                                ? ""
                                                                : "collapsed"
                                                            }`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapseOne${index}`}
                                                            aria-expanded="false"
                                                            aria-controls={`collapseOne${index}`}
                                                          >
                                                            {data3.columnone}
                                                          </button>
                                                        </h2>
                                                        <div
                                                          id={`collapseOne${index}`}
                                                          className={`accordion-collapse collapse ${
                                                            index == 0
                                                              ? "show"
                                                              : ""
                                                          }`}
                                                          aria-labelledby={`headingOne${index}`}
                                                          data-bs-parent="#accordionFlushExample"
                                                        >
                                                          <div className="accordion-body p-3">
                                                            <p>
                                                              {data3.columntwo}
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  )}
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div
                                                className="accordion accordion-flush"
                                                id="accordionFlushExample"
                                              >
                                                {getCourse[0].course_schedule &&
                                                  getCourse[0].course_schedule.map(
                                                    (data3, index) => (
                                                      <div className="accordion-item">
                                                        <h2
                                                          className="accordion-header"
                                                          id="flush-headingOne"
                                                        >
                                                          <button
                                                            className={`accordion-button ${
                                                              index == 0
                                                                ? ""
                                                                : "collapsed"
                                                            }`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapseOne${index}`}
                                                            aria-expanded="false"
                                                            aria-controls={`collapseOne${index}`}
                                                          >
                                                            {data3.columnone}
                                                          </button>
                                                        </h2>
                                                        <div
                                                          id={`collapseOne${index}`}
                                                          className={`accordion-collapse collapse ${
                                                            index == 0
                                                              ? "show"
                                                              : ""
                                                          }`}
                                                          aria-labelledby={`headingOne${index}`}
                                                          data-bs-parent="#accordionFlushExample"
                                                        >
                                                          <div className="accordion-body p-3">
                                                            <p>
                                                              {data3.columntwo}
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  )}
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item ">
                                    <h2
                                      className="accordion-header bg-green"
                                      id="heading6"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse6"
                                        aria-expanded="false"
                                        aria-controls="collapse6"
                                      >
                                        <img
                                          className="logo-icon"
                                          src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon8.png`}
                                        />
                                        EXAMINATION AND CERTIFICATION
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse6"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="heading6"
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body competitions p-3">
                                        <div className="accordion-inner-blue mt-3">
                                          <div
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                          >
                                            <div className="accordion-item">
                                              <h2
                                                className="accordion-header"
                                                id="flush-headingOne"
                                              >
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseOne"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseOne"
                                                >
                                                  Online Examination
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div className="accordion-body p-3">
                                                  {getselect.onilne_examination
                                                    ? parse(
                                                        `${getselect.onilne_examination}`
                                                      )
                                                    : parse(
                                                        `${getCourse[0].onilne_examination}`
                                                      )}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <h2
                                                className="accordion-header"
                                                id="flush-headingTwo"
                                              >
                                                <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseTwo"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseTwo"
                                                >
                                                  CERTIFICATE OF MERIT
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div className="accordion-body p-3">
                                                  {getselect.certificate_merit
                                                    ? parse(
                                                        `${getselect.certificate_merit}`
                                                      )
                                                    : parse(
                                                        `${getCourse[0].certificate_merit}`
                                                      )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="online-training-registration-sidebar sidebarTow-padd mt-3">
                <div
                  className="online-form"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/images/online-training-registration/login-bg.png"
                    })`,
                  }}
                >
                  <h5 className="hh5">Registered Participants Login</h5>
                  <div className="online-inner">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label>Username</label>
                        <input value={email}  type="email" name="email" className="form-control" placeholder="Email ID" {...register('email',{required:"Email is Required",pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
})} onChange={(e) => setEmail(e.target.value)}/>
            {errors.email && (<small className="text-danger">Invalid Email Address*</small>)}

                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <input value={password}  type="password" name="password" className="form-control" placeholder="Password" {...register('password',{required:"Password is Required"})} onChange={(e) => setPassword(e.target.value)}/>
            {errors.password && (<small className="text-danger">Invalid Password*</small>)}

                      </div>
                      <button type="submit" className="btn btn-orange">
                        login
                      </button>
                    </form>
                  </div>
                </div>
                <div className="online-sidebar-registraion mt-3">
                  <div
                    className="icon-box"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/images/online-training-registration/green-bg.png"
                      })`,
                    }}
                  >
                    <img src="images/online-training-registration/vactor-icon.png" />
                  </div>
                  <NavLink exact to="/registration" className="btn">
                    <h5>New Participants Registration</h5>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {getMethodology &&
        getMethodology.map((data, index) => (
          <section
            className="smart_grid_handbook bg-banner traing-onlinebg"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "/images/trainings-online-trainings-live-training/bg2.png"
              })`,
            }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading color-f mb-3 pt-3">
                    <h2>Methodology Of Online Training</h2>
                  </div>
                  <div className="training-box-main pt-5">
                    {data.methodology &&
                      data.methodology.map((data1, index) => (
                        <div className="training-box isgf_bluebox">
                          <div className="training-box-img">
                            {/* <img src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon.png`}/> */}
                            <img
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon.png`}
                            />
                          </div>
                          <div className="training-box-text">
                            <p>{data1.columnone}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      {getMethodology &&
        getMethodology.map((data, index) => (
          <section className="smart_grid_handbook">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="training-box-main mobile-block-only">
                        <div
                          className="trainging-bottom-blue no-gap-mobile  text-center"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL +
                              "/images/trainings-online-trainings-live-training/b1.png"
                            })`,
                          }}
                        >
                          <p className="white-bold-font">
                            {" "}
                            {parse(`${data.column_first}`)}
                          </p>
                        </div>

                        <div
                          className="trainging-bottom-orange text-center"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL +
                              "/images/trainings-online-trainings-live-training/o1.png"
                            })`,
                          }}
                        >
                          <p className="white-bold-font">
                            {parse(`${data.column_second}`)}
                          </p>
                        </div>

                        <div
                          className="trainging-bottom-green text-center"
                          style={{
                            backgroundImage: `url(${
                              process.env.PUBLIC_URL +
                              "/images/trainings-online-trainings-live-training/g1.png"
                            })`,
                          }}
                        >
                          <p className="white-bold-font">
                            {parse(`${data.column_third}`)}
                          </p>
                        </div>
                      </div>

                      <div
                        className="isgf-online-tab1 isgf-online-tab-bg mt-50 big-space-bottom"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "/images/trainings-online-trainings-live-training/bgg1.png"
                          })`,
                        }}
                      >
                        <div className="side-small-icon-box">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/isgf.png`}
                          />
                          {/* <img src="images/trainings-online-trainings-live-training/isgf.png"/> */}
                          <p>ISGF Online Training Program</p>
                        </div>
                        <div className="side-right-text">
                          {parse(`${data.isgf_online}`)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}

export default TrainingsOnsiteTrainings;
