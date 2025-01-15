import React from "react";
import OnlineTraningSidebar from "../reusable/OnlineTraningSidebar";
import Media from "../reusable/Media";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import parse from "html-react-parser";
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const methodology = GLOBAL.BASE_URL+"methodology";
const course =
GLOBAL.BASE_URL+"course" +
"?model=" +
"online-training";
// const url = course + "?model=" +"online-training";

function TrainingsOnlineTrainingsLiveTraining() {
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
  // setselect(getCourse[0]);
});
axios.get(course).then((response) => {
  setCourse(response.data);
});
}, []);

if (!getMethodology) return null;
if (!getCourse) return null;
if (!getCourse[0]) return null;

return (
<>
  <section
    className="isgf-breadcum trainings-online_breadcum"
    style={{
      backgroundImage: `url(${
        process.env.PUBLIC_URL +
        "/images/trainings-online-trainings-live-training/trainings-online-trainings-live-training.png"
      })`,
    }}
  >
    <div className="container">
      <div className="isgf-breadcum-box">
        <h1>Online Trainings</h1>
        <p>
          Home {">"} ISGF Initiatives {">"} ISGF Trainings Online Trainings
        </p>
      </div>
    </div>
  </section>
  <section className="smart_grid_handbook online-training-registration">
    <div className="container">
      <div className="row">
        <div className="col-md-8 ">
          <div className="heading mb-3">
            <h2>Online Trainings</h2>
          </div>
          <div className="two-btn-training">
            <Link exact to="/online-trainings-program" className="btn active">
              <img
                alt="pic"
                src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/live-training.png`}
              />
              Live training
            </Link>
            <Link exact to="/recorded-training-program" className="btn">
              <img
                alt="pic"
                src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/recorded-training.png`}
              />
              recorded training
            </Link>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="training-tab">
                <h2 className="training-v-tab-heading">
                  Training Programs
                </h2>
                <div
                    className="nav flex-column nav-pills me-3 training-v-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical"
                  >
                  {getCourse &&
                    getCourse.map((data, index) => (

                      <a onClick={() => {
                          handlechange(data);
                        }} className={index === 0 ? "active" : ""} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{data.program}</a>

                    ))}
                    {/* <a
                        onClick={() => {
                          handlechange(data);
                        }}
                        className={index == 0 ? "active" : ""}
                        id="v-pills-annual-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-annual"
                        role="tab"
                        aria-controls="v-pills-annual"
                        aria-selected="true"
                      >
                        {data.program}
                      </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                {/* <div
                  className={`tab-pane fade ${
                    getselect ? "" : "show active"
                  }`}
                  id="v-pills-annual"
                  role="tabpanel"
                  aria-labelledby="v-pills-annual-tab"
                > */}
                <div className={`tab-pane show active ${
                    getselect ? "" : "show active"
                  }`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                  <div className="heading mb-3">
                    <h2>{getselect.program ? getselect.program : getCourse[0].program}</h2>
                  </div>
                  {getselect.description
                    ? parse(`${getselect.description}`)
                    : parse(`${getCourse[0].description}`)}

                <div className="isgf_accordion">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2
                          className="accordion-header bg-green"
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
                            <img
                              className="logo-icon"
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon1.png`}
                              alt="pic"
                            />
                            Objectives and Benefits
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body border p-3">
                            <div className="row">
                              <div className="col-md-12">
                                {getselect.objectives
                                  ? parse(`${getselect.objectives}`)
                                  : parse(`${getCourse[0].objectives}`)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mt-3">
                        <h2
                          className="accordion-header bg-green"
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
                            <img alt="pic"
                              className="logo-icon"
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon2.png`}
                            />
                            Target Audience
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body border p-3">
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
                                  <img className="logo-icon" src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon3.png`} />

                                    Topics Covered
                                  </button>
                                </h2>
                                <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                                  <div className="accordion-body competitions p-3">

        {((getselect.topic_covered))  ? <>
          <div className="accordion accordion-flush" id="accordionFlushExample001">
          {(getselect.topic_covered) && getselect.topic_covered.map((data1,index1)=>(
            <div className="accordion-item">
              <h2 className="accordion-header bg-blue" id={`flush-headingOne0001${index1}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne0001${index1}`} aria-expanded="false" aria-controls={`flush-collapseOne0001${index1}`}>
                  {data1.columnone}
                </button>
              </h2>
              <div id={`flush-collapseOne0001${index1}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne0001${index1}`} data-bs-parent="#accordionFlushExample001">
                <div className="accordion-body">
                  <p>{data1.columntwo}</p>
                  <p>{parse(`${data1.columnthree}`)}</p>
                </div>
              </div>
            </div>
             ))}
          </div>
</>: <>
<div className="accordion accordion-flush" id="accordionFlushExample0001">
            {(getCourse[0].topic_covered) && getCourse[0].topic_covered.map((data1,index1)=>(
            <div className="accordion-item">
              <h2 className="accordion-header bg-blue" id={`flush-headingOne0001${index1}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne0001${index1}`} aria-expanded="false" aria-controls={`flush-collapseOne0001${index1}`}>
                  {data1.columnone}
                </button>
              </h2>

              <div id={`flush-collapseOne0001${index1}`} className="accordion-collapse collapse" aria-labelledby={`#flush-headingOne0001${index1}`} data-bs-parent="#accordionFlushExample0001">
                <div className="accordion-body">
                  <p>{data1.columntwo}</p>
                  <p>{parse(`${data1.columnthree}`)}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
</>}

                                  </div>
                                </div>
                              </div>

                      <div className="isgf_register_green_btn text-center my-3">
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
                          alt="pic" width="45px"/> Download/View Brochure
                        </a>
                      </div>

                      <div className="accordion-item ">
                         <h2
                          className="accordion-header bg-green"
                          id="flush-headingFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            <img alt="pic"
                              className="logo-icon"
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon6.png`}
                            />
                            FEE AND REGISTRATION
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body p-3">
                            <table className="table table-bordered blue-border mt-2">
                              <thead className="bg_blue">
                                <tr>
                                  <th scope="col">
                                    Model (Online Offline name)
                                  </th>
                                  <th scope="col">Program</th>
                                  <th scope="col">Fee + GST(18%)</th>
                                  <th scope="col">Amount with GST</th>
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
                                  id="flus-feeMain"
                                >
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="flush-feeHead1"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-feeOne"
                                        aria-expanded="false"
                                        aria-controls="flush-feeOne"
                                      >
                                        Payment Options
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-feeOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="flush-feeHead1"
                                      data-bs-parent="#flus-feeMain"
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
                                      id="flush-feeHead2"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-feeTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-feeTwo"
                                      >
                                        *Special Offers
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-feeTwo"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="flush-feeHead2"
                                      data-bs-parent="#flus-feeMain"
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
                                      id="flush-feeHead3"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-feeThree"
                                        aria-expanded="false"
                                        aria-controls="flush-feeThree"
                                      >
                                        Terms and Conditions
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-feeThree"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="flush-feeHead3"
                                      data-bs-parent="#flus-feeMain"
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
                          id="flush-headingFive"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                          >
                            <img alt="pic"
                              className="logo-icon"
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon7.png`}
                            />
                            Course Schedule
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFive"
                          data-bs-parent="#accordionFlushExample"
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
                                    id="cExample"
                                  >
                                    {getselect.course_schedule &&
                                      getselect.course_schedule.map(
                                        (data3, index) => (
                                          <div className="accordion-item">
                                            <h2 className="accordion-header" id={`flush-headingOne02${index}`}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse02${index}`} aria-expanded="false" aria-controls={`flush-collapse02${index}`}>
                                                {data3.columnone}
                                              </button>
                                            </h2>
                                            <div id={`flush-collapse02${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne02${index}`} data-bs-parent="#cExample">
                                              <div className="accordion-body p-3">
                                                <p>{data3.columntwo}</p>
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
                                    id="cExample1"
                                  >
                                    {getCourse[0].course_schedule &&
                                      getCourse[0].course_schedule.map(
                                        (data3, index) => (
                                          <div className="accordion-item">

                                            <h2 className="accordion-header" id={`flush-headingOne02${index}`}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse02${index}`} aria-expanded="false" aria-controls={`flush-collapse02${index}`}>
                                                {data3.columnone}
                                              </button>
                                            </h2>
            <div id={`flush-collapse02${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne02${index}`} data-bs-parent="#cExample1">
                                              <div className="accordion-body p-3">
                                                <p>{data3.columntwo}</p>
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
                          id="flush-headingSix"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix"
                            aria-expanded="false"
                            aria-controls="flush-collapseSix"
                          >
                            <img alt="pic"
                              className="logo-icon"
                              src={`${process.env.PUBLIC_URL}/images/trainings-online-trainings-live-training/icon8.png`}
                            />
                            EXAMINATION AND CERTIFICATION
                          </button>
                        </h2>
                        <div
                          id="flush-collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingSix"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body competitions p-3">
                            <div className="accordion-inner-blue mt-3">
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample03"
                              >
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="flush-OnlineOneHead"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#flush-OnlineOne"
                                      aria-expanded="false"
                                      aria-controls="flush-OnlineOne"
                                    >
                                      Online Examination
                                    </button>
                                  </h2>
                                  <div
                                    id="flush-OnlineOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-OnlineOneHead"
                                    data-bs-parent="#accordionFlushExample03"
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
                                    id="flush-OnlineOneHead2"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#flush-OnlineTwo"
                                      aria-expanded="false"
                                      aria-controls="flush-OnlineTwo"
                                    >
                                      CERTIFICATE OF MERIT
                                    </button>
                                  </h2>
                                  <div
                                    id="flush-OnlineTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-OnlineOneHead2"
                                    data-bs-parent="#accordionFlushExample03"
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
        <div className="col-lg-4">
          <div className="online-training-registration-sidebar sidebarTow-padd mt-5">
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
                <img alt="pic"
                  src={`${process.env.PUBLIC_URL}/images/online-training-registration/vactor-icon.png`}
                />
              </div>
              <NavLink
                exact
                to="/registration"
                style={{ textDecoration: `none` }}
              >
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
        <div className="container">
          <div className="heading color-f mb-3 pt-3">
            <h2>Methodology Of Online Training</h2>
          </div>
          <div className="training-box-main pt-5">
                {data.methodology &&
                  data.methodology.map((data1, index) => (
                    <div className="training-box isgf_bluebox">
                      <div className="training-box-img">
                        <img alt="pic"
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
      </section>
    ))}
  {getMethodology &&
    getMethodology.map((data, index) => (
      <section className="smart_grid_handbook">
        <div className="container">
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
                      alt="pic"/>
                      <p>ISGF Online Training Program</p>
                    </div>
                    <div className="side-right-text">
                      {parse(`${data.isgf_online}`)}
                    </div>
                  </div>
        </div>
      </section>
    ))}
</>
);
}

export default TrainingsOnlineTrainingsLiveTraining;
