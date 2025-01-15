import React from "react";
import Media from '../reusable/Media';
import Cookies from 'universal-cookie';

function NewParticipantsRegistrationPayOffline() {
  const cookies = new Cookies();
  cookies.remove('data', { path: '/' });
  // console.log(cookies.get('data'));
  return (
    <>
      <section className="isgf-breadcum trainings_participants_breadcum" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/trainings-participants/trainings-participants-banner.jpg"})`,}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="isgf-breadcum-box">
                <h1>ISGF Trainings Participants Registration</h1>
                <p>
                  Home {'>'} ISGF Initiatives {'>'} ISGF Trainings New Participants
                  Registration
                </p>
              </div>
              <Media/>
            </div>
          </div>
        </div>
      </section>
      <section className="space-page trainings-participants ">
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="trainings-participants-form custom-shadow mb-4">
                <h5>Pay Offline</h5>
                <div className="info-half-div mt-4 mb-3">
                  <h4 className="blue-p">India Smart Grid Forum</h4>
                  <div className="half-flex-between">
                    <ul className="info-ul">
                      <li>
                        <span>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>{" "}
                        CBIP Building,Malcha Marg,Chanakyapuri,Delhi-110021
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>{" "}
                        +91 114103 0398
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>{" "}
                        contactus@indiasmartgrid.org,
                      </li>
                      <li>
                        <span>
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </span>{" "}
                        www.indiasmartgrid.org
                      </li>
                    </ul>
                    <img className="side-logo-img" src="images/isgf_Logo.png" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="full-btn-radius mt-4">
                      <a href="" className="btn btn-blue btn-size">
                        TO PAY OFFLINE/LATER FOR ISGF ONLINE TRAINING PROGRAM
                      </a>
                    </div>
                    <h4 className="text-center mt-4">
                      Please pay through RTGS / NEFT / Fund Transfer Methods
                    </h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="info-half-div mt-4 mb-3">
                      <p>
                        Bank Details for RTGS / NEFT / Fund Transfer of ISGF are
                        mentioned below below:
                      </p>

                      <p className="mb-1">
                        {" "}
                        <span className="blue-p">
                          <b> Account Name:</b>
                        </span>
                        India Smart Grid Forum;
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Address: </b>
                        </span>{" "}
                        CBIP Building Malcha Marg New Delhi – 110021;
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Account Number:</b>
                        </span>{" "}
                        00031110005017;
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Bank Name: </b>
                        </span>{" "}
                        HDFC Bank Ltd;
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>RTGS/NEFT/IFSC Code: </b>
                        </span>{" "}
                        HDFC0000003;
                      </p>
                      <p className="mb-1">
                        <span className="blue-p">
                          <b>Bank Address: </b>
                        </span>{" "}
                        209-214 Kailash Building, 26 K G Marg, New Delhi –
                        110001
                      </p>
                    </div>

                    <h4 className="text-center mt-4 blue-p upppr">
                      <b>Pease Note</b>
                    </h4>
                    <h4 className="text-center mt-4">
                      Pease Note After the process of RTGS / NEFT / Fund
                      Transfer,
                    </h4>

                    <div className="btn-3d">
                      <p className="btn btn-orange">
                        Kindly email transfer details at team@indiasmartgrid.org
                        and waqar@indiasmartgrid.org
                      </p>
                      <p className="btn btn-orange">
                        Receipt of Payment before the Online Training Program is
                        mandatory
                      </p>
                    </div>
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

export default NewParticipantsRegistrationPayOffline;
