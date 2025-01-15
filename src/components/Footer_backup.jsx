// import React from "react";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
import axios from "axios";
import { NavLink, Link } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
const GLOBAL = require('../../commonConstants.js');
const localizer = momentLocalizer(moment);
const url = GLOBAL.BASE_URL+"events";
 
const Footer = () => {
   const [value, onChange] = useState(new Date());
  const [getEvents, setEvents] = React.useState(null);

   var copy  = [];
  var copy1  = [];
  for (let x in getEvents) {
    if(getEvents[x].isgf_event == 0){
      var c = {
        'allDay': false, 
        'end':   new Date(getEvents[x].start_date),
        'start': new Date(getEvents[x].end_date),
        'title': getEvents[x].title,
      }
      copy.push(c);
    }else{
      var c1 = {
        'allDay': false, 
        'end':   new Date(getEvents[x].start_date),
        'start': new Date(getEvents[x].end_date),
        'title': getEvents[x].title,
      }
    }
    copy1.push(c1);
  }   
 
  const myEventsList = copy1;
  const myEventsList1 = copy;
  const re_calc = () => {
    var step1 = document.querySelector('#event-1');
    var step2 = document.querySelector('#event-2');
    step1.style.display="none";
    step2.style.display="block";
  }
  const again_calc = () => {
    var step1 = document.querySelector('#event-1');
    var step2 = document.querySelector('#event-2');
    step1.style.display="block";
    step2.style.display="none";
  }
  React.useEffect(() => {
    axios.get(url).then((response) => {
    setEvents(response.data);
     });
   },[]);
  if (!getEvents) return null;
  return (
    <>
      <div className="footer sec-padd" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/footer.jpg'})`}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="heading mb-3">
                <h2>Linkedin</h2>
              </div>
              <p className="withicon">
                <i className="fa fa-linkedin"></i> The Smart Grid Foundation
                course will introduce the participants with the #SmartGrid
                technologies and their realworld applications | The Course
                starts from 07 July - 14 August 2021 on Digital Platform.
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/footer-img1.png`} alt="" />
            </div>
            <div className="col-md-3">
              <div className="heading mb-3">
                <h2>Tweets</h2>
              </div>
              <p>Tweets by @IndiaSmartGridF</p>
              <p className="withicon">
                <i className="fa fa-twitter"></i> Identify the key barriers in
                realizing the successful development of a robust Smart Grid
                ecosystem; and play a critical role in the Smart Grid
                development
              </p>
              <hr />
              <p className="withicon">
                <i className="fa fa-twitter"></i> The Smart Grid Foundation
                course will introduce the participants with the #SmartGrid
                technologies and their realworld applications | The Course
                starts from 07 July - 14 August 2021 on Digital Platform
              </p>
              <hr />
            </div>
            <div className="col-md-3">
              <div className="heading mb-3">
                <h2>Events Calendar</h2>
              </div>
              <p className="btn tab" onClick={again_calc}>Global Events</p>
              <p className="btn tab" onClick={re_calc}>ISGF Events</p>
              <div className="calendar">
                <div className="calendar-1 text-center mt-5" id="event-1">
                <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 200 }}
                popup={true}
              />
            </div>
            <div className="calendar-1 text-center mt-5" style={{display: `none`}} id="event-2" >
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
                <img src={`${process.env.PUBLIC_URL}/images/map-marker.png`} alt="" />
                <strong>India Smart Grid Forum</strong><br/>
                CBIP Building,Malcha Marg, Chanakyapuri, Delhi-110021
              </p>
              <p>
                <img src={`${process.env.PUBLIC_URL}/images/phone.png`} alt="" />
                <strong>Phone</strong>
                <br />
                <a href="tel:+91-114103 0398" className="contact-email">+91-114103 0398</a>
                
              </p>
              <p>
                <img src={`${process.env.PUBLIC_URL}/images/email.png`} alt="" />
                <strong>Email</strong>
                <br />
                <a href="mailto:contactus@indiasmartgrid.org" className="contact-email">contactus@indiasmartgrid.org</a>
                
              </p>
              <NavLink to="/contact-us" className="btn tab d-block mt-md-4 more-information">
                Click For More Information
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <NavLink to="#">Sitemap</NavLink> |{" "}
              <NavLink to="/guidelines-and-policy">Guidelines & Policy</NavLink> |{" "}
              <NavLink to="/disclaimer">Disclaimer</NavLink> |{" "}
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
