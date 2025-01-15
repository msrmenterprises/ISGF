import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
const GLOBAL = require('../../commonConstants');
const assetUrl = GLOBAL.assetUrl;
const WhatsNew_program = GLOBAL.BASE_URL + "events_home";
const WhatsNew_member = GLOBAL.BASE_URL + "members_home";
const WhatsNew_focus = GLOBAL.BASE_URL + "focus-areas-home";
const whatnew = {
  margin: 30,
  responsiveClass: true,
  loop: true,
  nav: true,
  autoplay: false,

  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};



const WhatsNew = () => {
  const [loading, setLoading] = React.useState(false);
  const [getWhatsNewMember, setWhatsNew_member] = React.useState(null);
  const [getWhatsWhatsNew_focus, setWhatsWhatsNew_focus] = React.useState(null);
  const [getWhatsWhatsNew_program, setWhatsWhatsNew_program] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios.get(WhatsNew_member).then((response) => {
      setWhatsNew_member(response.data);
    });
    axios.get(WhatsNew_focus).then((response) => {
      setWhatsWhatsNew_focus(response.data);
    });
    axios.get(WhatsNew_program).then((response) => {
      setWhatsWhatsNew_program(response.data);
    });
    setLoading(false);
  }, []);
  if (!getWhatsNewMember) return null;
  if (!getWhatsWhatsNew_focus) return null;
  if (!getWhatsWhatsNew_program) return null;

  return (
    <>
    {loading ?
      <>
      <div className="site-loader">
        Loading...
      </div>
      </>
     : <>
    <div className="whats-new sec-padd" >
      <div className="container">
        <div className="heading mb-3">
          <h2>What's New</h2>
        </div>
        <div className="row gx-3 gy-3">
          <div className="col-md-12">
            <div className="home-demo">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                {...whatnew}
              >
                <div className="item">
                  <div className="box what-min first_two_member_none">
                    <div className="box-head">ISGF Member Updates</div>
                    <div className="box-body">
                      {(getWhatsNewMember) && getWhatsNewMember.map((data, index) => (
                        <p>
                          <i className="fa fa-check"></i>
                          {data.title}
                        </p>
                      ))}
                    </div>
                    <div className="text-center mb-2 click-here">
                      <NavLink to="/members-list" className="btn btn-orange" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box what-min">
                    <div className="box-head">ISGF New Focus Areas </div>
                    <div className="box-body">
                      {(getWhatsWhatsNew_focus) && getWhatsWhatsNew_focus.map((data, index) => (
                        <p>
                          <i className="fa fa-check"></i>
                          {data.title}
                        </p>
                      ))}
                    </div>
                    <div className="text-center mb-2 click-here">
                      <NavLink to="/isgf-focus-areas" className="btn btn-orange" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="item" direction="down"  height="200">
                  <div className="box what-min">
                    <div className="box-head">ISGF Programs and Public Notices</div>
                    <div className="box-body">
                      <h5>ISGF Programs</h5>
                      {(getWhatsWhatsNew_program) && getWhatsWhatsNew_program.map((data, index) => (

                       <p>
                          {((data.public_notice == 0)) ? <> <i className="fa fa-check"></i> {data.title} </> : <> </>}
                        </p>

                      ))}

                      <h5>Public Notice by ISGF</h5>

                      {(getWhatsWhatsNew_program) && getWhatsWhatsNew_program.map((data, index) => (

                        <p>
                          {((data.public_notice == 1)) ? <> <i className="fa fa-check"></i> {data.title} </> : <> </>}

                        </p>

                      ))}



                    </div>
                    <div className="text-center mb-2 click-here">
                      <NavLink to="/event-calendar" className="btn btn-orange" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </OwlCarousel>

            </div>
          </div>
        </div>
      </div>
    </div>
     </>
    }
    </>
  )
}
export default WhatsNew;