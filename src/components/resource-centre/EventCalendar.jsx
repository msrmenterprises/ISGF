// import React from 'react';
import React, { useState } from "react";
// import Calendar from 'react-calendar';
import Media from "../reusable/Media";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const GLOBAL = require('../../commonConstants.js');
const localizer = momentLocalizer(moment);

const url = GLOBAL.BASE_URL+"events";
const assetUrl = GLOBAL.assetUrl;
function EventCalendar() {
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
   },[getValue1]);
  if (!getEvents) return null;
  // console.log(getEvents);
  return (
    <>
      <section
        className="isgf-breadcum event_calendar_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/event-calendar/event-calendar-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>event calendar</h1>
            <p>
              Home {">"} Resource Center {">"} Event calendar
            </p>
          </div>
        </div>
      </section>
      <section className="event-calendar">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4">
			<div className="heading mb-3">
                  <h2>Event Calendar</h2>
                </div>
              <div className="calendar-box calendar-sticky">
                
                <div className="event-calander-btn">
                  <a
                    className="event-1 c-btn"
                    href="javascript:void(0);"
                    onClick={again_calc}
                  >
                    Global Events
                  </a>
                  <a
                    className="event-2 c-btn"
                    href="javascript:void(0);"
                    onClick={re_calc}
                  >
                    ISGF Events
                  </a>
                </div>

                <div className="calendar">
                  <div className="calendar-1 text-center mt-3" id="event-1">
                    <Calendar
                      localizer={localizer}
                      events={myEventsList}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 400 }}
                      popup={true}
                    />
                  </div>
                  <div
                    className="calendar-1 text-center mt-5"
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
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_membership">
                    <div className="heading mb-3">
                      <h2>Event calendar</h2>
                    </div>
                    <div className="row right-calendar">
                      <div className="col-md-3 mb-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                          setValue(e.target.value)
                          }
                        >
                          <option value="4" selected >View All Events</option>
						  						<option value="1">Present Events</option>
                          <option value="2">Upcoming Events</option>
                          <option value="3">Past Events</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="right-date-calendar"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-12">
                  {getEvents &&
                    getEvents.map((data, index) => (
                      <div className="calendar-box c-box mb-3">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="green-box">
                              <p>
                                <Moment format="ddd">{data.start_date}</Moment>
                                <br />
                                <Moment format="DD">{data.start_date}</Moment>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="full-date">
                              <i className="fa fa-calendar"></i><Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                {data.start_date}
                              </Moment>
                              -
                              <Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                {data.end_date}
                              </Moment>
                            </div>
                            <h5>{data.title}</h5>
                            <p><i className="fa fa-map-marker"></i> {data.location}</p>
                            {parse(`${data.description}`)}
                            <div className="mb-2">
                              <a
                                href={data.url}
                                className="btn btn-orange"
                                target="_blank"
                              >
                                Read Details
                              </a>
                              {/* <a href={assetUrl + "/public/Event_img/" + data.document} className="btn btn-blue"> <i className="fa fa-download" aria-hidden="true"></i> Download</a> */}
                            </div>
                            {data.category_id &&
                              data.category_id.map((data1, index) => (
                                <a href="#" className="btn btn-gray m-0">
                                  {data1.title}
                                </a>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventCalendar;
