import React from "react";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import { NavLink, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const GLOBAL = require('../../commonConstants.js');
const baseURL = GLOBAL.BASE_URL+"show_user_data";

const assetUrl = GLOBAL.assetUrl;
const SessionMaterialForParticipants = () => {
  const navigate = useNavigate();
  const [getData, setData] = React.useState(null);
  const cookies = new Cookies();
  var email =  cookies.get('data');

  React.useEffect(() => {
    const data = { email: email };
    axios.post(baseURL, data)
        .then(response => setData(response.data));

  }, []);
  if (!getData) return null;
  if (!email) return navigate("/");
  // console.log(email);
  return (
    <>
      <section className="foundation-coruse">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>Courses</h2>
                    </div>
                    <div className="mb-3">
                      <div className="row">
{/*
                        <div className="col-md-4">
                          <div className="foundation-details mb-3">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            <a href="#"><h5>BLOCKCHAIN FOR ENERGY AND UTILITIES</h5></a>
                            <div className="row">
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="foundation-details mb-3">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            <a href="#"><h5>BLOCKCHAIN FOR ENERGY AND UTILITIES</h5></a>
                            <div className="row">
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="foundation-details mb-3">

                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            <a href="#"><h5>BLOCKCHAIN FOR ENERGY AND UTILITIES</h5></a>
                            <div className="row">
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                              <div className="col-md-6">
                              <div className="progress">
                                <div className="progress-bar"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      {(getData) &&
                      (getData).map((data, index) => (
                        <div className="col-md-4">
                          <div className="my-container">
                              <div className="f-course">
                                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                  <NavLink onClick={() => window.scrollTo(0, 0)} to={btoa(data.id)}> <h5>{data.name}</h5></NavLink>
                                  <div className="row">
                                    <div className="col-md-6">
                                    <div className="progress">
                                      <div className="progress-bar"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="progress">
                                      <div className="progress-bar"></div>
                                    </div>
                                    </div>
                                  </div>
                              </div>
                              <img src={assetUrl + "/public/CourseList/" + data.image}/>
                          </div>
                        </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <Sidebar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SessionMaterialForParticipants;
