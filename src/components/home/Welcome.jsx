import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";

function Welcome(setIsShowing ) {
    const [isShown, setIsShown] = React.useState(true);
    /*Hide Welcome Div */
    const handleClick = event => {
        setIsShown(current => !current);
    };
    
  return (
    <div>
        <div className="welcome-banner" style={{display: isShown ? 'block' : 'none'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="main">
                        <div className="text-center">
                        <img
                  src={`${process.env.PUBLIC_URL}/images/isgf_Logo.png`}
                  alt=""
                  className="isgf-logo welcom-logo-isgf"
                />
                        </div>
                        <div className="welcome">
                            <h1>Welcome to ISGF<span className="display-4">We are pleased to announce the launch of our New Website</span></h1>
                        </div>
                        <div className="text-center my-3">
                        <img
                  src={`${process.env.PUBLIC_URL}/images/ribbon.jpg`}
                  alt=""
                  className="isgf-logo "
                />
                        </div>
                        <div className="text-center">
                            <NavLink to="/" className="button-71" onClick={handleClick}>Launch</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome