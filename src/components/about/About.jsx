import React from "react";
import axios from "axios";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import { NavLink, Link } from "react-router-dom";
import parse from 'html-react-parser';
const GLOBAL = require('../../commonConstants.js');
const url = GLOBAL.BASE_URL+"about-us";
const working_groups = GLOBAL.BASE_URL+"working_groups";
const isgf_activity = GLOBAL.BASE_URL+"isgf-activity";
const isgf_flyer = GLOBAL.BASE_URL+"isgf-flyer";
const isgf_credential = GLOBAL.BASE_URL+"isgf-credential";
const assetUrl = GLOBAL.assetUrl;
function About() {
  const [getAbout, setAbout] = React.useState(null);
  const [getWorking, setWorking] = React.useState(null);
  const [getActivity, setActivity] = React.useState(null);
  const [getFlayer, setFlayer] = React.useState(null);
  const [getCredential, setCredential] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
    setAbout(response.data);
     });
    axios.get(working_groups).then((response) => {
    setWorking(response.data);
     });
    axios.get(isgf_activity).then((response) => {
    setActivity(response.data);
     });
    axios.get(isgf_flyer).then((response) => {
    setFlayer(response.data);
     });
    axios.get(isgf_credential).then((response) => {
    setCredential(response.data);
     });
   },[]);
  // console.log(getWorking);
  if (!getActivity) return null;
  if (!getAbout) return null;
  if (!getWorking) return null;
  if (!getFlayer) return null;
  if (!getCredential) return null;

  return (
    <>
      <section
        className="isgf-breadcum isgf_about_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/about/about-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
                <h1>About Us</h1>
                <p>
                  Home {">"} ISGF {">"} About Us
                </p>
              </div>
        </div>
      </section>
      <section className="isgf_about">
                   {(getAbout) && getAbout.map((data,index)=>(
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading mb-3">
                    <h2>About Us</h2>
                  </div>
                    {parse(`${data.description}`)}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="isgf_bluebox mb-3">
                    <h4 className="heading m-0 isgf_blue_heading mb-3">
                      The Main Objectives Of ISGF Are:
                    </h4>
                   {data.objectives.map((data1,index)=>(
                    <div className="isgf_about_point">
                      <p><i className="fa fa-check"></i>{data1}</p>
                    </div>
                  ))}

                  </div>
                </div>
              </div>

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
                    <div className="heading mb-3">
                      <h2>Working Groups Of ISGF</h2>
                    </div>
                    <div className="row g-4">
                      {(getWorking) && getWorking.map((data,index)=>(
                      <div className="col-md-3">
                        <div className="isgf_about_innergreenbox">
                          <h5>WG-{index+1} </h5>
                          <img
                            src={assetUrl + "/public/forum_img/" + data.image}
                          />
                          <h4>{data.title} </h4>
                        </div>
                      </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div
                    className="isgf_about_bluenbox"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/images/about/blue-bg.jpg"
                      })`,
                    }}
                  >
                    <div className="heading mb-3">
                      <h2>ISGF Activities</h2>
                    </div>
                    <p className="isgf_about_p">
                      Some of the major activities undertaken (and under
                      progress) by India Smart Grid Forum are:
                    </p>
                    <div className="row">
                      {(getActivity) && getActivity.map((data,index)=>(
                      <div className="col-md-6">
                        <div className="isgf_about_innerbluenbox">
                          <img
                            src={assetUrl + "/public/forum_img/" + data.image}
                          />
                          <h4>
                            {data.title}
                          </h4>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-4">
                <div className="col-md-12">
                  <div className="isgf_about_graybox">
                    <div className="row g-5">
                      <div className="col-sm-6">
                        <div className="heading">
                          <h3>ISGF Flyer</h3>
                        </div>
                      {(getFlayer) && getFlayer.map((data,index)=>(
                        <div>
                          <img
                            src={assetUrl + "/public/forum_img/" + data.image}
                            className="img-fluid d-block mx-auto"
                          />
                          <a  target="_blank" href={assetUrl + "/public/forum_img/" + data.document} className="mt-3 btn btn-green">
                            <i className="fa fa-download"></i> Download PDF
                          </a>
                        </div>
                      ))}
                      </div>
                      <div className="col-sm-6">
                        <div className="heading">
                          <h3>ISGF Credentials</h3>
                        </div>
                      {(getCredential) && getCredential.map((data,index)=>(
                        <div>
                          <img
                            src={assetUrl + "/public/forum_img/" + data.image}
                            className="img-fluid d-block mx-auto"
                          />

                          <a target="_blank" href={assetUrl + "/public/forum_img/" + data.document} className="mt-3 btn btn-orange">
                            <i className="fa fa-download"></i> Download PDF
                          </a>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar/>
            </div>
          </div>
        </div>
        ))}
      </section>
    </>
  );
}

export default About;
