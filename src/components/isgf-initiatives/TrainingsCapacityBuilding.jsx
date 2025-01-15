import React from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const assetUrl = GLOBAL.assetUrl;
const methodology = GLOBAL.BASE_URL+"methodology";
function TrainingsCapacityBuilding() {
  const [getMethodology, setMethodology] = React.useState(null);
  React.useEffect(() => {
    axios.get(methodology).then((response) => {
    setMethodology(response.data);
     });
   },[]);
  if (!getMethodology) return null;
  return (
    <>
      <section className="isgf-breadcum trainees_capacity_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/trainings-capacity-banner.jpg"
                  })`,
                }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="isgf-breadcum-box">
                <h1>Trainings & Capacity Building</h1>
                <p>
                  Home {">"} ISGF Initiatives {">"} Trainings & Capacity
                  Building
                </p>
              </div>
              <div className="isgf_breadcum_media">
                <a href="w#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-youtube"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
       {(getMethodology) && getMethodology.map((data,index)=>(
      <section className="competitions trainees-trained">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="isgf_register_green_btn text-center mt-3" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/green.jpg"
                  })`,
                }}>
                <a href="registration" className="btn white-btn-blue">
                  {" "}
                  Register Now{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="isgf_register_orange_btn text-center mt-3" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/orange.jpg"
                  })`,
                }}>
                <a href="online-training-registration" className="btn blue-btn-white">
                  {" "}
                  Registered Participants Login{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-pills mb-3 half-tab-btn mt-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/trainings-capacity/online.png`} /> Online
                    Trainings
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/trainings-capacity/onsite.png`} /> Onsite
                    Trainings
                  </button>
                </li>
              </ul>
              <div className="tab-content " id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div className="heading mb-3 mt-50">
                    <h2>Methodology Of Online Training</h2>
                  </div>

                  <div className="training-box-main mt-50">
                  {(data.methodology) && data.methodology.map((data1,index)=>(
                    <div className="training-box isgf_bluebox">
                      <div className="training-box-img">
                        <img src={`${process.env.PUBLIC_URL}/images/trainings-capacity/icon.png`}/>
                      </div>
                      <div className="training-box-text">
                        <p>{data1.columnone}</p>
                      </div>
                    </div>
                  ))}
  
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="training-box-main mobile-block-only mt-50">
                <div className="trainging-bottom-blue no-gap-mobile text-center" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/contact-blue.jpg"
                  })`,
                }}>
                  <p className="white-bold-font">
                   {parse(`${data.column_first}`)}
                  </p>
                </div>

                <div className="trainging-bottom-orange text-center" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/contact-orange.jpg"
                  })`,
                }}>
                  <p className="white-bold-font">
                    {parse(`${data.column_second}`)}
                  </p>
                </div>

                <div className="trainging-bottom-green text-center" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/contact-green.jpg"
                  })`,
                }}>
                  <p className="white-bold-font">
                    {parse(`${data.column_third}`)}
                  </p>
                </div>
              </div>

              <div className="isgf-online-tab1 isgf-online-tab-bg mt-50 big-space-bottom" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-capacity/program-bg.png"
                  })`,
                }}>
                <div className="side-small-icon-box">
                  <img src="images/trainings-capacity/isgf.png" />
                  <p>ISGF Online Training Program</p>
                </div>
                <div className="side-right-text">
                  <p>
                    {parse(`${data.isgf_online}`)}
                  </p>
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

export default TrainingsCapacityBuilding;
