import React from "react";
import Media from '../reusable/Media';
function TrainingsAfterLoginSgfc() {
  return (
    <>
      <section className="isgf-breadcum trainings-after_breadcum" style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/trainings-after-login-sgfc/banner.png"
                  })`,
                }}>
        <div className="container">
            <div className="isgf-breadcum-box">
                <h1>Smart Grid Foundation Course</h1>
                <p>
                  Home {'>'} ISGF Initiatives {'>'} ISGF Trainings Online Trainings Smart
                  Grid Foundation Course
                </p>
              </div>
        </div>
      </section>
      <section className="smart_grid_handbook online-training-registration">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="heading mb-4 mt-4">
                <h2>
                  Training Content Of Online Training Programme On Smart Grid
                  Foundation Courses
                </h2>
              </div>
              <p className="mt-3 mb-3">
                Registered Participants of ISGF Online Training Program have the
                of access all the presentations by tutors, recorded videos of
                each session, training manual, other reference material curated
                by ISGF for your learning in the page below. This page will be
                valid for maximum four months after your registration. In case
                of queries, please write to us at
                <a href="team@indiasmartgrid.org">team@indiasmartgrid.org</a>
              </p>






             <div className="mb-5 mt-5">
                <div className="isgf_accordion no-b-uppar-space">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header bg-green" id="heading1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 1</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Introduction to Smart Grids
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body p-3">
                          <div className="row mt-4">
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <div className="vedio-imgbtn position-relative">
                                  {/* <img src="images/trainings-after-login-sgfc/vedio1.png" /> */}
                                  <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/vedio1.png`} />
                                  <div className="youtube-div">
                                    <p>
                                      <a href="#">
                                      <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/icon-play.png`} />
                                        {/* <img src="images/trainings-after-login-sgfc/icon-play.png" /> */}
                                      </a>
                                    </p>
                                    <p>
                                      <a href="#" className="btn btn-white-f">
                                        View Video
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">Reji Kumar Pillai</h4>
                                <h5 className="">ISGF</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Introduction to Smart Grids
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">Reena Suri </h4>
                                <h5 className="">ISGF</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Introduction to Smart Grids
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mt-3">
                      <h2 className="accordion-header bg-green" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 2</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Smart Grid Maturity Model
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row mt-4">
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <div className="vedio-imgbtn position-relative">
                                <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/vedio2.png`} />
                                  {/* <img src="images/trainings-after-login-sgfc/vedio2.png" /> */}
                                  <div className="youtube-div">
                                    <p>
                                      <a href="#">
                                      <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/icon-play.png`} />
                                        {/* <img src="images/trainings-after-login-sgfc/icon-play.png" /> */}
                                      </a>
                                    </p>
                                    <p>
                                      <a href="#" className="btn btn-white-f">
                                        View Video
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">Reji Kumar Pillai</h4>
                                <h5 className="">ISGF</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Smart Grid Maturity Model
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">S. Kundu </h4>
                                <h5 className="">ISGF</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Smart Grid Maturity Model
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 3 (a)</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Introduction to Smart Grid Technologies (Part A)
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">
                          <div className="row mt-4">
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <div className="vedio-imgbtn position-relative">
                                <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/vedio3.png`} />
                                  <div className="youtube-div">
                                    <p>
                                      <a href="#">
                                      <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/icon-play.png`} />
                                      </a>
                                    </p>
                                    <p>
                                      <a href="#" className="btn btn-white-f">
                                        View Video
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">PK Agarwal</h4>
                                <h5 className="">POSOCO(Former</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Introduction to Smart Grid Technologies
                                  <br /> PART - A
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                              <div className="border-green-box">
                                <h4 className="mt-3">Anant Venkateswaran </h4>
                                <h5 className="">ISGF</h5>
                                <p className="normal-p mt-3 mb-4">
                                  Introduction to Smart Grid Technologies
                                  <br /> PART - A
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-orange"
                                >
                                  View/Download Presentation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 3 (b)</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Introduction to Smart Grid Technologies (Part B)
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="row mt-4">
                          <div className="col-md-6 col-lg-4 mb-4">
                            <div className="border-green-box">
                              <div className="vedio-imgbtn position-relative">
                                <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/vedio4.png`} />
                                {/* <img src="images/trainings-after-login-sgfc/vedio4.png" /> */}
                                <div className="youtube-div">
                                  <p>
                                    <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/icon-play.png`} />
                                      {/* <img src="images/trainings-after-login-sgfc/icon-play.png" /> */}
                                    </a>
                                  </p>
                                  <p>
                                    <a href="#" className="btn btn-white-f">
                                      View Video
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 mb-4">
                            <div className="border-green-box">
                              <h4 className="mt-3">Vasanth Prabhu</h4>
                              <h5 className="">Tata Power- DDL</h5>
                              <p className="normal-p mt-3 mb-4">
                                Introduction to Smart Grid Technologies <br />
                                PART - B
                              </p>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-orange"
                              >
                                View/Download Presentation
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 mb-4">
                            <div className="border-green-box">
                              <h4 className="mt-3">Jayant Dabholkar </h4>
                              <h5 className="">Tata Power</h5>
                              <p className="normal-p mt-3 mb-4">
                                Introduction to Smart Grid Technologies
                                <br /> PART - B
                              </p>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-orange"
                              >
                                View/Download Presentation
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4 mb-4">
                            <div className="border-green-box">
                              <h4 className="mt-3">Anant Venkateswaran </h4>
                              <h5 className="">ISGF</h5>
                              <p className="normal-p mt-3 mb-4">
                                Introduction to Smart Grid Technologies
                                <br />
                                PART - B
                              </p>
                              <a
                                href="javascript:void(0)"
                                className="btn btn-orange"
                              >
                                View/Download Presentation
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item  ">
                      <h2 className="accordion-header bg-green" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 4</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            AAdvanced Metering Infrastructure
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>
                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 5</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            DER Integration
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>
                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 6</span>
                          </div>
                          <span className="left-collapse-space">
                            Smart Microgrids
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 7</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Electric Vehicles and Charging Infrastructure
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading8"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading9">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 8</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Energy Storage System
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse9"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading9"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading10">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 9</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Flexibility Solutions
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse10"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading10"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading11">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 10</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Cyber Security
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse11"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading11"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading12">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-expanded="false"
                          aria-controls="collapse12"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 11</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Blockchain Applications
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse12"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading12"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading13">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse13"
                          aria-expanded="false"
                          aria-controls="collapse13"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 12</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Artificial Intelligence and Robotics
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse13"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading13"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading14">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse14"
                          aria-expanded="false"
                          aria-controls="collapse14"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 13</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            New and Emerging Technologies
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse14"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading14"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading15">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse15"
                          aria-expanded="false"
                          aria-controls="collapse15"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 14</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Advanced Analytics
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse15"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading15"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header bg-green" id="heading16">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse16"
                          aria-expanded="false"
                          aria-controls="collapse16"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 15</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Business Models for Smart Grid Applications
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse16"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading16"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading17">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse17"
                          aria-expanded="false"
                          aria-controls="collapse17"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 16</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Policy and Regulatory Aspects
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse17"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading17"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading18">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse18"
                          aria-expanded="false"
                          aria-controls="collapse18"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 17 (1)</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Question and Answer Session
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse18"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading18"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading19">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse19"
                          aria-expanded="false"
                          aria-controls="collapse19"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 17 (2)</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Question and Answer Session
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse19"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading19"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading20">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse20"
                          aria-expanded="false"
                          aria-controls="collapse20"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 18</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Review Module
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse20"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading20"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>

                    <div className="accordion-item ">
                      <h2 className="accordion-header bg-green" id="heading21">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse21"
                          aria-expanded="false"
                          aria-controls="collapse21"
                        >
                          
                          <div className="absolute-front">
                            
                            <span className="blue-collpase">Module 19</span>
                          </div>
                          <span className="left-collapse-space">
                            
                            Valedictory Session
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapse21"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading21"
                        data-bs-parent="#accordionExample"
                        
                      >
                        <div className="accordion-body">...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>






              <div className="heading mb-3 mt-5 ">
                <h2>Other Session Material For Participants</h2>
              </div>

              <div className="row mt-5">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="border-green-box">
                   
                    <img className="mt-3 mb-2" src={`${process.env.PUBLIC_URL}/images/trainings-after-login-sgfc/i-icon.png`} />
                    <h4 className="mt-3 mb-4">PROGRAM MANUAL</h4>

                    <a href="javascript:void(0)" className="btn btn-orange">
                      View/Download
                    </a>
                  </div>
                </div>
              </div>

              <div className="heading mb-3 mt-5 ">
                <h2>Other Reference Material</h2>
              </div>
              <section className="isgf_material mt-5 mb-5">
                <div className="isgf_material_item border-green">
                  <h5> Introduction to Smart Grid</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> SMART GRIDS and Renewables</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>
                <div className="isgf_material_item border-green">
                  <h5> 5gdn@Smart Grid</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>
                <div className="isgf_material_item border-green">
                  <h5> Blockchain In Energy Communitie</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>
                <div className="isgf_material_item border-green">
                  <h5> Artificial Intelligence in The Power Sector</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> E-Mobility and Smart Grids</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> AMI and Customer Service</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Security Aspects of The Smart Grid</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Cyber Security and Smart Grids</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5>
                    
                    Cyber Security of The Smart Grid_ Attack Exposure Analysis
                    Detection
                  </h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Machine Learning Applied to Smart Grids</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Smart Grid Handbook</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> 2021 Energy Statistics India</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> 2021 India Energy Outlook</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> 2021 Indian Renwable Open Access Open Market</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> 2021 World Energy Transitions Outlook</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5>
                    
                    Estimating the Cost of Grid-Scale Lithium-Ion Battery
                    Storage in India
                  </h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Future of Solar Photovoltaic</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> IRENA Power Generation Costs 2020</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> Photovoltaics-Report</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5>
                    
                    Net Zero by 2050-A Roadmap for the Global Energy Sector
                  </h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>

                <div className="isgf_material_item border-green">
                  <h5> S A A R C Smart Grid Roadmap</h5>
                  <a href="javascript:void(0)" className="btn btn-orange">
                    View/Download
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrainingsAfterLoginSgfc;
