import React from "react";
import Media from "../reusable/Media";
import Sidebar from "../reusable/Sidebar";
import axios from "axios";
import Moment from "react-moment";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GLOBAL = require('../../commonConstants.js');

const assetUrl = GLOBAL.assetUrl;
const eventDetail = GLOBAL.BASE_URL+"event-details/";

let url = window.location.pathname;
let event_data = url.split("/");

function EventsDetail() {
  const slug = useParams();
  const [getEvent, setEvent] = React.useState(null);
  React.useEffect(() => {
    axios.get(eventDetail + (slug.id)).then((response) => {
      setEvent(response.data);
    });
  }, [(slug.id)]);
  if (!getEvent) return null;
    // console.log(getEvent)
  return (
    <>
      <section
        className="isgf-breadcum isgf_grid_modernization_breadcum"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/images/grid-modernization/grid-modernization-banner.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="isgf-breadcum-box">
            <h1>{getEvent.title}</h1>
            <p>
              Home {">"} ISGF {">"} ISGF Events {">"} {getEvent.title}
            </p>
           
          </div>
        </div>
      </section>
      <section className="grid_modernization">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <div className="heading mb-3">
                <h2>{getEvent.title} </h2>
            </div>

<div className="calendar-box c-box mb-3">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="green-box">
                              <p>
                                <Moment format="ddd">{getEvent.start_date}</Moment>
                                <br />
                                <Moment format="DD">{getEvent.start_date}</Moment>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="full-date">
                              <i className="fa fa-calendar"></i><Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                {getEvent.start_date}
                              </Moment>
                              -
                              <Moment format=" DD MMMM YYYY @  h:mm:ss a">
                                {getEvent.end_date}
                              </Moment>
                            </div>
                            <h5>{getEvent.title}</h5>
                            <p><i className="fa fa-map-marker"></i> {getEvent.location}</p>
                            {parse(`${getEvent.description}`)}
                            <div className="mb-2">
                              <a
                                href={getEvent.url}
                                className="btn btn-orange"
                                target="_blank"
                              >
                                Read Details
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>

            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default EventsDetail;
