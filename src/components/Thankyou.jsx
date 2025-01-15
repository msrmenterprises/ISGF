import React, {useEffect}from "react";
import { NavLink } from "react-router-dom";

const Thankyou = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[]);
  if(window.location.href.substr(-2) !== "?r") {
    window.location = window.location.href + "?r";
  }
  // window.location.reload(false);
  // setTimeout(()=>{
  //   window.location.reload(false);
  // }, 500);
  // clearTimeout();
  return (
    <>
      <div className="container thankyou">

        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="text-center thankyou">
              <img
                src="https://www.carlelo.com/website/images/header/new-logo.png"
                alt="carlelo logo"
                className="mb-2"
              />
              <h1>Thank you!</h1> <h6>For visiting ISGF</h6>

            </div>
            <div className="main-content text-center">
            <i className="fa fa-check" aria-hidden="true"></i>
              <p className="main-content__body" data-lead-id="main-content-body">Thank you for reaching out to us. We will revert back soon on your inquiry. For further queries, you may write to us at <a href="mailto:contactus@indiadsmartgrid.org">contactus@indiadsmartgrid.org</a></p>

            </div>
            <div className="text-center">
            <NavLink to="/" className="btn btn-orange">
                Go to Homepage
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Thankyou;

