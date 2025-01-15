// import React from "react";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
import { NavLink, Link } from 'react-router-dom';
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import ScrollToTop from './ScrollToTop';
import { Calendar, momentLocalizer } from "react-big-calendar";
import TwitterEmbed from "../../src/TwitterEmbed.js";
import moment from "moment";
import { LinkedInEmbed  } from 'react-social-media-embed';
const GLOBAL = require('../commonConstants.js');
const localizer = momentLocalizer(moment);
const url = GLOBAL.BASE_URL+"events";

const Footer = () => {
  const [value, onChange] = useState(new Date());
  const [getEvents, setEvents] = React.useState(null);
  const [getValue, setValue] = React.useState(null);
  var copy = [];
  var copy1 = [];
  for (let x in getEvents) {
    if (getEvents[x].isgf_event == 0) {
      var c = {
        allDay: false,
        end: new Date(getEvents[x].start_date),
        start: new Date(getEvents[x].end_date),
        title: getEvents[x].title,
      };
      copy.push(c);
    } else {
      var c1 = {
        allDay: false,
        end: new Date(getEvents[x].start_date),
        start: new Date(getEvents[x].end_date),
        title: getEvents[x].title,
      };
    }
    copy1.push(c1);
  }

  const myEventsList = copy1;
  const myEventsList1 = copy;
  const re_calc = () => {
    var step1 = document.querySelector("#event-1");
    var step2 = document.querySelector("#event-2");
    step1.style.display = "none";
    step2.style.display = "block";
  };
  const again_calc = () => {
    var step1 = document.querySelector("#event-1");
    var step2 = document.querySelector("#event-2");
    step1.style.display = "block";
    step2.style.display = "none";
  };
  var getValue1 = '';
  if(getValue != null){
    getValue1 = getValue;
  }else{
    getValue1 = 4;
  }
  // console.log(new_url);
  React.useEffect(() => {
  const new_url = url + "?id=" + getValue1;
    axios.get(new_url).then((response) => {
    setEvents(response.data);
     });
    window.scrollTo(0, 0);

   },[getValue1]);
  if (!getEvents) return null;
  // console.log(getEvents);

  return (
    <>

      <div   className="footer sec-padd" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/footer.jpg'})`}}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="heading mb-3">
                <h2>Linkedin</h2>
              </div>
              <p className='mb-4'>linkedin by @IndiaSmartGridF</p>
              {/* <p className="withicon">
                <i className="fa fa-linkedin"></i> The Smart Grid Foundation
                course will introduce the participants with the #SmartGrid
                technologies and their realworld applications | The Course
                starts from 07 July - 14 August 2021 on Digital Platform.
              </p> */}
              {/* <img src={`${process.env.PUBLIC_URL}/images/footer-img1.png`} alt="" /> */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
  <LinkedInEmbed
    url="https://www.linkedin.com/embed/feed/update/urn:li:share:7036592347752673281"
    // postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
    width={"100%"}
    height={315}
  />
</div>
            </div>
            <div className="col-md-3">
              <div className="heading mb-3">
                <h2>Tweets</h2>
              </div>
              <p className='mb-4'>Tweets by @IndiaSmartGridF</p>
            <TwitterEmbed/>

              <hr />
            </div>

          <div className="col-md-3">
          <div className="heading mb-3">
                <h2>Events Calendar</h2>
              </div>
          <div className="c-tab">
                <button onClick={re_calc} className="btn btn-tab">
                  ISGF Events
                </button>
                <button  onClick={again_calc} className="btn btn-tab">
                  Global Events
                </button>
              </div>
              <div className="calendar">
                  <div className="calendar-1 text-center" id="event-1">
                    <Calendar
                      localizer={localizer}
                      events={myEventsList}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 390 }}
                      popup={true}
                    />
                  </div>
                  <div
                    className="calendar-1 text-center"
                    style={{ display: `none` }}
                    id="event-2"
                  >
                    <Calendar
                      localizer={localizer}
                      events={myEventsList1}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 400 }}
                      popup={true}
                    />
                  </div>
                </div>
          </div>

            <div className="col-md-3 contact">
              <div className="heading mb-3">
                <h2>Contact Us</h2>
              </div>
              <p>
              <span className='icon-footer'><i className="fa fa-map-marker"></i></span>
              <span><strong>India Smart Grid Forum</strong><br/>
                CBIP Building,Malcha Marg, Chanakyapuri, Delhi-110021</span>
              </p>
              <p>
              <span className='icon-footer'><i className="fa fa-phone"></i></span>
              <span><strong>Phone</strong>
                <br />
                <a href="tel:+91-114103 0398" className="contact-email">+91-114103 0398</a></span>

              </p>
              <p>
              <span className='icon-footer'><i className="fa fa-envelope"></i></span>
              <span><strong>Email</strong>
                <br />
                <a href="mailto:contactus@indiasmartgrid.org" className="contact-email">contactus@indiasmartgrid.org</a></span>

              </p>
              <NavLink onClick={() => window.scrollTo(0, 0)} to="/contact-us" className="btn btn-tab d-block mt-md-4 more-information">
                Click For More Information
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center" onClick={() => window.scrollTo(0, 0)}>
              <NavLink to="#">Sitemap</NavLink> |{" "}
              <Link to="/guidelines-and-policy">Guidelines & Policy</Link> |{" "}
              <NavLink  to="/disclaimer">Disclaimer</NavLink> |{" "}
              <NavLink to="/privacy-policy">Privacy Policy</NavLink> |{" "}
              <NavLink to="/terms-conditions">Terms and Conditions</NavLink> |{" "}
              <NavLink to="/refund-and-cancellation">Refund and Cancellation</NavLink>
            </div>
            <div className="col-md-4 text-md-end"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
